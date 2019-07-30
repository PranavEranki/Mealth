import numpy as np
import pandas as pd
from keras.preprocessing.text import one_hot
from keras.preprocessing.sequence import pad_sequences
from keras.models import Sequential
from keras.layers import Dense
from keras.layers import Flatten
from keras.layers import Dropout
from keras.layers import LSTM
from keras.layers.embeddings import Embedding
from sklearn.preprocessing import LabelEncoder
from sklearn.preprocessing import OneHotEncoder
from keras.models import model_from_json
from sklearn.model_selection import StratifiedKFold
import sys


#happiness, hate, love, sadness, worry = 0,1,2,3,4
load = False

for i in range(1,len(sys.argv)):
	if str(sys.argv[i]) == "-l":
		load = True
	elif str(sys.argv[i]) == "-f":
		filename = sys.argv[i+1]


data = pd.read_csv('text_emotion.csv')
#print(data['sentiment'].value_counts())

sentiments = ['sadness', 'happiness', 'love', 'hate', 'worry']
n_classes = len(sentiments)

data = data.loc[data['sentiment'].isin(sentiments)]
#print(data['sentiment'].value_counts())

contents = data['content']
contents = contents.tolist()

# find total number of unique words
total = []
for i in range(len(contents)):
	total.extend(contents[i].split(' '))
vocab_size = len(set(total)) #around 42000 unique words

labels = data['sentiment'].tolist()
labels = np.array(labels)
#print(labels)
# integer encode
label_encoder = LabelEncoder()
integer_encoded = label_encoder.fit_transform(labels)
#print(integer_encoded)
# binary encode
onehot_encoder = OneHotEncoder(sparse=False)
integer_encoded = integer_encoded.reshape(len(integer_encoded), 1)
onehot_encoded = onehot_encoder.fit_transform(integer_encoded)

labels = onehot_encoded

# integer encode the documents
encoded_sentences = [one_hot(c, vocab_size) for c in contents]

max_length = 0
for i in range(len(encoded_sentences)):
	max_length = max(max_length, len(encoded_sentences[i]))

padded_sentences = pad_sequences(encoded_sentences, maxlen=max_length, padding='post')


if not load:
	# define the model
	model = Sequential()
	model.add(Embedding(vocab_size, 16, input_length=max_length))
	model.add(Dropout(0.2))
	#model.add(Flatten())
	model.add(LSTM(32))
	model.add(Dropout(0.2))
	model.add(Dense(n_classes, activation='sigmoid'))

	# compile the model
	model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['acc'])
	# summarize the model
	print(model.summary())

	# fit the model
	model.fit(padded_sentences, labels, epochs=100, batch_size=500, verbose=1)

	# evaluate the model
	loss, accuracy = model.evaluate(padded_sentences, labels, verbose=0)
	print('Accuracy: %f' % (accuracy*100))

	# serialize model to JSON
	model_json = model.to_json()
	with open("model.json", "w") as json_file:
	    json_file.write(model_json)
	# serialize weights to HDF5
	model.save_weights("model.h5")
	print("Saved model to disk")

if (load):
	# load json and create model
	json_file = open('model.json', 'r')
	loaded_model_json = json_file.read()
	json_file.close()
	loaded_model = model_from_json(loaded_model_json)
	# load weights into new model
	loaded_model.load_weights("model.h5")
	print("Loaded model from disk")


	# test data
	test_sentences = []
	file = open(filename, 'r') 
	for line in file: 
		sentences = line.split('.')
		test_sentences.extend(sentences)

	while(' \n' in test_sentences) : 
	    test_sentences.remove(' \n') 
	while('' in test_sentences) : 
	    test_sentences.remove('') 
	#print(test_sentences)

	encoded_test = [one_hot(d, vocab_size) for d in test_sentences]
	#print(encoded_test)
	padded_test = pad_sequences(encoded_test, maxlen=max_length, padding='post')

	predictions = loaded_model.predict(padded_test)
	avg_pred = np.mean(predictions, axis=0)
	print(predictions)
	print(avg_pred)
	avg_pred = avg_pred*100
	avg_pred = np.round_(avg_pred)
	avg_pred = avg_pred.astype(int)

	print('Happiness Score: = ' + str(avg_pred[0]))
	print('Hate Score: = ' + str(avg_pred[1]))
	print('Love Score: = ' + str(avg_pred[2]))
	print('Sadness Score: = ' + str(avg_pred[3]))
	print('Worry Score: = ' + str(avg_pred[4]))
	

	# output to json
	import json

	from datetime import datetime
	my_date = datetime.now()
	my_date = my_date.date()

	data = {}
	data['date'] = my_date
	data['happiness'] = avg_pred[0]
	data['hate'] = avg_pred[1]
	data['love'] = avg_pred[2]
	data['sadness'] = avg_pred[3]
	data['worry'] = avg_pred[4]
	json_data = json.dumps(data, indent=4, sort_keys=True, default=str)
	name = str(my_date) + "mental_health.json"
	with open(name, 'w') as outfile:
		outfile.write(json_data)



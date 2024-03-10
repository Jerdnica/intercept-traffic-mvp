/* globals chrome, bgapp, match */
{
    let count = 0;
    chrome.webRequest.onBeforeRequest.addListener(function(details) {
        count++;
        chrome.runtime.sendMessage({ message: "get_data", data:  count}, function (response) {});
    }, {
        urls: ["<all_urls>"]
    }, ["blocking"]);

    chrome.webRequest.onHeadersReceived.addListener(function() {
        console.log('receiving header')
    }, {
        urls: ["<all_urls>"]
    }, ["blocking", "responseHeaders"]);

    chrome.webRequest.onBeforeSendHeaders.addListener(function() {
        console.log('sending header')
    }, {
        urls: ["<all_urls>"]
    }, ["blocking", "requestHeaders"]);
}

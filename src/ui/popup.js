chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "get_data") {
        document.getElementById('processedCount').innerText = request.data;
    }
});
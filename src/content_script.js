var headerBar;

function replaceHeader() {
    // check if element exists yet
    headerBar = document.querySelector('#outer-container > div > div.top-bar');
    var buttons = document.getElementsByClassName('btn btn-red');
    buttons.classList.add('ui-buttons btndanger');
    if (headerBar) {
        // element exists, remove the event listeners so we don't run this twice
        headerBar.styleList.add('')

        
        headerBar.classList.remove('header-dark');

        // default to always removing the border
        headerBar.classList.add('great-header');

        // check storage if we want it back
        chrome.storage.sync.get(['enabled'], function (results) {
            if (results.enabled || results.enabled === undefined) {
                 headerBar.classList.add('great-header');
            }
        });

        // send a message to the background script to enable the page action
        chrome.runtime.sendMessage('enable_page_action', function () {});
    }
}

// event listeners
document.addEventListener('DOMNodeInserted', replaceHeader);
document.addEventListener('DOMContentLoaded', replaceHeader);

// listen for messages from the background script to toggle
chrome.runtime.onMessage.addListener(function (message, sender, callback) {
    if (message === 'toggle_style') {
        headerBar.classList.toggle('great-header');
    }
});

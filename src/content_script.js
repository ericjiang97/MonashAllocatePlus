var headerBar;

function replaceContent() {
    // check if element exists yet
    headerBar = document.querySelector('#outer-container > div > div.top-bar');
    
    timetablesHome = document.querySelector("#outer-header > header > div.mon-link-block > div > a");
    timetablesHome.classList.add("ui");
    timetablesHome.classList.add("button");
    timetablesHome.classList.add("btnmainblue");
    
    helpmeButton = document.querySelector("body > div.SkipThisFixedPosition.walkme-custom-icon-outer-div.walkme-launcher-id-37098.walkme-custom-launcher-outer-div.walkme-text-launcher.custom-launcher-26825.walkme-icon-root-Launcher-37098.walkme-not-embed > div");  
    helpmeButton.classList.add("ui");
    helpmeButton.classList.add("button");
    helpmeButton.classList.add("btnlightblue");
}

// event listeners
document.addEventListener("DOMContentLoaded", replaceContent);

// listen for messages from the background script to toggle
chrome.runtime.onMessage.addListener(function (message, sender, callback) {
    if (message === 'toggle_style') {
        headerBar.classList.toggle('great-header');
    }
});

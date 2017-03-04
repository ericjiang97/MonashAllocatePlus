var headerBar;

function replaceContent() {
    
    timetablesHome = document.querySelector("#outer-header > header > div.mon-link-block > div > a");
    timetablesHome.classList.add("ui");
    timetablesHome.classList.add("button");
    timetablesHome.classList.add("btnmainblue");


    // check if element exists yet
    headerBar = document.querySelector('#outer-header > header > div.mon-brand-header > div.wrapper');\
    headerBar.appendChild(timetablesHome)
    
}

// event listeners
document.addEventListener("DOMContentLoaded", replaceContent);

// listen for messages from the background script to toggle
chrome.runtime.onMessage.addListener(function (message, sender, callback) {
    if (message === 'toggle_style') {
        headerBar.classList.toggle('great-header');
    }
});

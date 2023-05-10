import { TurndownService } from './turndown.js';


console.log("test")
chrome.action.onClicked.addListener(function (tab) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log('dispatching call to content script')
        if (tabs.length > 0) {
          var tabId = tabs[0].id;

          chrome.scripting.executeScript({
            target: {tabId: tabId, allFrames: true},
            files: ['contentScript.js']
          })
        }
      });
  
    // Listen for messages from the content script
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
      if (request.markdown) {
        console.log(request.markdown);
      } else {
        console.log("Error extracting chat data");
      }
    });
  });

// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'contentData') {
    chrome.runtime.sendMessage(message);
    console.log('background')
  }
});


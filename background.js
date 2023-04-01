import { TurndownService } from './turndown.js';


chrome.action.onClicked.addListener(function (tab) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
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


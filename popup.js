// popup.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'conversation') {
    console.log('hello')
    document.getElementById('contentData').textContent = message.conversationDiv;
  }
});


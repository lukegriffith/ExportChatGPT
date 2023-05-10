function extractChatData() {
    let mainElement = document.querySelector('main').cloneNode(true);
    mainElement.querySelectorAll('svg').forEach((el) => { el.remove() }) 
    mainElement.querySelectorAll('button').forEach((el) => { el.remove() }) 
    mainElement.querySelectorAll('textarea').forEach((el) => { el.remove() }) 
    mainElement.querySelectorAll('img').forEach((el) => { el.remove() }) 
  
    // Create a new div element
    let divElement = document.createElement("div");
  
    // Create two child elements to nest inside the div
    let headingElement = document.createElement("h1");
    headingElement.textContent = document.title;
  
    // Append the child elements to the div
    divElement.appendChild(headingElement);
    divElement.appendChild(mainElement);
  
    // var markdown = turndown.turndown(divElement);
    console.log('content')
    chrome.runtime.sendMessage({ type: 'conversation', conversationDiv: divElement });
}
  
extractChatData();
  

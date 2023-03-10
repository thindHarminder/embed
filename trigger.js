const brandingComment = document.createComment(`\n

||\\//||     //\\\\     ||\\\\     ||==\n
|| \\\\ ||    //  \\\\    || ||    ||=\n
||    ||   //    \\\\   ||//     ||==\n\n
||\n
||\\\\  \\\\//\n
||//   //\n\n
======  ||  ||   ||==     ======   ||  ||  ======   ||\\\\  ||  ||\\\\\n
  ||    ||==||   ||=        ||     ||==||    ||     || \\\\ ||  || ||\n
  ||    ||  ||   ||==       ||     ||  ||  ======   ||  \\\\||  ||//\n\n
Made by theThind || thethind.com\n`);

document.doctype.parentNode.insertBefore(brandingComment, document.doctype.nextSibling);



// Add an event listener to the button
function triggerPopup() {
  // Create a new iframe container element
  const iframeContainer = document.createElement("div");

  // Set the container's style
  iframeContainer.style.position = "fixed";
  iframeContainer.style.overflow = "hidden";
  iframeContainer.style.zIndex = "2147483650";
  iframeContainer.style.bottom = "12px";
  iframeContainer.style.right = "12px";
  iframeContainer.style.width = "25rem";
  iframeContainer.style.height = "38rem";
  iframeContainer.style.border = "1px solid #2E3137";
  iframeContainer.style.borderRadius = "8px";
  iframeContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  iframeContainer.style.backgroundColor = "transparent";
  iframeContainer.style.transition = 'bottom 0.5s ease-in-out';
  
  // Set the minimum width and height for iframeContainer
iframeContainer.style.minWidth = "365px";
iframeContainer.style.minHeight = "600px";

// Check if the screen width is below 600 pixels
  if (window.innerWidth < 600) {
    iframeContainer.style.width = "100%";
    iframeContainer.style.height = "100%";
    iframeContainer.style.bottom = "0px";
  iframeContainer.style.right = "0px";
  }
  
 
  
  
  

  // Create a new close button element
  const closeButton = document.createElement("button");
  

  // Set the button's style
  closeButton.style.position = "absolute";
  closeButton.style.top = "2rem";
  closeButton.style.right = "2rem";
  closeButton.style.cursor = "pointer";
  closeButton.style.backgroundColor = "transparent";
  closeButton.style.color = "#fcfcfc";
  
// Set the button's SVG icon
closeButton.innerHTML = '<svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M14 14L34 34" stroke="#fcfcfc" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 34L34 14" stroke="#fcfcfc" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  
  // Check if the screen width is below 600 pixels
  if (window.innerWidth < 600) {
    closeButton.style.top = "2rem";
  closeButton.style.right = "2rem";
  }



  

  // Add an event listener to the close button
  closeButton.addEventListener("click", () => {
    // Remove the iframe container from the page
    document.body.removeChild(iframeContainer);
  });

  // Create a new iframe element
  const iframe = document.createElement("iframe");

  // Set the iframe's style
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.style.transition = 'bottom 0.5s ease-in-out';
  

  // Set the iframe's source URL
  iframe.src = "https://myembed.webflow.io";

  // Add the iframe and close button to the container
  iframeContainer.appendChild(closeButton);
  iframeContainer.appendChild(iframe);

  // Add the container to the page
  document.body.appendChild(iframeContainer);
};


const triggerButton = document.querySelector("button");

// Add an event listener to all elements with the class "brand-trigger"
const brandTriggerButtons = document.querySelectorAll(".brand-trigger");
brandTriggerButtons.forEach(button => {
  button.addEventListener ("click", triggerPopup);
});

// Add the button to the page
document.body.appendChild(button);

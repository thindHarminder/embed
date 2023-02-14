// Create a new button element
const button = document.createElement("button");

// Set the button's style
button.style.position = "fixed";
button.style.bottom = "20px";
button.style.right = "20px";
button.style.padding = "10px 20px";
button.style.background = "#4CAF50";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "3px";
button.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
button.style.cursor = "pointer";

// Set the button's text
button.innerText = "Open iframe";

// Add an event listener to the button
button.addEventListener("click", () => {
  // Create a new iframe element
  const iframe = document.createElement("iframe");

  // Set the iframe's style
  iframe.style.position = "fixed";
  iframe.style.bottom = "0";
  iframe.style.right = "0";
  iframe.style.width = "30vw";
  iframe.style.height = "70vh";
  iframe.style.border = "none";
  iframe.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";

  // Set the iframe's source URL
  iframe.src = "https://thethind.com";

  // Add the iframe to the page
  document.body.appendChild(iframe);
});

// Add the button to the page
document.body.appendChild(button);

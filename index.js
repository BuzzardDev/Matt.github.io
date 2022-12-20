// Get the element with the class "text-color"
var textElement = document.querySelector(".text-color");

// Set the text of the element to an empty string
textElement.textContent = "";

// Set the initial delay to 500 milliseconds (half a second)
var delay = 500;

// Set the initial index to 0
var index = 0;

// Set the text to be displayed by the typewriter effect
var text = "Matts Chromebook Hut";

// Set the interval function to run every 50 milliseconds
var interval = setInterval(function () {
  // Add the next character to the text of the element
  textElement.textContent += text.charAt(index);

  // Increment the index
  index++;

  // If the index is greater than or equal to the length of the text, clear the interval
  if (index >= text.length) {
    clearInterval(interval);
  }
}, 50);

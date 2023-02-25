// Get the DOM elements for the image carousel
let wrapper = document.querySelector(".wrapper");
let carousel = document.querySelector(".carousel");
let images = document.querySelectorAll(".carousel img");
let buttons = document.querySelectorAll(".button");

let imageIndex = 1,
  intervalId;

// Define function to start automatic image slider
function autoSlider() {
  // Start the slideshow by calling slideImage() every 2 seconds
  intervalId = setInterval(() => slideImage(++imageIndex), 2000);
}

// A function that updates the carousel display to show the specified image
function slideImage() {
  // Calculate the updated image index
  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
  // Update the carousel display to show the specified image
  carousel.style.transform = `translate(${-imageIndex * 100}%)`;
}

let updateClick = (e) => {
  // Stop the automatic slideshow
  clearInterval(intervalId);
  // Update the image index based on the button clicked
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage();
};

// Add click event listener to the buttons
buttons.forEach(btn => btn.addEventListener("click", updateClick));

// Add mouseover event listener to wrapper element to stop the automatic slideshow
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));


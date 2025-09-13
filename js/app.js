// Get references to all data from html elements
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const closePopupButton = document.getElementById("close-popup");

// check if the form is submitted
searchForm.addEventListener("submit", function (event) {
  // Prevent default button behavior
  event.preventDefault();

  // Get the text from the input field and remove whitespace
  const query = searchInput.value.trim();

  // Check if submission is not empty
  if (query) {
    // Show the search text in the popup
    popupMessage.textContent = `You searched for: "${query}"`;

    // Make the popup visible
    popup.classList.add("visible");

    // Clear the input field after submission
    searchInput.value = "";
  } else {
    // Optional: handle empty submission, maybe show a small error
    searchInput.placeholder = "Please search somethings!";
  }
});

// Function to close the popup
function closePopup() {
  popup.classList.remove("visible");
}

// check if the close button is clicked
closePopupButton.addEventListener("click", closePopup);

// check if the user clicks outside the popup content to close it
popup.addEventListener("click", function (event) {
  // If user click on outside the popup content close the popup
  if (event.target === popup) {
    closePopup();
  }
});

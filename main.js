// Select all images
const images = document.querySelectorAll("img");

// Loop through all images
images.forEach((image) => {
  // Add click event listener
  image.addEventListener("click", () => {
    // Get the ID from the data attribute
    const id = image.getAttribute("data-id");

    // Redirect to the detail page with the ID in the query string
    window.location.href = `detail.html?id=${id}`;
  });
});

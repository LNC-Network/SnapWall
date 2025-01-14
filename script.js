let images;

fetch('./images.json')  // Path to your JSON file
  .then(response => response.json())  // Parse the JSON
  .then(data => {
    images=data;  // Use the loaded data
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });


const gallery = document.getElementById("gallery");

if (!gallery) {
  console.error("Gallery element not found!");
} else {
  function loadImages() {
    images.forEach(imageUrl => {
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      imgElement.alt = "Wallpaper Image";
      imgElement.classList.add("gallery-item");

      // Handle image loading errors
      gallery.appendChild(imgElement);
    });
  }

  loadImages();
}

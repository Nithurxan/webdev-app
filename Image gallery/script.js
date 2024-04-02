document.addEventListener("DOMContentLoaded", function () {
  // Declare an array of image filenames
  const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

  // Get reference to thumb-bar
  const thumbBar = document.querySelector('.thumb-bar');

  // Looping through the images
  imageFilenames.forEach(function (filename) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + filename);
    newImage.setAttribute('alt', filename);
    thumbBar.appendChild(newImage);

    // Adding a click event listener to each thumbnail image
    newImage.addEventListener('click', function () {
      displayImage(filename);
    });
  });

  // Get reference to button
  const btn = document.querySelector('button');
  const overlay = document.querySelector('.overlay');

  // Writing a handler that runs the darken/lighten button
  btn.addEventListener('click', function () {
    toggleDarken();
  });

  // Function to display image
  function displayImage(filename) {
    const displayedImg = document.querySelector('.displayed-img');
    displayedImg.setAttribute('src', 'images/' + filename);
    displayedImg.setAttribute('alt', filename);
  }

  // Function to toggle darken effect
  function toggleDarken() {
    if (btn.getAttribute('class') === 'dark') {
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
  }
});

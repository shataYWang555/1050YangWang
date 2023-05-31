const images = document.querySelectorAll('.menu-image');
const texts = document.querySelectorAll('.text-image');
const tags = document.querySelectorAll('.menu-tag');

images.forEach(function(image, index) {
  image.addEventListener('click', function() {
    const imageDisplay = window.getComputedStyle(image).display;
    if (imageDisplay === "none") {
      image.style.display = "block";
      texts[index].style.display = "none";
      tags[index].style.display = "block";
    } else {
      image.style.display = "none";
      texts[index].style.display = "block";
      tags[index].style.display = "none";
    }
  });
});

texts.forEach(function(text, index) {
  text.addEventListener('click', function() {
    const imageDisplay = window.getComputedStyle(images[index]).display;
    if (imageDisplay === "none") {
      images.forEach(function(image, i) {
        image.style.display = "block";
        texts[i].style.display = "none";
        tags[i].style.display = "block";
      });
    } else {
      images.forEach(function(image, i) {
        image.style.display = "none";
        texts[i].style.display = "block";
        tags[i].style.display = "none";
      });
    }
  });
});
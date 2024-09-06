let currentIndex = 0;
const images = [
  'images/1st.jpg',
  'images/2nd.jpg',
  'images/3rd.jpg',
  'images/4th.jpg',
];

const currentImage = document.getElementById('current-image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const thumbnails = document.querySelectorAll('.thumbnail');

function setImage(index) {
  currentIndex = index;
  currentImage.style.opacity = '0';  
  setTimeout(() => {
    currentImage.src = images[currentIndex];
    currentImage.style.opacity = '1';  
  }, 300);

  thumbnails.forEach((thumbnail, i) => {
    thumbnail.classList.remove('active');
    if (i === currentIndex) {
      thumbnail.classList.add('active');
    }
  });
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  setImage(currentIndex);
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  setImage(currentIndex);
}

prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

setImage(currentIndex);

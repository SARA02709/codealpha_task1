const gallery = document.getElementById('gallery');
const fullscreen = document.getElementById('fullscreen');
const fullscreenImg = document.getElementById('fullscreen-img');

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    fullscreenImg.src = img.src;
    fullscreen.style.display = 'flex';
    gallery.style.display = 'none';
  });
});

function hideFullscreen() {
  fullscreen.style.display = 'none';
  gallery.style.display = 'grid';
}

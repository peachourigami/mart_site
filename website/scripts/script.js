document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const curtain = document.querySelector('.curtain');
    const closeBtn = document.querySelector('.close-btn');
    const sideMenu = document.querySelector('.side-menu');

    hamburger.addEventListener('click', () => {
        curtain.classList.toggle('active');
        sideMenu.classList.toggle('show');
    });

    closeBtn.addEventListener('click', () => {
        curtain.classList.remove('active');
        sideMenu.classList.remove('show');
    });
});

document.getElementById('open-foto-gallery-btn').addEventListener('click', function() {
    const galleryId = this.getAttribute('data-gallery');
    const galleryOverlay = document.getElementById(galleryId + '-overlay');
    galleryOverlay.style.display = 'flex';
});

document.getElementById('open-video-gallery-btn').addEventListener('click', function() {
    const galleryId = this.getAttribute('data-gallery');
    const galleryOverlay = document.getElementById(galleryId + '-overlay');
    galleryOverlay.style.display = 'flex';
});

document.getElementById('open-ill-gallery-btn').addEventListener('click', function() {
    const galleryId = this.getAttribute('data-gallery');
    const galleryOverlay = document.getElementById(galleryId + '-overlay');
    galleryOverlay.style.display = 'flex';
});

document.getElementById('open-arte-gallery-btn').addEventListener('click', function() {
    const galleryId = this.getAttribute('data-gallery');
    const galleryOverlay = document.getElementById(galleryId + '-overlay');
    galleryOverlay.style.display = 'flex';
});

document.querySelectorAll('.close-btn').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        this.closest('.gallery-overlay').style.display = 'none';
    });
});

function showImage(src) {
    document.getElementById('main-image').src = src;
    let thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.classList.remove('active');
    });
    document.querySelector(`.thumbnail[src="${src}"]`).classList.add('active');
}

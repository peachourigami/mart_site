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

document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const gallery = this.closest('.gallery-overlay');
        const mainImage = gallery.querySelector('.main-image');
        mainImage.src = this.getAttribute('data-src');

        gallery.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.classList.remove('active');
        });
        this.classList.add('active');
    });
});

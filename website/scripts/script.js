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

function openViewer() {
    const viewer = document.getElementById('imageViewer');
    viewer.style.display = 'block';
}

function closeViewer() {
    const viewer = document.getElementById('imageViewer');
    viewer.style.display = 'none';
}

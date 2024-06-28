document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    const image = document.getElementById('spinningImage');

    if (image) {
        console.log("Image element found");
        // Spin once on page load
        image.classList.add('spin');
        setTimeout(() => {
            image.classList.remove('spin');
        }, 4000);

        image.addEventListener('click', () => {
            console.log("Image clicked");
            // Add the spin class to start the animation
            image.classList.add('spin');

            // Remove the spin class after 10 seconds to stop the animation
            setTimeout(() => {
                console.log("Stopping the spin");
                image.classList.remove('spin');
            }, 4000); // 10 seconds
        });
    } else {
        console.error("Image element not found");
    }
});
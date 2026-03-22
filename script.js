// script.js will hold interactivity logic
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio loaded and ready!");

    // Hamburger Menu Logic
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // We will soon add:
    // 1. Intersection Observer for elements fading in seamlessly on scroll
    // 2. Custom magnetic cursor effects for the buttons
    // 3. Parallax effect for the background orbs on mouse movement
});

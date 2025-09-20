const menuOpenButton = document.querySelector('#menu-open-button');

menuOpenButton.addEventListener('click', () => {
    // Show the mobile menu 
    document.body.classList.toggle("show-mobile-menu");
});

// Close the mobile menu when clicking the close button
const menuCloseButton = document.querySelector('#menu-close-button');
menuCloseButton.addEventListener('click', () => menuOpenButton.click());

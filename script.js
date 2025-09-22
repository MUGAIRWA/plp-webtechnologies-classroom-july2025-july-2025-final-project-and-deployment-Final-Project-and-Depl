const menuOpenButton = document.querySelector('#menu-open-button');

menuOpenButton.addEventListener('click', () => {
    // Show the mobile menu 
    document.body.classList.toggle("show-mobile-menu");
});

// Close the mobile menu when clicking the close button
const menuCloseButton = document.querySelector('#menu-close-button');
menuCloseButton.addEventListener('click', () => menuOpenButton.click());

// initialize swiper
const swiper = new Swiper('.slider-wrapper', {
    loop:true,
    grabCursor: true,
    spaceBetween: 25, 

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // responsive break poins
  breakpoints: {
    0: {
        slidePerView: 1
    },
    768:{
        slidePerView: 2
    },
    1024: {
        slidePerView: 3
    }
  }
});
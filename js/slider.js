var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 10000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1025: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

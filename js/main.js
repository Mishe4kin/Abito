//const swiper = new Swiper(".swiper-container", {!!!
// параметры слайдера
//loop: true, //Бесконечная прокрутка !!!

// если нам нужна навигация
// pagination: {
//   el: ".swiper-pagination",
// },

// стрелки
// navigation: {
//   nextEl: ".swiper-button-next",
//   prevEl: ".swiper-button-prev",
// },

// Лента прокрутки
//scrollbar: {
//  el: ".swiper-scrollbar",
// },
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,

  thumbs: {
    swiper: swiper,
  },
});

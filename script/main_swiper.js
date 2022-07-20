const slider = document.querySelector(".swiper");
const swiper = new Swiper(".swiper", {
    loop: true,
    slideClass: "swiper-slide",
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        615: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1210: {
            slidesPerView: 3,
        },
        1300: {
            slidesPerView: 4,
        }
    }

});
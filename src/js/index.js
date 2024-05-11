// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();

// Аккордеон для мобильной навигации
import accordion from "./modules/accordion.js";
accordion();

const swiper = new Swiper(".swiper", {
    // Optional parameters
    // loop: true,
    slidesPerView: 2,
    spaceBetween: 16,
    grabCursor: true,
    freeMode: true,
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // bulletActiveClass: "dot--active",
        // bulletClass: "dot",
    },

    breakpoints: {
        800: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
});

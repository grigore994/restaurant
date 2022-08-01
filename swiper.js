// noinspection JSUnusedLocalSymbols

import Swiper from './libraries/swiper/swiper-bundle.esm.browser.min.js';
try {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        spaceBetween: 20,
        slidesPerView: 'auto',
    });
} catch (e) {
    console.log(e)
}

try {
    const swiper2 = new Swiper('.swiper2', {
        // modules:[Pagination],
        // Optional parameters
        direction: 'horizontal',
        // loop: true,
        // spaceBetween:20,
        slidesPerView: 1,
        centeredSlides: true,
        // fill: 'row',

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

        autoplay: {
            delay: 3000,
        },
    });
} catch (e) {
    console.log(e)
}

try {
    const swiper3 = new Swiper('.swiper3', {
        // modules:[Pagination],
        // Optional parameters
        direction: 'horizontal',
        // loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        centeredSlides: true,
        // fill: 'row',

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

        // autoplay: {
        //     delay: 3000,
        // },
    });
} catch (e) {
    console.log(e)
}

try {
    const swiper4 = new Swiper('.swiper4', {
        direction: 'horizontal',
        // loop: true,
        spaceBetween: 20,
        slidesPerView: 'auto',
    });
} catch (e) {
    console.log(e)
}

try {
    const swiper5 = new Swiper('.swiper5', {
        direction: 'horizontal',
        spaceBetween: 20,
        slidesPerView: 1,
        centeredSlides: true,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });
} catch (e) {
    console.log(e)
}
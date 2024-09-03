import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const sliderCarousel = () => {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation],
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.benefits__arrow--right',
            prevEl: '.benefits__arrow--left',
        },
        breakpoints: {
            576: {
                slidesPerView: 1,
                spaceBetween: 10,
            },

            768: {
                slidesPerView: 3,
                spaceBetween: 65,
            },
        },
    });
}
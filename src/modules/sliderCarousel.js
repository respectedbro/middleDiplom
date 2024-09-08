import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

export const sliderCarousel = () => {
    const swiper = new Swiper('.swiper-benefits', {

        modules: [Navigation],
        loop: true,
        navigation: {
            nextEl: '.benefits__arrow--right',
            prevEl: '.benefits__arrow--left',
        },
        breakpoints: {
            576: {
                slidesPerView: 1,
                spaceBetween: 20,
            },

            577: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });
}
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const sliderOurServices = () => {
    const swiper = new Swiper('.swiper-services', {
        loop: true,
        modules: [Navigation],
        navigation: {
            nextEl: '.services__arrow--right',
            prevEl: '.services__arrow--left',
        },
        breakpoints: {
            576: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            577: {
                slidesPerView: 2,
                spaceBetween: 30,
            },

        },
    });

}
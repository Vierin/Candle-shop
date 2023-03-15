import {breakpoint} from "../app.js";

export class SliderCards {
    constructor(view) {
        this.view = view;

        breakpoint.desktop && this.setSlider();
    }

    setSlider() {
        this.slider = new Swiper(this.view, {
            slidesPerView: 4,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-cards-button-next',
                prevEl: '.swiper-cards-button-prev',
            },
            breakpoints: {
                // when window width is >= 320px
                1200: {
                    spaceBetween: 50,
                }
            }
        })
    }
}
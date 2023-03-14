export class Gallery {
    constructor(view) {
        this.view = view;

        this.sliderMain = this.view.querySelector('.swiper--gallery')
        this.sliderThumb = this.view.querySelector('.swiper-thumb')

        this.init();
        this.setThumbs();
    }

    init() {
        this.swiper = new Swiper(this.sliderMain, {
            breakpoints: {
                // when window width is >= 320px
                320: {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                1024: {
                    pagination: null,
                    navigation: null
                }
              }
        });
    }

    setThumbs() {
        [...this.sliderThumb.children].map((el, key) => {
            el.addEventListener('click', () => {
                [...this.sliderThumb.children].map(el => {
                    el.classList.remove('is-active');
                })
                this.swiper.slideTo(key);
                el.classList.add('is-active');
            })
        })
    }
}
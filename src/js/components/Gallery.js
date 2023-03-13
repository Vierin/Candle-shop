export class Gallery {
    constructor(view) {
        this.view = view;

        this.sliderMain = this.view.querySelector('.swiper--gallery')
        this.sliderThumb = this.view.querySelector('.swiper-thumb')

        this.init();
        this.setThumbs();
    }

    init() {
        this.swiper = new Swiper(this.sliderMain);
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
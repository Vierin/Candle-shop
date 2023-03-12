export class Slider {
    constructor(swiper) {
        this.swiper = swiper;

        this.setOptions();
        this.bind();
    }

    setOptions() {
        this.options = {};
        if(this.swiper.dataset.options) {
            const arr = this.swiper.dataset.options.split(', ');
          
            arr.forEach(el => {
                const items = el.split(':');
                this.options[items[0]] = items[1].trim();
            });
        }
    }

    
    bind() {
        console.log(this.options.thumbs);
        const swiper = new Swiper(this.swiper, {
            watchSlidesProgress: true,
            slidesPerView: this.options.slidesPerView ? +this.options.slidesPerView : 1,
            spaceBetween: this.options.spaceBetween ? +this.options.spaceBetween : 0,
        });
    }
    
}
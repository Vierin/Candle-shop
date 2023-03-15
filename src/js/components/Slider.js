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
        const slide = this.swiper.querySelectorAll('.swiper-slide');

        const swiper = new Swiper(this.swiper, {
            speed: 500,
            loop: true,
            watchSlidesProgress: true,
            slidesPerView: this.options.slidesPerView ? +this.options.slidesPerView : 1,
            spaceBetween: this.options.spaceBetween ? +this.options.spaceBetween : 0,
            autoplay: !this.options.autoplay ? null : { delay: 3000 },
            effect: "fade",
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            on: {
               
                beforeSlideChangeStart: e => {
                    // gsap.killTweensOf(slide[e.realIndex]);
                    
                    // [...slide].map(el => {
                    //     // gsap.to(el.querySelector('.swiper__desc'), {opacity: 0, duration: 0.2})

                    // })
                },
                beforeTransitionStart: e => {

                    gsap.killTweensOf(slide[e.realIndex].querySelector('.swiper__desc'));

                    gsap.fromTo(slide[e.realIndex].querySelector('.swiper__desc'), {y: 20, opacity: 0}, {y: 0, opacity: 1, duration: 0.6, delay: 0.4})
                }
            }
        });
    }
    
}
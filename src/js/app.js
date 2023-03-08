import { gsap } from "gsap";

export class Main {
    constructor() {
        this.load();
    }

    load() {
        // const loader = new Loader();

        // window.addEventListener('load', () => {


        //     document.body.classList.remove('is-loading');
        //     this.setComponents();
        //     new Animations();

        //     this.curtain()

        //     if(window.ontouchstart === undefined) {
        //         document.querySelector('html').classList.add('mod_no-touchevents');
        //     }
        // });

    }


    // curtain() {

    //     document.querySelectorAll('a[href]').forEach(link => {
    //         link.addEventListener('click', (e) => {
    //             e.preventDefault();

    //             const href = e.currentTarget.getAttribute('href');
    //             gsap.fromTo(document.querySelector('.js-main-curtain'), {yPercent: -100}, {yPercent: 0, duration: .4, onComplete: () => {
    //                 window.location = href;
    //             }})
    //         })
    //     });
    // }

    setComponents() {
        // getBrowser();
        // checkBreakpoint();

        //components
        // new SwiperSlider();
    }

}


const app = new Main();
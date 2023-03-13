import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.min.js";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother.min.js";

import { Menu } from "./components/Menu.js";
import { Slider } from "./components/Slider.js";
import { Gallery } from "./components/Gallery.js";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export class App {
    constructor() {
        this.load();

        if(document.querySelector('.swiper')) {
            const heroSlider = new Slider(document.querySelector('.swiper'))
        }
        if(document.querySelector('[data-component="Gallery"]')) {
            const gallery = new Gallery(document.querySelector('[data-component="Gallery"]'));
        }
        
        // smooth scroll
       
        let smoother = ScrollSmoother.create({
            smooth: 2,   // seconds it takes to "catch up" to native scroll position
            effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
          });

        const menu = new Menu(document.querySelector('[data-component="Menu"]'));

        // sort
        const sort = document.querySelector('.sort-btn')
        sort && sort.addEventListener('click', (e) => {
            e.target.parentElement.classList.toggle('is-sort-open');
        })

        // search
        document.querySelector('.js-search').addEventListener('click', () => {
            document.documentElement.classList.toggle('is-search');
        })

        document.querySelector('.search-panel__close').addEventListener('click', () => {
            document.documentElement.classList.remove('is-search');
        })

        if(window.ontouchstart === undefined) {
            document.querySelector('html').classList.add('mod_no-touchevents');
        }

        // cart
        document.querySelector('.cart-btn').addEventListener('click', (e) => {
            e.preventDefault();
            document.documentElement.classList.add('is-cart-open');
        })

        document.querySelector('.cart__close').addEventListener('click', () => {
            document.documentElement.classList.remove('is-cart-open');
        })

        // header sticky 
        const header = document.querySelector('.header');

        ScrollTrigger.create({
            trigger: header,
            start: 'top top',
            endTrigger: 'footer',
            end: 'bottom+=100vh bottom',
            pin: true,
            // pinType: "fixed",
            markers: false,
            pinReparent: true,
            pinSpacing: false,
            onToggle: e => {
                header.classList.toggle('is-white')
            }
        });

        // acc
        document.querySelectorAll('[aria-expanded]').forEach(el => {
            const wrap = el.nextElementSibling;
            const height = wrap.children[0].clientHeight;

            el.getAttribute('aria-expanded') == 'true' && gsap.set(wrap, {height: 0});
           
            el.addEventListener('click', () => {
                

                if(el.getAttribute('aria-expanded') == 'false') {
                    gsap.to(wrap, {height: 0, duration: 0.5});
                    el.ariaExpanded = true;
                } else {
                    gsap.to(wrap, {height, duration: 0.5});
                    el.ariaExpanded = false;
                }
            })
        })
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


const app = new App();
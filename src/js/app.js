import { Utils, getBreakpoint } from "./components/Utils.js";
import { Animations } from "./Animations.js";

import { componentsList } from "./components/ComponentList.js"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export let breakpoint;
export class App {
    constructor() {
        this.setLoader();
        this.init();

        document.addEventListener('DOMContentLoaded', () => {
            this.loaded = true;
        })
    }

    init() {
        breakpoint = getBreakpoint();

        breakpoint.desktop && this.initScroll();

        const utils = new Utils();
        const animations = new Animations();
        this.setComponents();
    }

    setLoader() {
        this.loader = document.querySelector('.loader');
        const logoWords = this.loader.querySelectorAll('.js-word');
        const duration = 0.25;

        this.animation = gsap.timeline({repeat: -1, repeatDelay: duration * 4})
            .fromTo(logoWords[0], 
                {clipPath: "inset(0 100% 0 0)"}, 
                {clipPath: "inset(0 0% 0 0)", duration, delay: duration / 2})
            .fromTo(logoWords[1], 
                {clipPath: "inset(0 0 100% 0)"}, 
                {clipPath: "inset(0 0 0% 0)", duration})
            .fromTo(logoWords[2], 
                {clipPath: "inset(0 0 0 100%)"}, 
                {clipPath: "inset(0 0 0 0%)", duration})
            .fromTo(logoWords[3], 
                {clipPath: "inset(100% 0 0 0)"}, 
                {clipPath: "inset(0% 0 0 0)", duration, onComplete: () => {
                    if(this.loaded) {
                        this.loaderHide();
                        this.animation.pause();
                    } else {
                        gsap.timeline().fromTo(logoWords[0], 
                            {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}, 
                            {clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", duration})
                            .fromTo(logoWords[1], 
                                {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}, 
                                {clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", duration})
                            .fromTo(logoWords[2], 
                                {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}, 
                                {clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)", duration})
                            .fromTo(logoWords[3], 
                                {clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}, 
                                {clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)", duration})
                    }    
            }})    
    }

    loaderHide() {
        gsap.timeline()
            .to(this.loader.querySelector('svg'), {opacity: 0, duration: 0.2}, "-=0.05")
            .to(this.loader, {xPercent: 100, duration: 1, ease: "power2.inOut"})
    }

    initScroll() {
        ScrollSmoother.create({
            smooth: 2,
            effects: true
        });
    }

    setComponents() {
        this.components = [...document.querySelectorAll('[data-component]')].map(el => {
            const componentName = el.dataset.component;
            if (typeof componentsList[componentName] !== 'undefined') {
                return new componentsList[componentName](el);
            }
            console.warn('There is no "%s" component available!', componentName);
            return undefined;
        }).filter(comp => typeof comp !== 'undefined');
    }
}


const app = new App();
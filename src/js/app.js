import { Utils, getBreakpoint } from "./components/Utils.js";
import { Animations } from "./Animations.js";

import { componentsList } from "./components/ComponentList.js"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export let breakpoint;
export class App {
    constructor() {
        this.load();
    }

    initScroll() {
        ScrollSmoother.create({
            smooth: 2,
            effects: true
        });
    }

    load() {
        breakpoint = getBreakpoint();

        breakpoint.desktop && this.initScroll();

        const utils = new Utils();
        const animations = new Animations();
        this.setComponents();
        
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
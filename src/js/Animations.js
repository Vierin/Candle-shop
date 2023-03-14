import { animations } from "./animations/All.js"

export class Animations {
    constructor() {

        this.init();
        this.setupAnimations();
    }

    init() {
        // sticky

        // header sticky
        const header = document.querySelector('.header');

        ScrollTrigger.create({
            trigger: header,
            start: 'top top',
            endTrigger: 'footer',
            end: 'bottom+=100vh bottom',
            pin: true,
            markers: false,
            pinReparent: true,
            pinSpacing: false,
            onToggle: () => {
                header.classList.toggle('is-white')
            }
        });
    }

    setSticky() {
    }

    setupAnimations() {
        const elements = [...document.querySelectorAll('[data-animation]')];
        const items = [];
        elements.map((el) => {
            items.push({
                el,
                type: el.dataset.animation,
                delay: el.dataset.delay || 0
            })
        });

        items.forEach((item) => {
            if (animations[item.type]) {
                ScrollTrigger.create({
                    trigger: item.el,
                    toggleActions: 'play pause resume reset',
                    animation: this.animate(item.type, item.el, item.delay)
                });
            } else {
                console.warn(`animation type "${item.type}" does not exist`, item.el);
            }
        });
    }

    animate(type, el, delay = 0) {
        if (!animations[type]) { console.warn(`animation type "${type}" does not exist`); return null; }
        return animations[type]?.(el, delay);
    }
}
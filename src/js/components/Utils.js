

export class Utils {
    constructor() {

        this.init();
        this.centerCards();

        // search
        document.querySelector('.js-search').addEventListener('click', () => {
            document.documentElement.classList.toggle('is-search');
        })

        document.querySelector('.search-panel__close').addEventListener('click', () => {
            document.documentElement.classList.remove('is-search');
        })


        // cart
        this.clickHandler('.cart-btn', 'is-cart-open', true);
        this.clickHandler('.cart__close', 'is-cart-open', false);


        
        this.setLang();
    }

    setLang() {
        document.querySelector('.langs-btn').addEventListener('click', () => {
            document.documentElement.classList.toggle('is-lang-change');
        });

        [...document.querySelectorAll('button[data-lang]')].map(el => {
            el.addEventListener('click', () => document.documentElement.classList.remove('is-lang-change'))
        })
    }

    centerCards() {
        // [...document.querySelectorAll('.cards--center')].map(el => {
        //     const cards = el.querySelectorAll('.card');
        //     const offset = +getComputedStyle(el.querySelector('.cards__wrap')).gap.replace('px', '');
        //     const width = (cards[0].clientWidth + offset) * cards.length;
        //     gsap.set(el.querySelector('.cards__wrap'), {width})
        // })
    }

    clickHandler(el, className, event) {
        document.querySelector(el).addEventListener('click', (e) => {
            e.preventDefault();
            const html = document.documentElement
            if(event) {
                html.classList.add(className);
            } else {
                html.classList.remove(className);
            }
        })
    }
    
    init() {

        // touch
        if(window.ontouchstart === undefined) {
            document.querySelector('html').classList.add('mod_no-touchevents');
        }

        // acc
        document.querySelectorAll('[aria-expanded]').forEach(el => {
            const wrap = el.nextElementSibling;
            const height = wrap.children[0].clientHeight;

            el.getAttribute('aria-expanded') == 'true' && gsap.set(wrap, {height: 0});
        
            el.addEventListener('click', () => {

                if(el.getAttribute('aria-expanded') == 'false') {
                    gsap.to(wrap, {height: 0, duration: 0.5,
                    onComplete: () => {
                        ScrollTrigger.refresh();
                    }});
                    el.ariaExpanded = true;
                } else {
                    gsap.to(wrap, {height, duration: 0.5,
                    onComplete: () => {
                        ScrollTrigger.refresh();
                    }});
                    el.ariaExpanded = false;
                }
            })
        })

        // sort
        const sort = document.querySelector('.sort-btn')
        sort && sort.addEventListener('click', (e) => {
            e.target.parentElement.classList.toggle('is-sort-open');
        })
    }
}

export function getBreakpoint() {
    const before = window.getComputedStyle(document.querySelector('body'), ':before');
    const breakpoint = before.getPropertyValue('content').replace(/[\"\']/g, '');

    return {
        desktop: breakpoint === 'desktop',
        phone: breakpoint === 'phone',
        tablet: breakpoint === 'tablet',
        value: breakpoint,
    };
}
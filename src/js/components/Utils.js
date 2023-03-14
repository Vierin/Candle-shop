

export class Utils {
    constructor() {

        this.init();

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
                    gsap.to(wrap, {height: 0, duration: 0.5});
                    el.ariaExpanded = true;
                } else {
                    gsap.to(wrap, {height, duration: 0.5});
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
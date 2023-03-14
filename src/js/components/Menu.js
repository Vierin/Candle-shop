export class Menu {
    constructor(view) {
        this.view = view;


        this.init();
    }

    init() {
        this.btnOpen = document.querySelector('.js-menu-btn');
        this.btnClose = this.view.querySelector('.js-menu-close');
        this.sub = this.view.querySelectorAll('.menu__sub');

        this.sub.forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault();
                const ul = e.target.nextElementSibling;
                const height = ul.querySelector('li').clientHeight * ul.children.length;
                
                e.currentTarget.classList.toggle('sub-shown');

                if(e.currentTarget.classList.contains('sub-shown')) {
                    gsap.to(ul, {height: height, duration: 0.6})
                } else {
                    gsap.to(ul, {height: 0, duration: 0.6})
                }
            })
        });

        

        this.btnOpen.addEventListener('click', () => {
            document.documentElement.classList.add('is-menu-open');
        })

        this.btnClose.addEventListener('click', () => {
            document.documentElement.classList.remove('is-menu-open');
        })
    }
}
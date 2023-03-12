export class Menu {
    constructor(view) {
        this.view = view;

        this.init();
    }

    init() {
        this.btnOpen = document.querySelector('.js-menu-btn');
        this.btnClose = this.view.querySelector('.js-menu-close');

        this.btnOpen.addEventListener('click', () => {
            document.documentElement.classList.add('is-menu-open');
        })

        this.btnClose.addEventListener('click', () => {
            document.documentElement.classList.remove('is-menu-open');
        })
    }
}
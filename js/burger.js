class Nav {
    constructor() {
        this._menu = document.querySelector('.burger-menu');
        this._menuEl = document.querySelectorAll('.nav__item');
        this._menuShow = document.querySelector('.mobile-menu');
        this._menuHide = document.querySelector('.burger-menu__right')

        

        this._menuShow.addEventListener('click', this.show.bind(this));
        this._menuHide.addEventListener('click', this.hide.bind(this));
        this._menuEl.forEach(el => {
            el.addEventListener('click', this.hide.bind(this));
        });
    }

    show() {
        this._menu.classList.add('menu__wrapper--open');
    }

    hide() {
        this._menu.classList.remove('menu__wrapper--open');
    }
}
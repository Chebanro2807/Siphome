class SliderSer {
    constructor() {
        this._stop = false;
        this.position = 0;
        this.slidesToShow = 1;
        this.slidesToScroll = 1;

        this.body = document.querySelector('.body');
        this.container = document.querySelector('.services__list-wrap');
        this.track = document.querySelector('.services__list');
        this.items = document.querySelectorAll('.services__item');
        this.dots = document.querySelectorAll('.services-li__item');

        this.dots.forEach(dot => {
            dot.addEventListener('click', this.userClick.bind(this, this.dotsToSlider.bind(this, dot)))
        });
        this.checkContainerWidth();
        this.sliderMath();
        this.showNextAfter(2000);
    }

    sliderMath() {
        this.itemsCount = this.items.length;
        if (this.body.clientWidth < 425) {
            this.itemWidth = 320;
        } else {
            this.itemWidth = 380;
        }
        if (this.body.clientWidth > 1420) {
            this.itemWidth = 360;
        }
        this.movePosition = this.slidesToScroll * this.itemWidth + 10;
        this.items.forEach((item) => {
            item.style.minWidth = `${this.itemWidth}px`;
        });
    }

    nextSlide() {
        this.position -= this.movePosition;
        this.setPosition();
    }
    
    userClick(func){
        this._stop = true;
        func();
    }

    delay(ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }

    showNextAfter(ms) {
        return this.delay(ms)
            .then(() => (!this._stop) ? this.nextSlide() : false)
            .then(() => (!this._stop) ? this.showNextAfter(ms) : false)
    }

    setPosition() {
        if (this.position < -(this.itemWidth * this.itemsCount - this.container.clientWidth +10*8)) {
            this.position = 0;
        }
        this.track.style.transform = `translateX(${this.position}px)`;
        this.chooseDot();
    }

    chooseDot() {
        this.deleteDot();
        let index = +Math.floor(Math.abs(this.position / (this.itemWidth +10)));
        if (isNaN(index)){
            index = 0;
        }
        this.dots[index].classList.add('services-li__item--active');
    }

    deleteDot() {
        this.dots.forEach(dot => {
            dot.classList.remove('services-li__item--active');
        });
    }

    dotsToSlider(dot) {
        let index = dot.getAttribute('data-index');
        this.position = -(index * this.itemWidth + index*10);
        this.setPosition();
    }

    stopSlider() {
        this.items.forEach((item) => {
            item.style.minWidth = `360px`;
        });
        this.track.style.transform = `translateX(0px)`;
        this.movePosition = 0;
    }

    checkContainerWidth() {
        if (this.body.clientWidth < 1420) {
            if (this._stop) {
                this.showNextAfter(2000);
                this._stop = false;
            }
            this.slidesToShow = 1;
            this.sliderMath();
            this.position = 0;
        } else {
            this.stopSlider();
            this._stop = true;
        }
    }
}
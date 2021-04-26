class SliderSer {
    constructor() {
        this._stop = false;
        this.position = 0;
        this.slidesToShow = 1;
        this.slidesToScroll = 1;

        this.container = document.querySelector('.services__list-wrap');
        this.track = document.querySelector('.services__list');
        this.items = document.querySelectorAll('.services__item');
        this.dots = document.querySelectorAll('.services-li__item');

        this.dots.forEach(dot => {
            dot.addEventListener('click', this.userClick.bind(this, this.dotsToSlider.bind(this, dot)))
        });
        this.checkContainerWidth();
        this.showNextAfter(2000);
    }

    sliderMath() {
        this.itemsCount = this.items.length;
        this.itemWidth = this.container.clientWidth / this.slidesToShow;
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

    showNextAfter(ms) {
        return delay(ms)
            .then(() => (!this._stop) ? this.nextSlide() : false)
            .then(() =>  (!this._stop) ? this.showNextAfter(ms) : false);
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
        let index = Math.abs(this.position / (this.itemWidth +10));
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

    checkContainerWidth() {
        if (this.container.clientWidth < 1000){
            this.slidesToShow = 1;
            this.sliderMath();
        }
    }

}

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

//!
new SliderSer();
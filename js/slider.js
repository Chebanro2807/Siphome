class Slider {
    constructor() {
        this.position = 0;
        this.slidesToShow = 2;
        this.slidesToScroll = 1;

        this.container = document.querySelector('.slider');
        this.track = document.querySelector('.slider__list');
        this.items = document.querySelectorAll('.item-js');
        this.dots = document.querySelectorAll('.slider__indicators')

        this.btnPrev = document.querySelector('.slider__left');
        this.btnNext = document.querySelector('.slider__right');

        this.itemsCount = this.items.length;
        this.itemWidth = this.container.clientWidth / this.slidesToShow;
        this.movePosition = this.slidesToScroll * this.itemWidth;

        this.items.forEach((item) => {
            item.style.minWidth = `${this.itemWidth}px`;
        });

        this.btnNext.addEventListener('click', this.nextSlide.bind(this));
        this.btnPrev.addEventListener('click', this.prevSlide.bind(this));
    }

    nextSlide() {
        this.position -= this.movePosition;
        this.setPosition();
    }

    prevSlide() {
        this.position += this.movePosition;
        this.setPosition();
    }

    setPosition() {
        if (this.position > 0){
            this.position = -(this.itemWidth * this.itemsCount - this.container.clientWidth);
        } 
        if (this.position < -(this.itemWidth * this.itemsCount - this.container.clientWidth)) {
            this.position = 0;
        }
        this.track.style.transform = `translateX(${this.position}px)`;
        this.chooseDot();
    }

    chooseDot() {
        if (this.position === 0) {
            this.deleteDot(this.dots[1]);
            this.deleteDot(this.dots[2]);
            this.deleteDot(this.dots[3]);
            this.dots[0].classList.add('slider__indicators--active');
        }
        if (this.position === -this.itemWidth) {
            this.deleteDot(this.dots[0]);
            this.deleteDot(this.dots[2]);
            this.deleteDot(this.dots[3]);
            this.dots[1].classList.add('slider__indicators--active');
        }
        if (this.position === -this.itemWidth*2) {
            this.deleteDot(this.dots[0]);
            this.deleteDot(this.dots[1]);
            this.deleteDot(this.dots[3]);
            this.dots[2].classList.add('slider__indicators--active');
        }
        if (this.position === -this.itemWidth*3) {
            this.deleteDot(this.dots[0]);
            this.deleteDot(this.dots[1]);
            this.deleteDot(this.dots[2]);
            this.dots[3].classList.add('slider__indicators--active');
        }
    }

    deleteDot(dot) {
        dot.classList.remove('slider__indicators--active');
    }
}


//!
new Slider();
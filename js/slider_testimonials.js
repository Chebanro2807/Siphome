class Slider {
    constructor() {
        this.position = 0;
        this.slidesToShow = 2;
        this.slidesToScroll = 1;
        this._stop = false;
        this._start = false;

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

        this.btnNext.addEventListener('click', this.userClick.bind(this, this.nextSlide.bind(this)));
        this.btnPrev.addEventListener('click', this.userClick.bind(this, this.prevSlide.bind(this)));

        this.dots.forEach(dot => {
            dot.addEventListener('click', this.userClick.bind(this, this.dotsToSlider.bind(this, dot)))
        });
        this.checkContainerWidth();
        this.showNextAfter(2000);
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
            this.deleteDot();
            this.dots[0].classList.add('slider__indicators--active');
        }
        if (this.position === -this.itemWidth) {
            this.deleteDot();
            this.dots[1].classList.add('slider__indicators--active');
        }
        if (this.position === -this.itemWidth*2) {
            this.deleteDot();
            this.dots[2].classList.add('slider__indicators--active');
        }
        if (this.position === -this.itemWidth*3) {
            this.deleteDot();
            this.dots[3].classList.add('slider__indicators--active');
        }
        if (this.position === -this.itemWidth*4) {
            this.deleteDot();
            this.dots[4].classList.add('slider__indicators--active');
        }
    }

    deleteDot() {
        this.dots.forEach(dot => {
            dot.classList.remove('slider__indicators--active');
        });
    }

    dotsToSlider(dot) {
        let index = dot.getAttribute('data-index');
        this.position = -(index * this.itemWidth);
        this.setPosition();
    }

    checkContainerWidth() {
        if (this.container.clientWidth < 1158){
        
            this.slidesToShow = 1;
        } else {
            this.slidesToShow = 2;
        }
        this.itemWidth = this.container.clientWidth / this.slidesToShow;
        this.items.forEach((item) => {
            item.style.minWidth = `${this.itemWidth}px`;
        });
        this.movePosition = this.slidesToScroll * this.itemWidth;    

    }
}

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}




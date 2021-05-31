class LL {
    constructor() {
        this.images = document.querySelectorAll('img[data]');


        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        }

        const observer = new IntersectionObserver(this.handleImg, options);
        this.images.forEach(img => {
            observer.observe(img);
        })
    }

    handleImg (myImg, observer) {
        myImg.forEach(myImgSingle => {
            if(myImgSingle.intersectionRatio > 0){
                myImgSingle.target.src = myImgSingle.target.getAttribute('data');
                observer.unobserve(myImgSingle.target)
            }
        });
    }
}
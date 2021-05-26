class Modal {
    constructor() {
        this.openModal = document.querySelectorAll('.js-open-modal');
        this.overlay = document.querySelector('.js-modal-overlay');
        this.crossArray = document.querySelectorAll('.js-modal-close');

        this.crossArray.forEach((cross) => {
            cross.addEventListener('click', this.cleaner.bind(this)
            );
        });
        
        this.overlay.addEventListener('click', this.cleaner.bind(this));

        this.switchReg1 = document.querySelector('.modal-s__link');
        this.switchReg2 = document.querySelector('.modal-g__link');
        this.switchReg1.addEventListener('click', this.cleaner.bind(this));
        this.switchReg2.addEventListener('click', this.cleaner.bind(this));

        this.showModal();
    }

    cleaner() {
        this.allShowArr = document.querySelectorAll('.is-show');
        this.allShowArr.forEach(function(e){
            e.classList.remove('is-show');
        })
    }

    showModal () {
        this.openModal.forEach((item) => {
            item.addEventListener('click', function(event) {
                event.preventDefault();
                this.overlay = document.querySelector('.js-modal-overlay');
                this.overlay.classList.add('is-show');
                this.modalName = item.getAttribute('data-modal');
                this.modal = document.querySelector('.js-modal[data-modal="' + this.modalName + '"]');
                this.modal.classList.add('is-show');
            });
        });
    }
}

new Modal();



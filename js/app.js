let slider = new SliderSer(); 
let slider1 = new Slider();
let burger = new Nav();
let lazyloading = new LL();
let modals = new Modal();
const submit = new FormSubmit(document.querySelector("#sendForm"));

window.addEventListener(`resize`, event => { 
    slider1.checkContainerWidth();
    slider.checkContainerWidth();
}, false);
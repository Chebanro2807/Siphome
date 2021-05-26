
//!
let slider = new SliderSer(); 
let slider1 = new Slider();

window.addEventListener(`resize`, event => { 
    slider1.checkContainerWidth();
    slider.checkContainerWidth();
}, false);
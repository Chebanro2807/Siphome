
//!
let slider = new SliderSer(); // APP.js? - вынеси наконец в отдельную, заколебал
// где локка, которая проверяет 1 и 2? Нашел, чт ов нем не работает?
let slider1 = new Slider();

window.addEventListener(`resize`, event => { // словами озвуч, что дожно происщзой со слайдером
    slider1._start = true;
    slider1.checkContainerWidth();
    slider._start = true;
    slider.checkContainerWidth()
}, false);
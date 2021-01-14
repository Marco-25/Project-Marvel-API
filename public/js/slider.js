$(document).ready(function () {

    let slider = $('.slider > img');
    let index = 0;
    let maxIndex = slider.length;
    let delay = 5000;

    initSlider();

    function initSlider() {
        slider.eq(0).fadeIn();
        setInterval(function (){
            skipSlider();
        }, delay);
    }

    function skipSlider() {
        slider.eq(index).stop().fadeOut(3000);
        index+=1;
        if(index === maxIndex)
        index = 0;
        slider.eq(index).stop().fadeIn(3000);
    }

    
});
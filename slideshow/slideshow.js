const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider-section');
let sliderSectionLast = sliderSection[sliderSection.length -1];
const arrowLeft = document.querySelector('#arrowLeft');
const arrowRight = document.querySelector('#arrowRight');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function moveRight(){
    let sliderSectionFirst = document.querySelectorAll('.slider-section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.7s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    }, 1000
);
}


function moveLeft(){
let sliderSection = document.querySelectorAll('.slider-section');
let sliderSectionLast = sliderSection[sliderSection.length -1];
slider.style.marginLeft = '0';
slider.style.transition = 'all 1s';
setTimeout(function(){
    slider.style.transition = 'none';
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = '-100%';
}, 1000
);
}

arrowRight.addEventListener("click", function(){
moveRight();
})
arrowLeft.addEventListener("click", function(){
moveLeft();
});

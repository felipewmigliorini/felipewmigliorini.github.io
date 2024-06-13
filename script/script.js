document.getElementById('btn').addEventListener('click', turnColor);

function turnColor(){
    document.querySelector('body').classList.toggle('escuro');
}

const value = document.querySelector('#value');
function onIncrement(){
    value.innerHTML = `${parseInt(value.innerText) + 1}`;
}
function onDecrement(){
    value.innerHTML = `${parseInt(value.innerText) - 1}`;
}

var slide = document.querySelector('.slideshow');
var images = 
    [
        './img/orangutango.webp',
        './img/orangutango2.jpeg'
    ];
var time = 2000;
var count = 0;

function moveSlideShow(){
    slide.src = images[count];
    if(count < images.length - 1){
        count++;
    } else {
        count = 0;
    }
    
    setTimeout('moveSlideShow()', time);
}

window.onload = moveSlideShow;

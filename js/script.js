// Hamburger menu & navigation animation
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const items = document.querySelectorAll('.navigation .menu-item');
const itemsArray = Array.apply(null, items);

// Closing navigation
itemsArray.forEach(element => {
    element.addEventListener('click', () => {
        hamburger.classList.remove('hamburger--active');
        navigation.classList.remove('navigation--active');
    });
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    navigation.classList.toggle('navigation--active');
});

// Gallery Slider

const slider = document.querySelector('.slider img');
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const photosCounter = 8; // How many photos are in directory "./images/slider"
let slideCounter = 1;
const path = 'images/slider/zdj';

previousBtn.addEventListener('click', () => {
    if (slideCounter - 1 == 0) {
        slideCounter = photosCounter;
    } else slideCounter--;

    slider.setAttribute('src', `${path + slideCounter}.jpg`);
});

nextBtn.addEventListener('click', () => {
    if (slideCounter + 1 > photosCounter) {
        slideCounter = 1;
    } else slideCounter++;

    slider.setAttribute('src', `${path + slideCounter}.jpg`);
});

// map resize
const map = document.querySelector('.map');

window.addEventListener('resize', () =>{
    map.setAttribute('width', window.innerWidth - 100);
    console.log('test');
});
map.setAttribute('width', window.innerWidth);
map.setAttribute('height', 200);
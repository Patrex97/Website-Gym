// Hamburger menu & navigation animation
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    navigation.classList.toggle('navigation--active');
});

// Gallery Slider

const slider = document.querySelector('.slider');
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const photosCounter = 8; // How many photos are in directory "./images/slider"
let slideCounter = 1;
const path = 'images/slider/zdj';

previousBtn.addEventListener('click', () =>{
    if(slideCounter - 1 == 0 ){
        slideCounter = photosCounter;
    }else slideCounter--;

   slider.setAttribute('src', `${path + slideCounter}.jpg`);
});

nextBtn.addEventListener('click', () =>{
    if(slideCounter + 1 > photosCounter ){
        slideCounter = 1;
    }else slideCounter++;
    
   slider.setAttribute('src', `${path + slideCounter}.jpg`);
});
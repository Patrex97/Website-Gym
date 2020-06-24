const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    navigation.classList.toggle('navigation--active');
});
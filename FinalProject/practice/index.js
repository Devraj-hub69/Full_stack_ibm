// let api="www.themealdb.com/api/json/v1/1/search.php?f=a"
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
let slideNumber = 1;
const images = document.querySelectorAll('img');  // Correct tag selector
const length = images.length;

const nextSlide = () => {
    slider.style.transform =` translateX(-${slideNumber * 100}%)`;
    slideNumber++;
};

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 100}%)`;
    slideNumber--;
};

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 100}%)`;
    slideNumber = length;
};

right.addEventListener('click', () => {
    if (slideNumber < length) {
        nextSlide();
    } else {
        getFirstSlide();
    }
});

left.addEventListener('click', () => {
    if (slideNumber > 1) {  // Correct condition
        prevSlide();
    } else {
        getLastSlide();
    }
});
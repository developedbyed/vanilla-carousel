const carouselSlide = document.querySelector('.carousel-slide');
let carouselImages = document.querySelectorAll('.carousel-slide img');
const firstImg = document.querySelector('.carousel-slide img:first-child');
const lastImg = document.querySelector('.carousel-slide img:last-child');
//Buttons
const previousBtn = document.querySelector('#previousBtn');
const nextBtn = document.querySelector('#nextBtn');
//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;


const firstClone = firstImg.cloneNode(true);
firstClone.id = "firstClone";
carouselSlide.appendChild(firstClone);
const lastClone = lastImg.cloneNode(true);
lastClone.id = "lastClone";
carouselSlide.insertBefore(lastClone,firstImg);
carouselImages = document.querySelectorAll('.carousel-slide img');


carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

nextBtn.addEventListener('click',()=>{
    carouselSlide.style.transition = 'transform 0.2s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});

previousBtn.addEventListener('click',()=>{
    carouselSlide.style.transition = 'transform 0.2s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
});


carouselSlide.addEventListener('transitionend',()=>{

    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length -6;
        carouselSlide.style.transform = 'translateX(' + (-size*counter) + 'px)';

    }
});

const checkbox = document.querySelector('#overflow-box');
checkbox.addEventListener('click',()=>{
    if(checkbox.checked){
        document.querySelector('.carousel-container').style.overflow = "visible";
    }else{
        document.querySelector('.carousel-container').style.overflow = "hidden";
    }
});
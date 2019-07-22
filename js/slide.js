

const sliderImg = document.querySelectorAll('.slider-container .slider-img');

const nextImgDelay = 2000;
let currentImgCount = 0;

sliderImg[currentImgCount].style.opacity = 1;

setInterval(nextImg, nextImgDelay);

function nextImg() {
    sliderImg[currentImgCount].style.zIndex = -2;
    const counter = currentImgCount;
    
    
    setTimeout(() => {
        sliderImg[counter].style.opacity = 0;
    },1000);
    
    
    currentImgCount = (currentImgCount + 1) % sliderImg.length;
    
    
    sliderImg[currentImgCount].style.opacity = 1;
    sliderImg[currentImgCount].style.zIndex = -1;

};

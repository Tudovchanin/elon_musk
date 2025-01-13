const $allSlideItem = document.querySelectorAll('.slider__item');
const $btnPrev = document.querySelector('.slider-buttons__btn--prev');
const $btnNext = document.querySelector('.slider-buttons__btn--next');
const $allSlideBg = document.querySelectorAll('.slider__bg');
const $burgerBtn = document.getElementById('burgerBtn');
const arrImg = ['./images/1.jpg', './images/2.jpeg', './images/3.jpg', './images/4.jpg', './images/5.webp'];
let activeSlide = 0;


// slider 29
if ($btnNext && $btnPrev) {

  $btnNext.addEventListener('click', () => {

    $allSlideItem[activeSlide].classList.remove('active-slide');

    activeSlide = (activeSlide + 1) % $allSlideItem.length;

    $allSlideItem[activeSlide].classList.add('active-slide');


    updateBackgroundImage(arrImg[activeSlide]);

  });

  $btnPrev.addEventListener('click', () => {

    $allSlideItem[activeSlide].classList.remove('active-slide');

    activeSlide = !activeSlide ? $allSlideItem.length - 1 : activeSlide - 1;

    $allSlideItem[activeSlide].classList.add('active-slide');


    updateBackgroundImage(arrImg[activeSlide]);


  });
}

function updateBackgroundImage(imageUrl) {

  document.documentElement.style.setProperty('--bg-image', `url(${imageUrl})`);
}


// header style
function initHeaderStyle() {
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('header-move');
    } else {
      header.classList.remove('header-move');
    }
  });
}

initHeaderStyle();


// init burger
if ($burgerBtn) {
 
  let burgerOpen = false;
  initBurgerMenu($burgerBtn);

  function initBurgerMenu(burgerBtn) {
    burgerBtn.addEventListener('click', handleClickBurger);
    document.addEventListener('click', (e) => {

      if (!e.target.closest('.mobile-nav') && !e.target.closest('.burger-btn') && burgerOpen) {
        console.log(e.target);
        burgerBtn.classList.remove('animation-stop');
        burgerOpen = false;
      };
    });
  }


  function handleClickBurger() {
  
    burgerOpen = !burgerOpen;
    if (burgerOpen) {
      burgerBtn.classList.add('animation-stop');
    } else {
      burgerBtn.classList.remove('animation-stop');
    }
  }
}


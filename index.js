/* Get the button to top: */
const mybutton = document.getElementById('btnToTop');

/* When the user scrolls down 20px from the top of the document, show the button */
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = 'block';
    } else {
        mybutton.style.display = 'none';
    }
}

/* When the user clicks on the button, scroll to the top of the document */
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* slide index default */
var slideIndex = 1;
showSlides(slideIndex);

/* Function +1, show next slide */
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Function -1, show preview slide */
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* next slider */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/*  a Slider Function */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('item');
    let dots = document.getElementsByClassName('slider-dots_item');
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i]
            .className
            .replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

/*  validation form */
const nameFirst = document.getElementById('nameFirst');
const emailFirst = document.getElementById('emailFirst');
const phone = document.getElementById('phone');
const nameSecond = document.getElementById('nameSecond');
const emailSecond = document.getElementById('emailSecond');
const nameFirstError = document.getElementById('nameFirstError');
const nameSecondError = document.getElementById('nameSecondError');
const emailFirstError = document.getElementById('emailFirstError');
const emailSecondError = document.getElementById('emailSecondError');
const phoneError = document.getElementById('phoneError');
const valid = true;
const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regForPhone = /[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}/;
const submitFirst = document.getElementById('submitFirst');
const submitSecond = document.getElementById('submitSecond');

submitFirst.addEventListener('click', validate1);

function validate1(e) {
    e.preventDefault();

    if (!nameFirst.value) {
        nameFirstError.classList.add('visible');
        nameFirstError.classList.add('error');
        nameFirstError.setAttribute('aria-hidden', false);
        nameFirstError.setAttribute('aria-invalid', true);
    } 
    if (reg.test(emailFirst.value) === false) {
      emailFirstError.classList.add('visible');
      emailFirstError.classList.add('error');
      emailFirstError.setAttribute('aria-hidden', false);
      emailFirstError.setAttribute('aria-invalid', true);
    }
    if (regForPhone.test(phone.value) === false){
      phoneError.classList.add('visible');
      phoneError.classList.add('error');
      phoneError.setAttribute('aria-hidden', false);
      phoneError.setAttribute('aria-invalid', true);
    } else{
      nameFirstError.classList.remove('visible');
      emailFirstError.classList.remove('visible');
      phoneError.classList.remove('visible');
      return valid;
    }
}

submitSecond.addEventListener('click', validate2);

function validate2(e) {
  e.preventDefault();

  if (!nameSecond.value) {
      nameSecondError.classList.add('visible');
      nameSecondError.classList.add('error');
      nameSecondError.setAttribute('aria-hidden', false);
      nameSecondError.setAttribute('aria-invalid', true);
  } 

  if (reg.test(emailSecond.value) == false) {
    emailSecondError.classList.add('visible');
    emailSecondError.classList.add('error');
    emailSecondError.setAttribute('aria-hidden', false);
    emailSecondError.setAttribute('aria-invalid', true);
  } else {
    nameSecondError.classList.remove('visible');
    emailSecondError.classList.remove('visible');
    return valid;
  }
}

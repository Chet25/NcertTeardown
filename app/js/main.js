const hamburgerbtn = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".header__menu")
const body = document.querySelector("body")
const fadeElems = document.querySelectorAll('.has-fade');


hamburgerbtn.addEventListener('click', hit)

function hit() {
    document.querySelector('.hamburger').classList.toggle('open')

    if (hamburgerbtn.classList.contains('open')) {
        mobileMenu.classList.add('open');
        body.classList.add('noscroll');
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
       
    }
    else {
        mobileMenu.classList.remove('open');
        body.classList.remove('noscroll');
   
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }

}
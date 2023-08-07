const hamburgerbtn = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".header__menu")
const body = document.querySelector("body")


hamburgerbtn.addEventListener('click', hit)

function hit() {
    document.querySelector('.hamburger').classList.toggle('open')

    if (hamburgerbtn.classList.contains('open')) {
        mobileMenu.classList.add('open');
        body.classList.add('noscroll');
    }
    else {
        mobileMenu.classList.remove('open');
        body.classList.remove('noscroll');
    }
}
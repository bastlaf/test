let buttonHamburger = document.querySelector('#btn');
let menu = document.querySelector('#menu');
let span1 = document.querySelector('#span1');
let span2 = document.querySelector('#span2');
let span3 = document.querySelector('#span3');

buttonHamburger.addEventListener('click', () => {
    if (menu.style.opacity == "0") {
        menu.style.opacity = "1";
        span1.classList.add('span1');
        span2.classList.add('span2');
        span3.classList.add('span3');
    } else {
        menu.style.opacity = "0";
        span1.classList.remove('span1');
        span2.classList.remove('span2');
        span3.classList.remove('span3');
    }
});
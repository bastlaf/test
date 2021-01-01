"use strict";

var buttonHamburger = document.querySelector('#btn');
var menu = document.querySelector('#menu');
var span1 = document.querySelector('#span1');
var span2 = document.querySelector('#span2');
var span3 = document.querySelector('#span3');
buttonHamburger.addEventListener('click', function () {
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
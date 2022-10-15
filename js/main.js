const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn-hamburger');  
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');


let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        nav.classList.add('open_menu');
        menuBtn.classList.add('menuBtn_change');
        showMenu = true;
    } else {
        nav.classList.remove('open_menu');
        menuBtn.classList.remove('menuBtn_change');
        showMenu = false;
    }
}
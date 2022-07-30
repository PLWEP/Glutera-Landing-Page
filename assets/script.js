
// Smooth Sticky navbar
window.onscroll = function() {stickyNav()};

var navbar = document.querySelector("nav");

var sticky = navbar.offsetTop;

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky-nav")
    } else {
        navbar.classList.remove("sticky-nav");
    }
}

// Responsive navigation
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navLink.classList.toggle('hide');
});
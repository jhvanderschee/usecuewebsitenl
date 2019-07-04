/* DETECT WINDOW SCROLL */

function windowScroll() {
    var top = window.pageYOffset || document.documentElement.scrollTop;
    if (top > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
    if (window.innerHeight + top >= document.documentElement.scrollHeight) {
        document.body.classList.add('scrolledend');
    } else {
        document.body.classList.remove('scrolledend');
    }
}

window.addEventListener("scroll",windowScroll);

windowScroll();
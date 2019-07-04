/* SMOOTH SCROLL */

function scrollPageTo(event) {
    var href=event.target.getAttribute('href');
    if(href.indexOf("#")> -1) {
        event.preventDefault(); 
        var id = event.target.getAttribute('href').replace('#','').replace('/','');
        if(id) element = document.getElementById(id);
        else element = '';
        if(element) {
            doScroll(element);
            history.pushState(null, null, '#'+element.getAttribute('id'));
        }
    }
}
function doScroll(element) {
    window.scroll({
        behavior: 'smooth',
        left: 0,
        top: element.offsetTop - 60
    });
}

function documentReady() {

    if(window.location.hash) {
    	var id = window.location.hash.substring(1);
    	if(id) element = document.getElementById(id);
        else element = '';
        if(element) {
            window.scroll({
                behavior: 'auto',
                left: 0,
                top: element.offsetTop - 60
            });
		}
    }

    var elements = document.querySelectorAll('a');
    elements.forEach(element => {
        element.addEventListener("click", function(event) {
            scrollPageTo(event);
        });
    });

    setTimeout(function(){ 
        var elements = document.querySelectorAll('.fullscreen');
        elements.forEach(element => {
            element.style.minHeight = element.offsetHeight + 'px';
        });
    }, 150);
}

document.addEventListener("DOMContentLoaded", documentReady);
---
layout:
---

{% include js/detectscroll.js %}
{% include js/newwindowfix.js %}
{% include js/lightbox.js %}

function toggleLightmode() {
    if(document.getElementById('top').classList.contains('lightmode')){
        document.getElementById('top').classList.remove('lightmode');
        document.getElementById('top').classList.add('darkmode');
        localStorage.setItem('mode', 'dark'); 
    } else if (document.getElementById('top').classList.contains('darkmode')) {
        document.getElementById('top').classList.remove('darkmode');
        localStorage.setItem('mode', 'blue'); 
    } else {
        document.getElementById('top').classList.add('lightmode');
        localStorage.setItem('mode', 'light'); 
    }
    document.getElementById('lightmode').blur();
}
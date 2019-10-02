---
layout:
---

{% include js/detectscroll.js %}
{% include js/newwindowfix.js %}
{% include js/smoothscroll.js %}
{% include js/lightbox.js %}

function toggleDarkmode() {
    document.getElementById('top').classList.toggle('darkmode'); 
    document.getElementById('darkmode').classList.toggle('selected'); 
    if (localStorage.getItem('mode') != 'dark') localStorage.setItem('mode', 'dark'); 
    else localStorage.setItem('mode', 'normal');
    document.getElementById('darkmode').blur();
}
---
title: 'No Java&shy;script Please!'
---


You probably load 100k jQuery in your page, because it makes programming soooo easy. But what if you want your page to be as small as 100k? Or usable by people who disable Javascript for security reasons?

Let us look at what the 100k jQuery in your website actually does. I bet it toggles your hamburger menu, it might toggle some tabs… and, of course, it powers that enormous homepage slider. So… without further ado, let me present you the replacements:

1. Off-screen navigation - Hiding and showing stuff is no problem with CSS. Alle you need is the [radio button hack](http://www.sitepoint.com/pure-css-off-screen-navigation-menu/), et voila… there you go.
2. Tabs - They are useful for hiding and showing content. You can use the [same recipe](http://stanhub.com/create-responsive-tabs-using-css-only-no-jquery/) for them.&nbsp;
3. Sliders - A little more complicated but also possible… Even with autoplay! Here are [some](http://codepen.io/hw/pen/biEBz) [examples](http://xdesigns.net/2013/08/css-slider/).


If you really MUST support IE8 or you want a more polished experience, you can use some conditional (vanilla) Javascript. In general, you should prefer to use Javascript only when necessary and only to enhance the experience. You do not want your site to be broken without.
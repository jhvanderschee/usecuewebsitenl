---
title: The viewport meta tag on desktop
---


On an iPad you can force your website to display as if your iPad is 1200 pixels wide. To do that you should use the viewport meta tag. Viewport meta tags do not work on a desktop browser.

Could we simulate it nonetheless? And what would that look like? The answer is ‘yes’ and ‘let me show you’. Note that I have NOT used 'rems', 'percentages', or 'viewport-width' in the CSS. Everything is defined in pixels and then 'transform(scale)' is applied to the HTML. Check it out!

[http://apps.usecue.com/viewport/viewport_tag.html](http://apps.usecue.com/viewport/viewport_tag.html)
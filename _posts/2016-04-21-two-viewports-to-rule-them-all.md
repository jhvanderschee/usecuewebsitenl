---
title: Two viewports to rule them all
---


The amount of available screen sizes is exploding. That is why we need responsive design. But what if I told you you only needed two sizes? Impossible, I hear you think. But you may be wrong. I came up with a technique that requires just two sizes and saves you a huge amount of time.&nbsp;

I have been experimenting with responsive web design a lot lately. This is mainly due to my side project called 'Without Coding'. In this project I enable graphic designers to create websites on a Photoshop-like canvas. This canvas is based on absolute positioning, making normal responsive techniques unfit. To fix this problem, I came up with the concept of 'fixed viewports' (as opposed to fluid responsiveness).

The concept of 'fixed viewports' is based on the premise that all screens have viewport scaling, unless they have a certain minimum width. This minimum width is what we call the 'desktop version'. This is nowadays about 1200 pixels. This desktop version can be shown on tablets through viewport scaling. Using this width on a phone, would result in an illegible website. Therefore we need a second width, the 'phone version'. Using 400 pixels for this width works best for me.

How it works is that you build a fixed-width website for each of these versions. This is done purely in CSS. You can start with the 1200 pixels version and switch to the 400 pixel version at about 600 pixels screen width. The switch can be made by using a CSS media query and rewriting the meta viewport tag with Javascript.&nbsp;

This means that the CSS for the desktop version does not need to have any responsive features. You can use simple floats and all sizes can be measured in pixels. The CSS for the phone version will override these sizes where needed. Most of the time this means applying 'float: none' and 'width: 100%' to these elements. Simple, right?

> "After 14h straight I think it’s time I call it a day… responsive design is hard"

I found the above quote on Twitter. Do you feel the same? Try this technique! 'Fixed viewports' makes building responsive websites very easy. In my experience it allows you to make ANY website responsive in less than 3 hours.

PRO TIP: Feeling fancy? Add an in-between version for portrait tablets or enable [the viewport meta tag on desktop](/2015/05/30/the-viewport-meta-tag-on-desktop.html).
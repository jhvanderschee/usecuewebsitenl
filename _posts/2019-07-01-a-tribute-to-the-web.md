---
title: A tribute to the web
---

I have redesigned my website. The new design is loud and blue. It looks like [Yves Kleins](https://nl.wikipedia.org/wiki/Yves_Klein) [17 million dollar blue](https://www.widewalls.ch/yves-klein-paintings-top-auction/ikb-1/), but it is actually the native color of an unstyled HTML link. The exact color in RGB (hex) is #0000ee. 

Does the font look familiar too? It is [Times New Roman](https://en.wikipedia.org/wiki/Times_New_Roman), the default serif of the web (on Mac and Windows). I have even taken the effort to embed it, so it will also show on devices that lack this historical font. Additionally, all links are underlined, like they are supposed to in HTML. 

So why did I chose for this bold and (slightly) ackward redesign? I have been building websites for the last 12 years, day in, day out. According to the 10.000 hours rule, I am officially an expert. As an expert I wanted to put the web development craft in perspective by creating a website that honors the web. This redesign is just that: a provoking tribute to the nature and history of the web.

In my opinion most web developers do not embrace the nature of the web, but fight it instead. They are swimming upstream, sometimes even without realizing it. The average ([median](https://www.igvita.com/2016/01/12/the-average-page-is-a-myth/)) page load is [almost 2Mb and still growing](https://httparchive.org/reports/page-weight). These websites consist of thousands of lines of 'unknown code'. They are slow, bulky, vulnerable to (XSS) attacks and poorly accessible. As a result, they get penalized by Googles search ranking algorithm and rightfully so. However, we have come to a point where web developers seem incapable of solving these self created or chosen problems. A clear example is AMP from Google, which became a popular solution for lightweight performant mobile pages. I hope everyone realizes that Google does not have some sort of magic HTML, nor does it have super quick servers (the Googles Compute Engine in Eemshaven in the Netherlands is even kind of slow). The people at Google just knows how to build a proper website. A skill that most web developers seem to have lost.

This website is bold and brutal and this page weighs only 20kb. That means this fully functional web page is 10 times smaller than jQuery alone (the library most websites load to do Javascript stuff). It is also 100(!) times smaller than the average web page. The average website requires 70 requests. This page requires only 3 web requests: an HTML file for the content, a CSS file for the layout and a JS file for some additional features. It uses a font that is most likely already present on your machine and uses CSS to make it scale along with the screen size (with a minimum and a maximum). This fully responsive website has a 100% score for Speed, Accessibility, Performance and Best Practise in [Google Lighthouse](https://web.dev). Their report page even shows fireworks when you review this page... no joke!

This website aims to be a demonstration of art and craft. It does not aim to please, as much as it aims to provoke and stir up a discussion about the craft of web development.

## Sources and inspiration

- [The first website ever](http://info.cern.ch/hypertext/WWW/TheProject.html)
- [A motherfucking website](https://motherfuckingwebsite.com)
- [What is a brutalist website?](https://trydesignlab.com/blog/brutalist-websites-5-things-designers-learn-brutalism/)
- [A solar powered website](https://solar.lowtechmagazine.com/power.html)
- [HTTP Archive page weight report](https://httparchive.org/reports/page-weight)
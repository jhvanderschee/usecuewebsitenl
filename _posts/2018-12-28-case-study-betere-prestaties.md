---
title: 'Case: migratie van WordPress naar Jekyll'
---

Brechje Vermaat is de eigenaresse van Studio inHout. Ze maakt prachtige maatwerk meubelen en heeft ook een eigen collectie. Usecue heeft haar site een face-lift gegeven en gemigreerd van WordPress naar Jekyll.

Het [nieuwe ontwerp](/uploads/studioinhout.png) lijkt behoorlijk veel op het [oude ontwerp](/uploads/studioinhout2.png). Er zijn echter wel behoorlijk wat verbeteringen doorgevoerd. Zo is de site nu [geschikt](/uploads/studioinhout2_mobiel.png) voor [mobiel](/uploads/studioinhout_mobiel.png), wat belangrijk is in het kader van '[mobile-first indexing](https://developers.google.com/search/mobile-sites/mobile-first-indexing)'. Daarnaast is de site mooi gecentreerd op grotere beeldschermen, hebben de afbeeldingen een hogere resolutie en is de URL-structuur beter (voor de zoekmachine). Tenslotte heeft haar site nu een SSL certificaat. De URL van haar site begon met http:// i.p.v. https:// en dat vond Google [niet leuk](https://developers.google.com/web/tools/lighthouse/audits/https).

Om aan te tonen hoeveel de site precies verbeterd is, zie je hieronder de statistieken van [Google Lighthouse](https://web.dev):

{% include pagespeed_score.html score="81,85,69,91" %}

De site had een speed-index van 5 seconden (wat gemiddeld is). Deze is teruggebracht naar minder dan 2 seconden. Dat is onder andere gerealiseerd door de site middels Jekyll statisch te maken en over een CDN te serveren. De overige scores na de migratie waren:

{% include pagespeed_score.html score="99,100,100,100" %}

De site presteert nu optimaal. Hij laadt lekker snel en is goed te gebruiken op mobiele telefoons. Niets staat deze site nog in de weg om hoog in de zoekmachine te eindigen. Brechje was uiteraard verguld met zoveel mooie cijfers... maar ik (nog) niet. Ik wil weten of deze nieuwe website haar bedrijf over een half jaar ook echt verder heeft geholpen. Pas dan is dit project voor mij echt geslaagd.

[Bekijk de nieuwe website &rarr;](/portfolio/studioinhout/)
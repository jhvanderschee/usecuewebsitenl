---
title: Internet Explorer specifiek
---

Al jaren schrijf ik cross-browser code: code die hetzelfde werkt in alle (gangbare) browsers. Mijn taktiek is om alleen code te gebruiken waarvan ik zeker weet dat deze ondersteund wordt door alle browsers. 

Iedereen gebruikte allang 'flexbox', terwijl ik nog steeds 'float' gebruikte. Dat scheelde me enorm veel cross-browser testing en browser-specifieke oplossingen. Recent heb ik float eindelijk ingeruild voor flexbox, omdat ik de browser support voldoende vond. Zo gaat dat met meer dingen, waaronder ook 'jQuery'. Toen jQuery uitkwam werkte float nog niet consistent, werden CSS standaarden met voeten werden getreden en zat iedere website vol met Internet Explorer specifieke code. jQuery was toen een uitkomst. Nu is het overbodige ballast geworden. 

## IE conditional is niet meer

Toch loop je nog wel eens een heel enkele keer aan tegen de noodzaak om Internet Explorer specifieke code te schrijven. Daarvoor gebruikte ik altijd 'IE conditional comments'. Je kon er precies mee aangeven op welke versie je code van toepassing was. Deze comments (die alleen door Internet Explorer werden gelezen) worden echter niet meer ondersteund.

## User Agent als oplossing?

Online vond ik echter een trucje om toch IE specifieke code (CSS) te schrijven. De code die ik vond voegt de 'user agent' toe aan de body in een data attribuut. Dat ziet er zo uit: 

var doc = document.documentElement;  
doc.setAttribute('data-useragent', navigator.userAgent);

Vervolgens kun je zoiets zeggens als: als de user agent het woord 'Windows' bevat, voer deze code uit. Windows is echter niet het goede woord, omdat meerdere browsers op Windows (kunnen) draaien. Ik kwam erachter dat deze CSS regel vrij goed onderscheid kan maken tussen de browsers Internet Explorer, Edge, Chrome en Firefox:

html[data-useragent*='Trident']

Trident is de 'layout engine' van Internet Explorer en wordt in alle IE user agents genoemd. Trident is eigendom van Microsoft, net als Internet Explorer en Edge. Edge gebruikte vroeger echter 'EdgeHTML' en tegenwoordig 'Blink' als layout engine. Hierdoor pik je met deze Microsoft georiënteerde zoekterm dus precies de Internet Explorer browsers er tussenuit, zonder dat je gebruik hoeft te maken van IE conditional comments. 

## Overwegingen

Een grote kritiek op 'user agent sniffing' zoals deze techniek heet, is dat de techniek inaccurate resultaten geeft. Daar kan ik weinig anders tegenin brengen dan [de lijst van Trident browsers](https://en.wikipedia.org/wiki/Trident_(software)) tonen en beweren dat de schade wel mee zal vallen. Daarnaast is het onwaarschijnlijk dat er een nieuwe browser uitkomt met de Trident layout engine (waarop de code mogelijk een averechts effect zou kunnen hebben), aangezien Internet Explorer niet meer verder wordt onwikkeld en Microsoft zijn kaarten op het op Chromium gebaseerde Edge heeft gezet (dat dus tegenwoordig Blink gebruikt).
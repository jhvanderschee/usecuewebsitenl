---
title: Argumenten voor de JAMstack
date: 2018-11-22 08:47:15 +0000

---
Ik hoor om me heen zoveel onzin-argumenten voor JAMstack websites, dat ik graag even het een en ander recht wil zetten. Aldus, ter leering ende vermaeck...

## JAMstack? Wat is dat?

Allereerst: [Wat zijn JAMstack websites eigenlijk?](https://jamstack.org/ "https://jamstack.org/") Het is eigenlijk makkelijker uit te leggen wat het NIET is. Het zijn sites die NIET real-time hun eigen database uitlezen om hun pagina's samen te stellen. JAMstack websites serveren voorgegenereerde pagina's die eventueel worden verrijkt door Javascript met uit API's vekregen content. WordPress websites genereren hun pagina's real-time uit hun eigen database en zijn dus GEEN JAMstack websites. 

Argumenten voor JAMstack die je vaak hoort zijn:

* betere prestaties
* veiliger
* makkelijker schaalbaar
* goedkoper
* betere developer ervaring

## Betere prestaties

Daarmee wordt de snelheid van het laden van de site bedoeld. WordPress met een caching server is echter net zo snel als een statische stite, omdat WordPress met cache in feite een statische website is. Dat is dus niet waar. Het genereren van een voorbeeld van je wijzigingen is overigens veel trager bij een JAMstack website.

## Veiliger

Je hoeft je 'security' niet meer zelf te regelen, maar je besteedt het uit aan derde partijen waardoor je er geen zicht/invloed meer op hebt. Dat is iets heel anders dan 'veiliger'. Een monolith lijkt eenvoudiger te beveiligen dan een handvol services van derde partijen.

## Makkelijker schaalbaar

Voor een WordPress website is het niet erg moeilijk om een grotere/snellere/betere server te bestellen en je site te migreren. In het ergste geval scheid je de database van de files. Het lijkt me sterk dat je site zo succesvol is dat een dergelijke setup onvoldoende is.

## Goedkoper

JAMstack sites hebben minder/geen 'bewegende onderdelen', waardoor hosting goedkoper is. Er zit echter een addertje onder het gras. Wanneer je je JAMstack website wilt uitbreiden met een goed CMS, het schalen van afbeeldingen of het versturen van formulieren moet je dat afnemen bij een derde partij, die daar geld voor vraagt. Deze kosten doen je eerdere voordeel teniet, waardoor je vaak per saldo niet goedkoper uit bent.

## Betere developer ervaring

Als simpeler beter is... dan is dit waar. Wanneer je echter een fail-over moet/wil configureren, dan zul je al snel moeten toegeven dat het ook niet simpeler is. Een fail-over van een WordPress site draaien is een fluitje van een cent (gewoon de server dupliceren en er een fail-over DNS op zetten). Wanneer je dit voor een JAMstack moet doen, heb je het een stuk lastiger. Je zult dan alternatieve oplossingen voor alle services moeten configureren. De complexiteit is dan al snel niet meer te overzien.

## Conclusie

Het genuanceerde verhaal is dus: JAMstack is een logische keuze voor developers die security willen out-sourcen. Voor simpele websites is het goedkoper en eenvoudiger, maar zodra je meer met je website wil wordt het minstens zo ingewikkeld als bij monoliths (als niet ingewikkelder).
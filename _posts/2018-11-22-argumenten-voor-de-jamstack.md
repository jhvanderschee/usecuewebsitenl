---
title: Argumenten voor de JAMstack
date: 2018-11-22 08:47:15 +0000

---
Argumenten om voor jamstack te kiezen zijn vaak:

- betere prestaties
- veiliger
- makkelijker schaalbaar
- goedkoper
- betere developer ervaring

## Betere prestaties

Daarmee wordt de snelheid van de site bedoeld. WordPress met een caching server is echter net zo snel als een statische stite, omdat WordPress met cache in feite een statische website is. Dat is dus niet waar.

## Veiliger

Je hoeft je 'security' niet meer zelf te regelen, maar je besteedt het uit aan derde partijen waardoor je er geen zicht/invloed meer op hebt. Dat is iets heel anders dan 'veiliger'. Een monolith lijkt eenvoudiger te beveiligen dan een hand vol services van derde partijen.

## Makkelijker schaalbaar

Het is niet erg moeilijk om een grotere/snellere/betere server te bestellen en de boel te migreren. In het ergste geval scheid je de database van de files. Het lijkt me sterk dat je site zo succesvol is dat een dergelijke setup onvoldoende is.

## Goedkoper

JAMstack sites hebben minder/geen 'bewegende onderdelen', waardoor hosting goedkoper is. Er zit echter een addertje onder het gras. Wanneer je je JAMstack website wilt uitbreiden met een goed CMS, het schalen van afbeeldingen of het versturen van formulieren moet je dat afnemen bij een derde partij, die daar geld voor vraagt. Deze kosten doen je eerdere voordeel teniet, waardoor je per saldo niet goedkoper uit bent.

## Betere developer ervaring

Als simpeler beter is... dan is dit waar. Wanneer je echter een fail-over moet/wil configureren, dan zul je al snel moeten toegeven dat dit niet waar is. Een fail-over van een WordPress site draaien is een fluitje van een cent (gewoon de server dupliceren en er een fail-over DNS op zetten). Wanneer je dit voor een JAMstack moet doen, heb je het een stuk lastiger. Je zult dan alternatieve oplossingen voor alle services moeten configureren. De complexiteit is dan als snel niet meer te overzien.

Het genuanceerde verhaal is dus: JAMstack is een logische keuze voor developers die security willen out-sourcen. Voor simpele websites is het goedkoper en eenvoudiger, maar zodra je meer met je website wil wordt het minstens zo ingewikkeld als bij monoliths (als niet ingewikkelder).
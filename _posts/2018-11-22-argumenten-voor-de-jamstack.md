---
title: Argumenten voor de JAMstack

---
Ik heb de afgelopen paar jaar meer dan 100 JAMstack websites gebouwd en ben dan ook een [groot](https://www.usecue.nl/blog/jekyll-tegen-de-rest-van-de-wereld/) [fan](https://www.usecue.nl/blog/from-wordpress-to-cloudcannon/). Ik hoor echter veel ongenuanceerdheid om me heen. Om dat recht te zetten zal ik proberen de JAMstack zo eerlijk mogelijk met WordPress te vergelijken.

Allereerst: [Wat zijn JAMstack websites eigenlijk?](https://jamstack.org/ "https://jamstack.org/") Het is eigenlijk makkelijker uit te leggen wat het NIET is. Het zijn sites die NIET real-time hun eigen database uitlezen om hun pagina's samen te stellen. JAMstack websites serveren voorgegenereerde pagina's die eventueel worden verrijkt door Javascript met uit API's vekregen content. WordPress websites genereren hun pagina's real-time uit hun eigen database en zijn dus GEEN JAMstack websites.

Argumenten voor de JAMstack die je vaak hoort zijn:

* betere prestaties
* veiliger
* makkelijker schaalbaar
* goedkoper
* betere developer ervaring

## Betere prestaties

Met betere prestaties wordt de snelheid van het laden van de site bedoeld. Een gewone WordPress website is trager dan een gewone JAMstack website, omdat WordPress zijn pagina's real-time moet samen stellen. Wanneer je WordPress echter voorziet caching en een CDN, dan liggen de prestaties ineens veel dichter bij elkaar, omdat een WordPress website met cache in feite een statische/JAMstack website is. Het genereren van een voorbeeld van je wijzigingen is overigens veel trager bij een JAMstack website (meestal ongeveer een factor 10, dus 2 seconde versus 20).

## Veiliger

Een JAMstack heeft geen 'bewegende onderdelen'. Daarmee wordt bedoeld dat een JAMstack website geen PHP en geen database heeft. PHP in combinatie met een database staat erom bekend gevoelig te zijn voor aanvallen van buitenaf, terwijl HTML en Javascript en CSS (de talen van de JAMstack) 'by design' veilig zijn, omdat ze niet op de server, maar op de computer van de bezoeker worden uitgevoerd. Wanneer je echter een contactformulier op je site wilt, of comments onder je blog, dan heb je een derde partij nodig. Deze partij heeft dezelfde beveiligingsproblematiek als een WordPress website. Bij de JAMstack heb je dus minder bewegende onderdelen, dus minder 'attack surface', maar je besteedt je beveiliging wel vaak uit aan meerdere derde partijen. Je moet maar hopen dat zij hun beveiliging goed op orde hebben. Daarnaast is het goed om te weten dat je bij WordPress ook je beveiliging uit kunt besteden, door voor Managed WordPress Hosting te kiezen. Dit brengt echter relatief hoge extra kosten met zich mee en is daarom (wat mij betreft ten onrechte) impopulair.

## Makkelijker schaalbaar

Het idee is dat een JAMstack website van een CDN wordt geserveerd. CDN's kunnen enorme hoeveelheden bezoekers aan. Bij groot succes (heel veel bezoekers) zal je site dus niet snel down gaan. Zoals eerder beargumenteerd, kun je ook een CDN aan een WordPress site koppelen, waardoor het verschil vrijwel volledig teniet wordt gedaan. Bovendien kun je in het ergste geval je WordPress website altijd nog migreren naar een grotere/snellere/betere server.

## Goedkoper

JAMstack sites hebben geen bewegende onderdelen, wat de belasting voor de server en veel lager maakt. Daardoor is het hosten van een JAMstack website veel goedkoper. Er zit echter een addertje onder het gras. Wanneer je je JAMstack website wilt uitbreiden met een goed CMS, het schalen van afbeeldingen of het versturen van formulieren moet je dat afnemen bij een derde partij, die daar (mogelijk) geld voor vraagt. Deze kosten doen je eerdere voordeel vaak teniet, waardoor je soms per saldo  duurder uit bent.

## Betere developer ervaring

'Eenvoudiger is beter' en JAMstack websites zijn in principe erg eenvoudig. Het is dus sneller en makkelijker om een JAMstack website te maken. Wanneer je echter iets buiten de scope van de JAMstack wil, wordt het al snel veel ingewikkelder. Neem bijvoorbeeld een fail-over. Een fail-over van een WordPress website draaien is een fluitje van een cent (gewoon de server dupliceren en er een fail-over DNS op zetten). Wanneer je dit voor een JAMstack moet doen, heb je het een stuk lastiger. Je zult dan alternatieve oplossingen voor alle services moeten configureren. De complexiteit wordt dan al snel erg hoog, wat zeker niet tot een betere developer ervaring leidt. Hoe fijn de developer ervaring is hangt dus af van de complexiteit van de website.

## Conclusie

Het genuanceerde verhaal is dus: JAMstack is een logische keuze voor simpele websites, omdat het dan vaak goedkoper en eenvoudiger is. Zodra je echter bijzondere wensen hebt, wordt het al snel ingewikkelder en duurder. De JAMstack is dus niet voor ieder project de beste oplossing. Wil je weten of de JAMstack een goede keuze is voor jouw website? Neem [contact](https://www.usecue.nl/contact/) met mij op. Ik geef graag advies.

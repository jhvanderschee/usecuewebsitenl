---
title: Vaarwel Google
---

Ik kwam er vandaag achter dat Google Maps op mijn website een donkere overlay toonde, met de tekst ‘for development purposes only’. Als website ontwikkelaar en host ben ik verantwoordelijk voor honderden websites, dus je snapt dat ik enigszins in paniek raakte.

Al snel kwam ik erachter dat ik (gelukkig?) niet de enige was met dit probleem. De website van het gemeentevervoerbedrijf (GVB) in Amsterdam, die gebruikt wordt door een half miljoen mensen per dag, had hetzelfde probleem. Je kunt dit hier zien:

<a href="/uploads/gvb.png" style="display: block;"><img src="/uploads/gvb_pattern.png" style="display: block;" /></a>

Het developers console van mijn browser toonde rode foutmeldingen en een pop-up. Het waren berichten van Google aan de eigenaar van de site. Er stond: ‘The request is missing an API key, billing has not been enabled on your account, the provided billing method is invalid (for example an expired credit card) or a self-imposed daily limit has been exceeded’. Een snelle zoekopdracht op ‘Google Maps API billing’ leidde me naar een pagina met als titel ‘Pricing that scales to fit your needs’. Hier stond dat ik Google Maps alleen kon blijven gebruiken als ik mijn factureringsgegevens invoerde.

> Google: We hebben zonder waarschuwing je website kapot gemaakt en we houden je website gegijzeld totdat je ons een creditcard nummer geeft.

Wat te doen? Moet ik mijn klanten een e-mail sturen, om te vragen om extra geld? En hoeveel dan? Of erger... moet ik ze vragen om hun creditcard gegevens?

Ik was boos. Ik wilde dat mijn websites het weer deden, maar vond niet dat ik mijn klanten extra geld kon vragen vanwege een inschattingsfout van mij. En met 'inschattingsfout' bedoel ik 'kiezen voor Google als partner in software ontwikkeling'. Google had me verraden. Ik had wel gelezen dat Google marktaandeel (reclameinkomsten) aan het verliezen was aan Amazon en Facebook, maar ik had niet verwacht dat dat hun loyaliteit richting software ontwikkelaars dusdanig zou beinvloeden. Het ooit (onder software ontwikkelaars) zo populaire Google was hebberig geworden en onverantwoordelijk. Ik weet niet wat ik erger vond: dat ze miljoenen website kapot hadden gemaakt, of dat ze ons (de software ontwikkelaars) de schuld gaven met hun 'for development purposes only' boodschap.

Toen heb ik het enige gedaan wat ik kon: Ik heb mij opgeofferd en heb eigenhandig Google Maps verwijderd uit alle websites die ik host. Ik heb Google Maps vervangen door de [open-source Leaflet library](https://leafletjs.com/) die werkt met Open Street Maps of door een zelfontwikkelde SVG oplossing (zie: [beukenbuurt.amsterdam](https://beukenbuurt.amsterdam)). Er is een lichtpuntje: Leaflet heeft veel betere documentatie dan Google Maps en mijn zelfontwikkelde SVG oplossing is volledig AVG compliant.

Google als technische partner in software ontwikkeling? Nee dank je, laten we dat maar niet meer doen. Ik wens Google dan ook veel succes met hun (te) dure Compute Engine en al zijn API’s. Vaarwel Google.

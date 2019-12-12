---
title: Lettertypes vinden in een PDF
---

Wanneer een ontwerper artwork moet aanleveren, zeg ik altijd: 'Doe maar een high resolution PDF, dus alsof je voor print aanlevert, maar dan in safe RGB (sRGB).' 

Ik zal uitleggen waarom ik dat vraag en wat mijn bijbehorende work-flow is. Bij safe RGB is de kleurconversie van CMYK naar RGB al gedaan en kunnen er ook geen kleurprofielen meer actief zijn. Dit maakt dat de kleur uit de PDF exact dezelfde is als de hexwaarde voor het web en daar dus geen discussie meer over kan ontstaan. Daarnaast vraag ik om hoge resolutie, zodat ik hoge resolutie foto's uit de pdf kan halen (rechtsklikken en opslaan). Het nadeel van deze hoge resolutie PDF is dat deze wat traag openen op mijn Linux machine. Daarom maak er altijd via GIMP ook nog een afbeelding of screenshot van, omdat dat sneller opent. Tenslotte open ik de PDF in een vectorprogramma om erachter te komen welke lettertypes gebruikt worden (en om eventuele vectorafbeeldingen op te slaan). 

Bij een recent project werkte dat echter niet. Adobe Illustrator vond dat de file corrupt was en Inkscape wilde hem ook niet goed openen. Vreemd genoeg opende de file prima in een PDF reader en in GIMP. Gelukkig vond ik [online](http://www.documentsnap.com/find-fonts-pdf/) een goede tip. Type in de terminal:

> {% raw %}strings /path/to/your/filename.pdf | grep FontName{% endraw %}

Dat gaf me precies de informatie over de lettertypes die ik zocht. Een superfijne oplossing, waardoor ik voor de analyse van de lettertypes niet meer afhankelijk ben van de grillen van eerdergenoemde vectorprogramma's.
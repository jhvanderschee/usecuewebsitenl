---
title: Icon font of SVG?
---

Wanneer je iconen nodig hebt voor je website of webapplicatie kom je al snel uit op een 'icon font'. Dit was tot voor kort ook de meest praktische manier om iconen in te laden, maar (spoiler) nu niet meer!

Icon fonts kunnen makkelijk gestyled worden via CSS en het toevoegen en gebruiken van die iconen is een fluitje van een cent. Populaire 'icon sets', zoals Font Awesome, gebruikten tot voor kort deze techniek. Het grootste nadeel van deze techniek was en is dat alle iconen tegelijk worden ingeladen. Dit probleem kan je deels ondervangen door slechts een deel van de iconen te laden, namelijk alleen diegene die je gebruikt in je project. Dit heet 'subsetting' en is een gebruikelijke techniek binnen lettertypes. Je houdt daarmee echter het probleem dat je op de eerste pagina alle iconen uit je hele project moet inladen, terwijl de pagina zelf er maar een paar nodig heeft. Dit levert een voordeel op in vervolgpagina's, maar dat ziet Google niet. Deze techniek kun je dus niet gebruiken wanneer je een [100% Google Lighthouse score](https://www.usecue.com/blog/how-to-get-a-100-google-lighthouse-score/) wil halen, temeer omdat lettertypes en CSS ook nog eens per definitie blocking zijn.

Om deze reden is het gebruik van SVG iconen in opkomst. SVG iconen zijn eigenlijk gewone vectorplaatjes. Je kunt ze 'inline' gebruiken maar je kunt ze ook als externe afbeeldingen via een 'img' tag laden. In dat laatste geval kunnen ze gecached worden en asynchroon worden ingeladen, waardoor ze je website niet onnodig vertragen. Het nadeel is alleen dat je de externe SVG afbeeldingen (tot voor kort) niet met CSS van kleur kon laten veranderen. Daarmee was het gebruik van SVG afbeeldingen niet optimaal. Wanneer je ze toch van kleur wilde laten veranderen moest je meerdere SVG afbeeldingen inladen of je moest ze (eventueel met javascript) inline zetten.

Met de [bredere ondersteuning](https://caniuse.com/#feat=css-filters) van 'filter' in CSS is daar verandering in gekomen. Via deze filters kun je zwarte afbeeldingen met CSS veranderen in elke kleur die je wil. dit doe je door slim gebruik te maken van het sepia filter in combinatie met brightness en hue rotate. Eerst maak je de afbeelding grijs in plaats van zwart met het brightness filter, daarna maak je de afbeelding geel met het sepia filter en vervolgens verander je de gele afbeelding in elke kleur die je wil via hue rotate. Je kunt deze transformaties opslaan in een CSS class. Hieronder zie je hoe je dat kan doen:

.icon.purple {  
&nbsp;&nbsp;&nbsp;&nbsp;brightness(0.75)  
&nbsp;&nbsp;&nbsp;&nbsp;sepia(1)  
&nbsp;&nbsp;&nbsp;&nbsp;hue-rotate(-155deg)  
&nbsp;&nbsp;&nbsp;&nbsp;saturate(3.5);  
}  
&lt;img src='blackicon.svg' class='icon purple' /&gt;

Mijn nieuwe proces is dat ik een hele verzameling SVG iconen download en deze in hun eigen map zet in mijn project. Wanneer ik dan een icoon nodig heb kies ik het meest geschikte icoon uit deze map en geef hem de juiste kleur door een kleur-class toe te voegen. Dat werkt als een trein, zolang die trein niet op Internet Explorer draait ;-). Heb jij een betere techniek? Ik [hoor](/contact) het graag!
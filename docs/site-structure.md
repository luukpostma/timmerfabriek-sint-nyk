# Sitestructuur Timmerfabriek Sint Nyk

Dit document beschrijft de huidige inhoudelijke structuur van de website. Het is een basis voor latere tekstherschrijving, geen voorstel voor nieuwe pagina's of nieuwe inhoud. Placeholder- en lorem-ipsumtekst wordt hieronder als zodanig benoemd en is geen inhoudelijke bron.

## Websitebreed

- De header bevat de productnavigatie **Kozijnen**, **Deuren**, **Schuifpuien**, **Beglazing** en **Vouwwanden**, plus **Projecten**, **Over ons**, **Voor aannemers**, **Contact** en de CTA **Offerte aanvragen**.
- De footer bevat standaard een CTA naar `/contact/`, product- en overige navigatie, contactgegevens en een link naar de privacyverklaring. De contactpagina toont deze footer-CTA niet. Op de aannemerspagina is de CTA aangepast naar het bespreken van een project.
- De standaard-FAQ komt terug op de homepage, categoriepagina's, alle productdetailpagina's, over-ons en projectdetails. Deze behandelt: volledig maatwerk, particulieren en aannemers, levertijd, HR++/triple glas, plaatsing en landelijke levering.
- Alle product- en offerte-CTA's leiden naar `/contact/`.

## Gedeelde structuur van productdetailpagina's

De twaalf productdetailpagina's gebruiken dezelfde opbouw:

1. **Hero** — broodkruimelpad, productnaam, korte productspecifieke introductie, productafbeelding en CTA **Offerte aanvragen**.
2. **Keuzemogelijkheden** — korte productspecifieke inleiding en vier keuzes: kleur en afwerking, beglazing, maatvoering en beslag/aansluitdetails. De invulling van deze vier onderwerpen blijft per product verschillend.
3. **Waarom dit product** — productspecifieke inleiding en exact drie productspecifieke voordelen. Deze voordelen mogen bij het herschrijven niet worden vervangen door één generieke set voor alle producten.
4. **FAQ** — de gedeelde zes vragen over maatwerk, doelgroepen, levertijd, glas, plaatsing en werkgebied.
5. **Footer-CTA** — offerte aanvragen of eerst overleggen.

De huidige template bevat configuratie voor een aparte afbeelding bij de voordelen, maar rendert die afbeelding op dit moment niet. Dit is dus geen zichtbare contentsectie.

## Homepage

**Pagina:** Homepage
**URL:** `/`
**Doel:** Timmerfabriek Sint Nyk introduceren, het productaanbod tonen en bezoekers naar een offerte, samenwerking of verdiepende pagina leiden.

**Secties:**

1. **Hero** — positionering als leverancier van kozijnen op maat uit Friesland; houten kozijnen, deuren en schuifpuien uit de eigen werkplaats; persoonlijk contact; Google-beoordeling; CTA's naar offerte en aannemers.
2. **USP-balk** — persoonlijk contact, Fries vakmanschap, eigen werkplaats en levering door heel Nederland.
3. **Producten** — kaarten voor Kozijnen, Deuren, Schuifpuien, Beglazing en Vouwwand. De kaartomschrijvingen zijn momenteel lorem ipsum en moeten later productspecifiek worden ingevuld.
4. **Werkwijze** — drie stappen: bespreken en inmeten; offerte en voorbereiding; productie en levering. Inclusief aandachtspunten per stap en offerte-CTA.
5. **Over ons** — eigen werkplaats in Sint Nicolaasga, moderne machines, ervaren vakmensen en het proces in eigen hand; link naar Over ons.
6. **Recente projecten** — twee projecten uit de projectcollectie en een link naar het volledige overzicht.
7. **Voor aannemers** — nieuwbouw, renovatie en seriematig maatwerk; uitvoering, planning en levering; link naar de aannemerspagina.
8. **FAQ** — gedeelde FAQ.

## Kozijnen

### Categoriepagina

**Pagina:** Kozijnen
**URL:** `/kozijnen/`
**Doel:** Het aanbod houten kozijnen ordenen, bezoekers naar het juiste type leiden en de algemene voordelen van houten kozijnen samenvatten.

**Secties:**

1. **Categoriehero** — paginatitel en broodkruimelpad.
2. **Soorten kozijnen** — kaarten voor Vast glas kozijnen, Draaikiepramen, Draairamen, Deurkozijnen en Binnendeurkozijnen; afsluitende contactkaart voor ander maatwerk. De kaartomschrijvingen zijn momenteel lorem ipsum.
3. **Waarom houten kozijnen** — drie categorievoordelen: **Isolatie**, **Uitstraling** en **Volledig maatwerk**.
4. **Voor aannemers** — verwijzing naar samenwerking voor grotere projecten.
5. **FAQ** — gedeelde FAQ.

### Productpagina's kozijnen

Onderstaande pagina's volgen de gedeelde productdetailstructuur.

**Pagina:** Vast glas kozijn
**URL:** `/kozijnen/vast-glas-kozijnen/`
**Doel:** Een vast houten glaskozijn presenteren als maatwerkoplossing voor veel daglicht, isolatie en een rustige geveluitstraling.
**Specifieke keuzes:** HR++ of triple glas; exacte aansluiting op bestaande of nieuwe gevelopening; passende glaslatten en details.
**Drie voordelen:**

1. **Veel natuurlijk licht** — groot glasoppervlak en een open karakter.
2. **Sterke isolatie** — lucht- en kierdicht doordat er geen te openen deel is.
3. **Onderhoudsarm** — geen scharnieren of sluitwerk.

**Pagina:** Draaikiepraam
**URL:** `/kozijnen/draaikiepramen/`
**Doel:** De combinatie van gecontroleerd kiepen en volledig openen uitleggen.
**Specifieke keuzes:** HR++ of triple glas; maatwerk voor renovatie, verbouwing of nieuwbouw; veilige sluitpunten en prettige bediening.
**Drie voordelen:**

1. **Twee manieren van ventileren** — kiepstand of volledig openen.
2. **Comfortabel en veilig** — ventileren zonder het raam volledig open te zetten.
3. **Eenvoudig schoon te maken** — glas en kozijn zijn bereikbaar doordat het raam naar binnen draait.

**Pagina:** Draairaam
**URL:** `/kozijnen/draairamen/`
**Doel:** Een volledig te openen houten raam presenteren voor ventilatie en contact met buiten.
**Specifieke keuzes:** glas afgestemd op isolatiewaarde en formaat; maat en draairichting; hang- en sluitwerk, bediening en beveiliging.
**Drie voordelen:**

1. **Ruime opening** — veel frisse lucht en onbelemmerd uitzicht.
2. **Praktisch in gebruik** — eenvoudig dagelijks openen, sluiten en ventileren.
3. **Passend bij iedere stijl** — profilering, kleur en vlakverdeling voor moderne en klassieke gevels.

**Pagina:** Deurkozijn
**URL:** `/kozijnen/deurkozijnen/`
**Doel:** Het houten maatwerkkozijn als sterke en passende basis voor een buitendeur presenteren.
**Specifieke keuzes:** optionele isolerende zijlichten of bovenlicht; afstemming van kozijn, dorpel en sponningen; voorbereiding voor hang- en sluitwerk en beveiliging.
**Drie voordelen:**

1. **Stevige basis** — betrouwbare ondersteuning bij intensief gebruik.
2. **Goede kierdichting** — beperkt tocht, vocht en warmteverlies.
3. **Volledig op maat** — afmetingen, profilering en details passend bij deur en bouwsituatie.

**Pagina:** Binnendeurkozijn
**URL:** `/kozijnen/binnendeurkozijnen/`
**Doel:** Een houten binnendeurkozijn presenteren als nauwkeurige overgang tussen binnendeur, wand en interieur.
**Specifieke keuzes:** optioneel glazen bovenlicht of zijlicht; afstemming op wanddikte en deuropening; voorbereiding voor scharnieren en sluitplaat.
**Drie voordelen:**

1. **Rustige afwerking** — nette overgang tussen deur, wand en ruimtes.
2. **Veel ontwerpvrijheid** — verschillende profielen en kleuren voor moderne of klassieke interieurs.
3. **Nauwkeurig passend** — voorkomt kieren en ondersteunt soepel openen en sluiten.

## Deuren

### Categoriepagina

**Pagina:** Deuren
**URL:** `/deuren/`
**Doel:** Het aanbod houten maatwerkdeuren ordenen en bezoekers naar het passende deurtype leiden.

**Secties:**

1. **Categoriehero** — paginatitel en broodkruimelpad.
2. **Soorten deuren** — kaarten voor Voordeuren, Achterdeuren, Garagedeuren en Binnendeuren; gericht op renovatie, verbouwing en nieuwbouw; afsluitende contactkaart voor andere maatwerkdeuren. De kaartomschrijvingen zijn momenteel lorem ipsum.
3. **Waarom houten deuren** — drie categorievoordelen: **Isolatie**, **Uitstraling** en **Volledig maatwerk**.
4. **Voor aannemers** — verwijzing naar samenwerking voor grotere projecten.
5. **FAQ** — gedeelde FAQ.

### Productpagina's deuren

Onderstaande pagina's volgen de gedeelde productdetailstructuur.

**Pagina:** Voordeur
**URL:** `/deuren/voordeuren/`
**Doel:** Een houten maatwerkvoordeur presenteren als combinatie van entree-uitstraling, isolatie en veiligheid.
**Specifieke keuzes:** gesloten deur of isolerend, helder of decoratief glas; maatvoering op kozijn en entree; meerpuntssluitwerk, deurbeslag en bediening.
**Drie voordelen:**

1. **Een eigen uitstraling** — vlakverdeling, kleur, glas en details als visitekaartje van de woning.
2. **Comfortabel geïsoleerd** — opbouw en kierdichting houden warmte binnen en tocht buiten.
3. **Veilig uitgevoerd** — degelijk hang- en sluitwerk.

**Pagina:** Achterdeur
**URL:** `/deuren/achterdeuren/`
**Doel:** Een houten achterdeur presenteren als praktische, geïsoleerde en veilige dagelijkse doorgang.
**Specifieke keuzes:** HR++ of triple glas voor daglicht; passend in bestaand kozijn of als complete oplossing; beslag voor intensief gebruik en veiligheid.
**Drie voordelen:**

1. **Praktische doorgang** — dagelijks verkeer tussen woning en tuin, schuur of bijkeuken.
2. **Licht waar gewenst** — glasopening voor extra daglicht.
3. **Duurzaam maatwerk** — nauwkeurige passing en degelijke afwerking voor langdurig gebruik.

**Pagina:** Garagedeur
**URL:** `/deuren/garagedeuren/`
**Doel:** Houten garagedeuren presenteren als degelijke maatwerkafsluiting die bij de gevel past.
**Specifieke keuzes:** optionele isolerende glasopeningen; maatwerk op breedte, hoogte en detaillering; robuuste scharnieren, veilige sluitingen en passende bediening.
**Drie voordelen:**

1. **Passend bij de gevel** — kleur, belijning en profilering sluiten aan op kozijnen en deuren.
2. **Robuuste uitvoering** — constructie en beslag passen bij formaat en regelmatig gebruik.
3. **Volledig maatwerk** — ook voor afwijkende openingen en renovatiesituaties.

**Pagina:** Binnendeur
**URL:** `/deuren/binnendeuren/`
**Doel:** Een houten binnendeur presenteren als maatwerkonderdeel dat sfeer en samenhang in het interieur brengt.
**Specifieke keuzes:** gesloten deur of helder, mat of decoratief glas; afstemming op kozijn, vloerhoogte en draairichting; scharnieren, krukken en sluitwerk passend bij ruimte en stijl.
**Drie voordelen:**

1. **Sfeervol materiaal** — warmte en karakter in moderne en traditionele interieurs.
2. **Ontworpen voor de ruimte** — indeling, glas en afwerking afgestemd op kamer en functie.
3. **Duurzaam te onderhouden** — hout kan worden bijgewerkt en lang mooi blijven.

## Overige producten

Deze pagina's volgen eveneens de gedeelde productdetailstructuur.

**Pagina:** Schuifpui
**URL:** `/schuifpuien/`
**Doel:** Een houten schuifpui presenteren als lichte, soepel te bedienen verbinding tussen woning en buitenruimte.
**Specifieke keuzes:** HR++ of triple glas; 2-, 3- of 4-delige uitvoering; rails, handgrepen en veilig sluitwerk.
**Drie voordelen:**

1. **2-, 3- of 4-delige uitvoering** — vlakverdeling en aantal delen passen bij gevelbreedte en gewenste doorgang.
2. **Veel licht en ruimte** — grote glasvlakken en een open uitstraling.
3. **Soepel in gebruik** — degelijke rails en passend beslag voor openen en afsluiten.

**Pagina:** Beglazing
**URL:** `/beglazing/`
**Doel:** Isolerende beglazing presenteren als verbetering van wooncomfort en energieprestatie voor bestaande of nieuwe kozijnen.
**Specifieke keuzes:** HR++ of Triple HR+++; glas, afstandhouders en afwerking; nauwkeurig inmeten; glaslatten, afdichtingen en aansluitdetails.
**Drie voordelen:**

1. **HR++ of Triple HR+++** — isolatiewaarde afgestemd op kozijn, renovatie en gewenste energieprestatie.
2. **Meer wooncomfort** — minder koudeval en een gelijkmatigere binnentemperatuur.
3. **Minder warmteverlies** — passende glasopbouw en zorgvuldige montage beperken energieverlies.

**Pagina:** Vouwwand
**URL:** `/vouwwanden/`
**Doel:** Een houten vouwwand presenteren als flexibele manier om de gevel breed te openen en binnen met buiten te verbinden.
**Specifieke keuzes:** HR++ of triple glas; aantal panelen, paneelbreedtes en openingsrichting; rails, scharnieren, handgrepen en sluitwerk.
**Drie voordelen:**

1. **Brede vrije opening** — panelen vouwen compact opzij.
2. **Flexibele paneelindeling** — aantal panelen en eventuele loopdeur passen bij ruimte en gebruik.
3. **Licht en comfortabel** — grote glasvlakken met isolerende beglazing.

## Projecten

### Projectoverzicht

**Pagina:** Projecten
**URL:** `/projecten/`
**Doel:** Gerealiseerd werk tonen en bezoekers naar afzonderlijke projectverhalen leiden.

**Secties:**

1. **Categoriehero** — paginatitel en broodkruimelpad.
2. **Projectoverzicht** — datagedreven raster met projectcategorie, titel, omschrijving en afbeelding.

### Gedeelde projectdetailstructuur

Projectdetails worden datagedreven opgebouwd via `/projecten/[id]/`:

1. **Projectintroductie** — categorie, projecttitel en korte omschrijving.
2. **Projectverhaal** — vrije inhoud uit de projectcollectie.
3. **Projectafbeelding**.
4. **Over ons** — eigen werkplaats en link naar de bedrijfspagina.
5. **FAQ** — gedeelde FAQ.

**Huidige projectpagina's:**

- **Houten kozijn met dubbele deur in Noordwolde** — `/projecten/houten-kozijn-met-dubbele-deur-noordwolde/`; categorie Kozijnen.
- **Dubbele binnendeuren met glas in Heerenveen** — `/projecten/dubbele-binnendeuren-met-glas-heerenveen/`; categorie Deuren.

Deze twee projecten en hun afzonderlijke identiteit blijven behouden. Bestandsnaam, URL, titel, categorie en omschrijving sluiten aan op het zichtbare maatwerk in de projectfoto's.

## Informatieve pagina's

**Pagina:** Over ons
**URL:** `/over-ons/`
**Doel:** Het bedrijf, de ervaring, maatwerkwijze en eigen productie introduceren.

**Secties:**

1. **Hero** — Timmerfabriek Sint Nyk, bedrijfsintroductie, loodsafbeelding en offerte-CTA. De huidige beschrijving is lorem ipsum.
2. **Highlights** — **20+ jaar ervaring**, **100% maatwerk** en **Eigen productie**. De toelichtingen zijn momenteel lorem ipsum; alleen deze drie koppen zijn inhoudelijk vastgelegd.
3. **Wie we zijn** — verhaal over de timmerfabriek met werkplaatsafbeelding. De huidige lopende tekst is lorem ipsum.
4. **Voor aannemers** — verwijzing naar grotere projecten.
5. **FAQ** — gedeelde FAQ.

**Pagina:** Voor aannemers
**URL:** `/voor-aannemers/`
**Doel:** Aannemers overtuigen van samenwerking voor houten maatwerk bij nieuwbouw, renovatie en seriematige projecten.

**Secties:**

1. **Hero** — houten kozijnen, deuren en puien op maat; korte lijnen, technische afstemming en levering volgens planning; CTA **Bespreek uw project**.
2. **USP-balk** — persoonlijk contact, Fries vakmanschap, eigen werkplaats en landelijke levering.
3. **Producten** — Kozijnen, Deuren, Schuifpuien, Beglazing en Vouwwand voor renovatie, verbouwing en nieuwbouw. De kaartomschrijvingen zijn momenteel lorem ipsum.
4. **Proces voor aannemers** — aanvraag en tekeningen; afstemming en offerte; productie en levering. Behandelt tekeningen, maatvoering, projectspecificaties, materialen, detaillering, planning, productiecontrole en levering op de bouw.
5. **Over de timmerfabriek** — eigen werkplaats en link naar Over ons.
6. **FAQ voor aannemers** — landelijke levering, produceren vanaf bouwtekeningen, grotere/seriematige aantallen, HR++ en Triple HR+++ glas, afgewerkte levering, levertijd en werk voor zowel aannemers als particulieren.
7. **Footer-CTA** — **Een project om te bespreken? / Bespreek uw project**.

## Contact en offerte

**Pagina:** Contact
**URL:** `/contact/`
**Doel:** Vragen en project- of offerteaanvragen ontvangen via telefoon, e-mail, bezoekadres of formulier.

**Secties:**

1. **Contactintroductie** — uitnodiging om een vraag of project te bespreken.
2. **Contactgegevens** — telefoonnummer, e-mailadres en adres in Sint Nicolaasga.
3. **Contactformulier** — voornaam, achternaam, e-mail, optioneel telefoonnummer en bericht; verzendstatussen voor bezig, geslaagd en mislukt.
4. **Footer zonder CTA** — de gebruikelijke extra contact-CTA wordt op deze pagina weggelaten.

## Juridische pagina

**Pagina:** Privacyverklaring
**URL:** `/privacyverklaring/`
**Doel:** Uitleggen hoe persoonsgegevens worden verzameld, gebruikt, gedeeld, bewaard en beschermd.

**Bestaande onderwerpen:** persoonsgegevens; contactgegevens; verwerkte gegevens; bijzondere/gevoelige gegevens; doeleinden en grondslagen; bewaartermijn; delen met derden; cookies; rechten van betrokkenen; beveiliging; wijzigingen en datum van laatste update.

# Stap-voor-stap prompts voor Claude Sonnet 5

**Project:** Timmerfabriek Sint Nyk  
**Doel:** de responsive verbeteringen uit de UI/UX-audit gecontroleerd en in kleine stappen implementeren  
**Bijbehorende audit:** [`RESPONSIVE-UI-UX-AUDIT.md`](./RESPONSIVE-UI-UX-AUDIT.md)

## Hoe je dit document gebruikt

Deze promptreeks is bedoeld voor één doorlopende Claude-sessie in de projectrepository.

1. Geef eerst alleen de **startprompt** aan Claude.
2. Controleer Claude's antwoord en de baseline-build.
3. Geef daarna steeds precies één implementatieprompt.
4. Bekijk na iedere stap de wijziging en het verificatierapport.
5. Ga pas door wanneer de build slaagt en de genoemde viewports zijn gecontroleerd.
6. Laat Claude niet vooruitlopen op latere prompts.
7. Laat Claude niet committen, pushen of deployen.

Start je tussentijds een nieuwe Claude-sessie? Geef dan opnieuw de startprompt en vermeld welke stappen al zijn afgerond. Claude moet vervolgens eerst de huidige code inspecteren en mag afgerond werk niet opnieuw blind uitvoeren.

## Algemene stopvoorwaarden

Ga niet door naar de volgende prompt wanneer:

- `npm run build` faalt;
- er horizontale pagina-overflow is ontstaan;
- bestaand menu-, dropdown-, carousel-, FAQ- of formuliergedrag niet meer werkt;
- Claude wijzigingen buiten de beschreven scope heeft gemaakt;
- er onverklaarde bestaande gebruikerswijzigingen zijn overschreven;
- de mobiele layout op 320–430px aantoonbaar is verslechterd.

Gebruik na iedere stap bij voorkeur `git diff` om de wijziging rustig te beoordelen. Een commit is niet nodig voor deze werkwijze.

---

## Startprompt — context en nulmeting

Stuur deze prompt één keer aan het begin van de sessie. Deze stap mag nog geen broncode wijzigen.

```text
Je werkt in de repository van Timmerfabriek Sint Nyk als senior front-end engineer met sterke UI/UX- en accessibilitykennis.

Voer eerst uitsluitend een read-only nulmeting uit. Wijzig nog geen bestanden.

1. Lees AGENTS.md volledig en volg deze instructies gedurende de hele opdracht.
2. Lees docs/RESPONSIVE-UI-UX-AUDIT.md volledig.
3. Inspecteer package.json, src/styles/global.css en de gedeelde Astro-componenten die in de audit worden genoemd.
4. Controleer met git status welke wijzigingen al van de gebruiker aanwezig zijn. Behoud deze en overschrijf niets wat niet bij de gevraagde stap hoort.
5. Voer npm run build uit om de baseline te controleren.
6. Breng kort in kaart waar CSS- en JavaScriptbreakpoints op 48rem, 64rem en 80rem voorkomen.

Projectregels die altijd gelden:

- Astro, semantische HTML, plain CSS en alleen vanilla JavaScript waar nodig.
- Geen Tailwind, framework, UI-library of nieuwe dependency.
- Mobile-first werken.
- Gebruik de bestaande .container en bestaande design tokens.
- Geen clamp() of viewport-fontsizes.
- Maak geen aparte mobile- en desktopcomponenten als één responsief component volstaat.
- Behoud routes, content, functionaliteit, toegankelijkheid en visuele identiteit.
- Commit, push en deploy nooit.
- Voer na iedere latere codewijziging minimaal npm run build uit en controleer relevante mobiele en desktopviewports visueel.
- Implementeer per volgende prompt alleen de expliciet genoemde scope. Loop niet vooruit op latere stappen.

Rapporteer nu alleen:

- of de baseline-build slaagt;
- welke bestaande gewijzigde of nieuwe bestanden je aantrof;
- de relevante breakpointlocaties;
- eventuele blokkades of risico's voor de geplande implementatie;
- dat je klaar bent voor prompt 1.
```

### Controle na de startprompt

- [ ] Claude heeft geen bestanden aangepast.
- [ ] De baseline-build slaagt, of een reeds bestaand probleem is duidelijk beschreven.
- [ ] Bestaande gebruikerswijzigingen zijn benoemd.
- [ ] Claude heeft bevestigd niet te committen of deployen.

---

## Prompt 1 — responsive fundament: typografie en spacingtoken

```text
Implementeer nu uitsluitend het responsive fundament in src/styles/global.css.

Doel:

- De huidige mobiele typografie blijft gelden onder 64rem.
- Van 64rem tot en met 79.99rem komt een compacte tussenstap.
- De huidige volledige desktoptypografie start pas vanaf 80rem.
- Er komt één semantische globale token voor reguliere verticale hoofdsectiespacing.

Typografieschaal:

- Onder 64rem:
  - H1 40/48px
  - H2 36/44px
  - H3 28/36px
  - H4 24/32px
  - H5 20/28px
- Van 64rem tot 79.99rem:
  - H1 48/56px
  - H2 40/48px
  - H3 28/36px
  - H4 24/32px
  - H5 20/28px
- Vanaf 80rem:
  - H1 60/68px
  - H2 48/56px
  - H3 36/44px
  - H4 28/36px
  - H5 22/30px

Spacingtoken:

- Basis: 4rem.
- Vanaf 64rem: 5rem.
- Vanaf 80rem: 6rem.
- Kies een duidelijke semantische custom-propertynaam die later door hoofdsecties kan worden gebruikt.
- Migreer in deze stap nog niet alle componenten naar de token; dat gebeurt gecontroleerd in latere prompts.

Randvoorwaarden:

- Hergebruik de bestaande primitieve font- en line-heighttokens.
- Voeg alleen ontbrekende primitives toe als dat echt nodig is.
- Gebruik geen clamp().
- Verander bodytekst, kleuren, fonts, containerregels of component-CSS niet.
- Houd media queries mobile-first en logisch geordend.

Verificatie:

1. Voer npm run build uit.
2. Controleer via computed styles H1 en H2 op 1023, 1024, 1279 en 1280px.
3. Controleer dat 320–430px visueel ongewijzigd blijft.

Rapporteer:

- aangepaste bestanden;
- de gekozen tokennaam en waarden;
- gemeten H1/H2 computed values op de vier grensbreedtes;
- buildresultaat;
- eventuele aandachtspunten.

Stop daarna. Voer nog geen header- of componentwijzigingen uit.
```

### Acceptatiecriteria prompt 1

- [x] H1 is 48/56px op 1024–1279px.
- [x] H2 is 40/48px op 1024–1279px.
- [x] De volledige desktoptypografie begint op 1280px.
- [x] De spacingtoken heeft 64/80/96px als drie vaste states.
- [x] De build slaagt.

---

## Prompt 2 — P0: header en navigatie

```text
Implementeer nu uitsluitend de responsive headercorrectie in src/components/Header.astro. Inspecteer NavDropdown.astro alleen als dat nodig is om bestaand gedrag te behouden.

Probleem:

De volledige desktopnavigatie wordt nu vanaf 64rem geactiveerd en overlapt het logo tussen ongeveer 1024 en 1155px. De desktopcompositie voelt pas vanaf 1280px comfortabel.

Gewenst gedrag:

- Onder 80rem blijft de bestaande compacte header met hamburgermenu actief.
- Vanaf 80rem wordt de volledige utility- en desktopnavigatie actief.
- Gebruik exact hetzelfde breakpoint in CSS en JavaScript matchMedia.
- De bestaande fullscreen compacte navigatie moet worden hergebruikt.
- Verklein logo, navigatietekst of gaps niet om de desktopheader alsnog in 1024px te persen.
- Desktopdropdowns blijven vanaf 80rem op hover, klik en toetsenbord bedienbaar.

Behoud volledig:

- scroll-lock bij een geopend compact menu;
- openen en sluiten via de bestaande controls;
- sluiten met Escape;
- focusmanagement/focus trap;
- aria-expanded, aria-controls, hidden-state en aria-current;
- zichtbare focus-visible states;
- reduced-motiongedrag;
- bestaande navigatiedata en routes.

Verificatie:

1. Voer npm run build uit.
2. Controleer de header visueel op 320, 430, 768, 1024, 1180, 1279, 1280 en 1440px.
3. Controleer op 1024 en 1180px dat logo, menucontrol en overige headerinhoud niet overlappen.
4. Test het compacte menu met muis en toetsenbord op 430 en 1180px.
5. Test desktopdropdowns met muis en toetsenbord op 1280 en 1440px.
6. Controleer dat CSS- en JavaScriptmediaqueries exact gelijk zijn.

Rapporteer aangepaste bestanden, het gebruikte breakpoint, de uitgevoerde interactietests en het buildresultaat. Stop daarna; wijzig nog geen andere componenten.
```

### Acceptatiecriteria prompt 2

- [x] Compacte header blijft actief tot en met 1279px.
- [x] Desktopheader begint bij 1280px.
- [x] Geen logo-/navigatieoverlap.
- [x] Menu en dropdowns blijven toegankelijk bedienbaar.
- [x] De build slaagt.

---

## Prompt 3 — CTA-breedtes op grote mobiel en tablet

```text
Normaliseer nu uitsluitend de responsive breedtes en layout van CTA-groepen. Verander Button.astro alleen als een echte basisbug wordt aangetroffen; het huidige probleem zit naar verwachting in lokale componentoverrides.

Inspecteer alle relevante lokale width: 100%-overrides, in elk geval in:

- Hero.astro
- WorkflowSection.astro
- ProjectsSection.astro
- AboutSection.astro
- ContractorSection.astro
- Footer.astro
- ProductDetailHero.astro
- eventuele vergelijkbare sectieheaders

Gewenste regels:

- Op kleine mobiel mogen hero- en sectieheader-CTA's full-width blijven.
- Vanaf 36rem worden hero-CTA's en vergelijkbare CTA-groepen inhoudsbreed en mogen ze wrappen.
- Vanaf 48rem zijn workflow-, projecten- en footerheader-CTA's geen volledige horizontale balk meer.
- Formulier-submit in ContactSection blijft full-width.
- CTA's in doelbewust smalle donkere contactcards mogen full-width blijven.
- Verklein buttontekst niet en verander de bestaande buttonstijl, hoogte, padding, iconen of focusstate niet.
- Als twee hero-CTA's niet naast elkaar passen, moeten ze als twee inhoudsbrede regels wrappen; ze mogen niet opnieuw 100% breed worden.

Werk mobile-first en voeg alleen media queries toe met een duidelijke ontwerpreden. Voer nog geen grid-, herohoogte- of typografiewijzigingen uit.

Verificatie:

1. Voer npm run build uit.
2. Controleer homepagehero en productdetailhero op 320, 430, 600, 768 en 1024px.
3. Controleer workflow-, projecten- en footer-CTA's op 600, 768 en 900px.
4. Controleer ContactSection op 320 en 768px en bevestig dat de submitbutton full-width blijft.
5. Controleer dat lange CTA-teksten niet afgekapt worden en geen horizontale overflow veroorzaken.

Rapporteer per aangepast component welk full-widthgedrag is behouden of gewijzigd, plus build- en visueel testresultaat. Stop daarna.
```

### Acceptatiecriteria prompt 3

- [x] CTA's zijn vanaf 576px niet onnodig paginabreed.
- [x] CTA-groepen wrappen zonder overflow.
- [x] Contact-submit blijft full-width.
- [x] De basisbuttonstijl is niet onnodig gewijzigd.
- [x] De build slaagt.

---

## Prompt 4 — USP, producten, workflow en footer

```text
Implementeer nu de tablet- en desktopgrids voor de volgende gedeelde componenten:

- UspSection.astro
- ProductsSection.astro
- ProductCard.astro, uitsluitend als het sizes-attribuut of kaartgedrag voor deze gridstap moet worden aangepast
- WorkflowSection.astro
- Footer.astro

Gewenste responsive states:

UspSection:

- Mobiel: één kolom.
- Vanaf 48rem: 2x2-grid.
- Vanaf 80rem: vier items op één rij.

ProductsSection:

- Mobiel: één statische kolom.
- Vanaf 48rem tot 79.99rem: twee statische kolommen.
- Vanaf 80rem: de bestaande driekaartscarousel.
- Verplaats zowel de CSS-omslag als de JavaScript matchMedia voor desktop/carousel naar 80rem.
- Behoud carouselcontrols, keyboardgedrag, reduced motion en correcte disabled-state.
- Werk het ProductCard sizes-attribuut bij voor de tweekoloms tabletstate als dat nog niet klopt.

WorkflowSection:

- Mobiel: één kolom.
- Vanaf 48rem tot 79.99rem: twee kolommen.
- De derde kaart staat op een tweede rij en heeft dezelfde kolombreedte als de andere kaarten; centreer deze zorgvuldig zonder absolute positioning.
- Vanaf 80rem: drie gelijke kolommen.
- Verwijder of verlaag de vaste minimumhoogte in de tabletstate; laat content en grid-stretch het werk doen.
- De bestaande volledige desktop-minimumhoogte mag alleen blijven als die vanaf 80rem nog functioneel nodig is.

Footer:

- Mobiel: één kolom.
- Vanaf 48rem: 2x2 hoofdgrid.
- Vanaf 64rem: CTA-header mag tekst en button naast elkaar tonen als dat past.
- Vanaf 80rem: bestaande vierkoloms hoofdgrid en driedelige bottom row.
- Juridische links moeten op tablet gecontroleerd kunnen wrappen.

Gebruik waar passend de globale hoofdsectiespacingtoken uit prompt 1. Behoud lokale compactere spacing voor USP en footeronderdelen wanneer die bewust afwijkt.

Verificatie:

1. Voer npm run build uit.
2. Test op 430, 768, 820, 900, 1024, 1180, 1279, 1280 en 1440px.
3. Bevestig de states 1 -> 2 -> 3/carousel voor producten.
4. Bevestig 1 -> 2 -> 3 voor workflow.
5. Bevestig 1 -> 2x2 -> 4 voor USP en footer.
6. Test de productcarousel op 1280 en 1440px met controls en toetsenbord.
7. Controleer overal horizontale overflow.

Rapporteer per component de gerealiseerde gridstates, eventuele sizes-wijzigingen, interactietests en buildresultaat. Stop daarna.
```

### Acceptatiecriteria prompt 4

- [ ] Producten zijn twee kolommen op tablet en pas vanaf 1280px een carousel.
- [ ] Workflow gebruikt twee kolommen op tablet en drie vanaf 1280px.
- [ ] USP en footer hebben een echte tabletcompositie.
- [ ] CSS en JavaScript van de carousel gebruiken hetzelfde breakpoint.
- [ ] De build slaagt.

---

## Prompt 5 — recente projecten op de homepage

```text
Implementeer nu uitsluitend de responsive states van de sectie Recente projecten.

Relevante bestanden:

- src/components/ProjectsSection.astro
- src/components/ProjectCard.astro

Gewenst gedrag:

- Mobiel: de bestaande gestapelde verticale compositie.
- Vanaf 48rem tot 79.99rem:
  - twee verticale projectkaarten naast elkaar;
  - de werkplaatsafbeelding daaronder over de volledige gridbreedte;
  - beeldhoogte ongeveer 18–22rem, passend bij de crop;
  - sectie-CTA inhoudsbreed en logisch rechts uitgelijnd waar de header daar ruimte voor heeft.
- Vanaf 80rem:
  - activeer pas de bestaande asymmetrische mosaic;
  - activeer pas hier de horizontale ProjectCard-variant.

Randvoorwaarden:

- Hergebruik dezelfde markup en componenten.
- Gebruik Grid/Flexbox en gap; geen absolute positioning voor de hoofdlay-out.
- Behoud kaartlinks, hover/focus, semantiek en content.
- Gebruik de globale hoofdsectiespacingtoken waar passend.
- Werk sizes-attributen alleen bij als de nieuwe kaart- of beeldbreedtes dat vereisen.

Verificatie:

1. Voer npm run build uit.
2. Controleer op 430, 768, 900, 1024, 1180, 1279, 1280 en 1440px.
3. Controleer dat titels op 1024–1180px niet meer in smalle horizontale kaarthalfjes worden gedwongen.
4. Controleer dat de werkplaatsafbeelding een bruikbare crop houdt.
5. Controleer hover en focus-visible op beide projectkaarten.
6. Controleer horizontale overflow.

Rapporteer de breakpointstates, aangepaste bestanden, beeld/sizes-keuzes en het buildresultaat. Stop daarna.
```

### Acceptatiecriteria prompt 5

- [ ] Tablet toont twee verticale kaarten en een beeld eronder.
- [ ] Mosaic en horizontale kaartvariant beginnen op 1280px.
- [ ] Kaarttitels hebben voldoende ruimte.
- [ ] De build slaagt.

---

## Prompt 6 — homepagehero

```text
Implementeer nu uitsluitend de responsive homepagehero in src/components/Hero.astro.

Behoud de bestaande content, achtergrondstijl, review, buttons, image asset en semantiek.

Gewenste states:

Onder 36rem:

- Bestaande mobiele stapeling.
- Full-width CTA's zoals in de eerdere CTA-stap.
- Beeldhoogte rond de bestaande 17.5rem wanneer dat visueel goed blijft.

Van 36rem tot 47.99rem:

- Gestapelde compositie.
- CTA's inhoudsbreed en wrappend.
- Geen onnodig brede buttonbalken.

Van 48rem tot 63.99rem:

- Gestapelde tekst/beeldcompositie blijft behouden.
- Afbeelding krijgt circa 22–24rem hoogte.
- Tekstbreedte blijft rond de bestaande 38rem.
- Voorkom een extreem ondiepe verhouding breder dan ongeveer 2:1.

Van 64rem tot 79.99rem:

- Compacte split-layout van ongeveer 55/45, bijvoorbeeld 1.1fr/0.9fr.
- Kolomgap ongeveer 3rem.
- De globale tussenliggende H1 van 48/56px blijft van toepassing.
- Beeldhoogte ongeveer 24rem.
- CTA's zijn flex-wrap en inhoudsbreed.

Vanaf 80rem:

- Bestaande volledige desktopidentiteit.
- H1 60/68px via de globale tokens.
- Twee volwaardige kolommen, bestaande 4rem-gap en beeldhoogte van 30rem mogen hier terugkomen.

Werk ook het sizes-attribuut van de heroafbeelding bij als de compacte 55/45-split daardoor een andere verwachte renderbreedte heeft.

Verificatie:

1. Voer npm run build uit.
2. Controleer visueel op 320, 390, 430, 600, 768, 900, 1024, 1180, 1279, 1280 en 1440px.
3. Noteer op 1024, 1180 en 1280px het aantal regels van de H1.
4. Controleer de CTA-wrapping en afbeeldingscrop.
5. Controleer dat er geen abrupte banner-naar-portretsprong of horizontale overflow optreedt.

Rapporteer de uiteindelijke gridverhoudingen, gaps, beeldhoogtes, sizes-keuze, H1-regelverdeling en buildresultaat. Stop daarna.
```

### Acceptatiecriteria prompt 6

- [ ] Tabletbeeld is niet langer een ondiepe 280px-banner.
- [ ] 1024–1279px gebruikt een compacte split met 48px-H1.
- [ ] Volledige desktopstate begint op 1280px.
- [ ] Geen abrupte beeldverhoudingssprong.
- [ ] De build slaagt.

---

## Prompt 7 — over-ons- en aannemersoverlays

```text
Implementeer nu de responsive tussenstates van:

- src/components/AboutSection.astro
- src/components/ContractorSection.astro

Doel: op tablet moet voldoende achtergrondbeeld zichtbaar blijven en mogen de overlaykaarten niet vrijwel de volledige beeldbreedte bedekken.

Gewenst gedrag voor beide componenten:

- Mobiel blijft de bestaande compositie bruikbaar.
- Vanaf 48rem:
  - overlaykaart max-width ongeveer 40–42rem;
  - interne padding ongeveer 40–48px;
  - CTA inhoudsbreed;
  - lagere tablet-minimumhoogte van ongeveer 36–38rem, of contentgedreven hoogte als dat stabieler is.
- Vanaf 64rem:
  - AboutSection-kaart rechts uitlijnen;
  - ContractorSection-kaart links uitlijnen;
  - de compositie moet bewust achtergrondbeeld naast de kaart tonen.
- Vanaf 80rem:
  - bestaande volledige desktopkaartbreedte, 64px padding en desktop-minimumhoogte mogen terugkomen als ze visueel kloppen.

Randvoorwaarden:

- Gebruik geen absolute positioning voor normale hoofdlay-out.
- Behoud backgrounds, content, kleuren, radii, buttons en toegankelijkheid.
- Gebruik dezelfde responsive logica voor beide secties waar dat zinvol is, maar maak geen onnodige nieuwe abstractie.
- Gebruik de globale hoofdsectiespacingtoken waar passend.

Verificatie:

1. Voer npm run build uit.
2. Controleer beide secties op 430, 768, 900, 1024, 1180, 1279, 1280 en 1440px.
3. Controleer dat achtergrondonderwerpen niet volledig achter de kaart verdwijnen.
4. Controleer tekstwrapping, CTA-breedte en kaartpadding.
5. Controleer dat de secties niet onnodig hoog worden en geen overflow veroorzaken.

Rapporteer per component de max-widths, padding, minimumhoogtes, alignment en het buildresultaat. Stop daarna.
```

### Acceptatiecriteria prompt 7

- [ ] Op tablet blijft zichtbaar achtergrondbeeld naast de kaart over.
- [ ] Kaarten zijn niet paginabreed.
- [ ] About is rechts en Contractor links gecomponeerd in de compacte state.
- [ ] De build slaagt.

---

## Prompt 8 — gedeelde productdetailhero en benefits

```text
Implementeer nu de responsive productdetailcomponenten die door meerdere routes worden hergebruikt.

Relevante bestanden:

- src/components/ProductDetailHero.astro
- src/components/ProductDetailBenefitsSection.astro
- src/components/ProductChoicesSection.astro alleen wanneer controle aantoont dat de bestaande 64rem-tweekolomsstate moet worden afgestemd
- src/components/ProductDetailPage.astro alleen als samenstelling of props dat echt vereisen

ProductDetailHero:

- Onder 64rem blijft de gestapelde compositie.
- Vanaf 48rem krijgt het gestapelde beeld ongeveer 22–24rem hoogte, zodat het geen extreem ondiepe banner is.
- Van 64rem tot 79.99rem:
  - compacte split-layout;
  - gap ongeveer 3rem in plaats van 6rem;
  - globale H1 48/56px;
  - beeldhoogte ongeveer 22–24rem;
  - geef tekst voldoende breedte voor de langste titel en beschrijving.
- Vanaf 80rem activeert de volledige bestaande desktophero.
- Werk het sizes-attribuut af op de werkelijke kolombreedtes.

ProductDetailBenefitsSection:

- Mobiel één kolom.
- Vanaf 48rem twee kolommen.
- Houd twee kolommen in de compacte 64–79.99rem-state.
- Vanaf 80rem drie kolommen.

ProductChoicesSection:

- De bestaande tweekolomsstate vanaf 64rem mag blijven als de kaartbreedtes goed zijn.
- Verander deze component niet zonder concreet visueel probleem.

Controleer minimaal routes met korte én lange titels, waaronder /voor-aannemers/ en meerdere productdetailroutes uit src/data/productDetails.ts.

Verificatie:

1. Voer npm run build uit.
2. Controleer relevante routes op 430, 768, 900, 1024, 1180, 1279, 1280 en 1440px.
3. Controleer langste titel, langste beschrijving, CTA-wrapping en afbeeldingscrop.
4. Bevestig benefits 1 -> 2 -> 3.
5. Controleer horizontale overflow en beeldscherpte.

Rapporteer welke routes zijn getest, de hero-states, benefits-gridstates, eventuele sizes-wijzigingen en het buildresultaat. Stop daarna.
```

### Acceptatiecriteria prompt 8

- [ ] Lange producttitels hebben voldoende ruimte op 1024–1279px.
- [ ] De hero gebruikt daar een compacte split en kleinere gap.
- [ ] Benefits zijn twee kolommen tot 1279px en drie vanaf 1280px.
- [ ] De build slaagt.

---

## Prompt 9 — categoriepagina's en kaartgrids

```text
Implementeer nu uitsluitend de responsive verbeteringen voor de categoriepagina's, met hergebruik van de bestaande componenten en route-data.

Relevante bestanden:

- src/components/CategoryHero.astro
- src/components/WindowTypesSection.astro
- src/components/ProductDetailBenefitsSection.astro alleen als prompt 8 de gedeelde gridstate nog niet volledig afhandelde
- categoriepagina's onder src/pages/kozijnen/ en src/pages/deuren/ alleen wanneer de samenstelling dat noodzakelijk maakt

Gewenst gedrag:

- CategoryHero behoudt de compacte hoogte tot 79.99rem.
- De bestaande volledige desktop-minimumhoogte van ongeveer 20rem begint pas vanaf 80rem.
- Categorie-/windowtypekaarten:
  - mobiel één kolom waar dat nu de bedoelde basis is;
  - vanaf 48rem twee kolommen;
  - twee kolommen blijven actief van 64rem tot 79.99rem;
  - vanaf 80rem drie kolommen waar het ontwerp dat vraagt.
- Kaarten moeten in de tussenstate bij voorkeur minimaal ongeveer 320px breed blijven.
- De lange CTA "Bespreek de mogelijkheden" mag gecontroleerd wrappen, maar niet door een onnodig smalle driekolomskaart op 1024px.
- Gebruik de bestaande gerichte afbeeldingsoverschrijvingen van WindowTypesSection; hardcode geen productnamen in het component.

Randvoorwaarden:

- Voeg geen nieuwe routes of voorbeeldcontent toe.
- Behoud de bestaande categoriegegevens, images, cards en semantiek.
- Vermijd route-specifieke duplicatie van component-CSS.
- Gebruik de globale hoofdsectiespacingtoken waar passend.

Verificatie:

1. Voer npm run build uit.
2. Controleer minimaal /kozijnen/ en /deuren/ op 430, 768, 820, 900, 1024, 1180, 1279, 1280 en 1440px.
3. Controleer kaartbreedtes en de lange mogelijkheden-CTA.
4. Controleer dat images en route-specifieke overrides correct blijven.
5. Controleer horizontale overflow.

Rapporteer de geteste routes, gridstates, gemeten kaartbreedtes op 1024 en 1280px en het buildresultaat. Stop daarna.
```

### Acceptatiecriteria prompt 9

- [ ] Categoriekaarten blijven twee kolommen op 1024–1279px.
- [ ] Drie kolommen beginnen op 1280px.
- [ ] CategoryHero maakt geen hoogtesprong op 1024px.
- [ ] Route-specifieke beelden blijven correct.
- [ ] De build slaagt.

---

## Prompt 10 — FAQ, contact en over-ons-story

```text
Implementeer nu de compacte 64–79.99rem-states voor:

- src/components/FaqSection.astro
- src/components/ContactSection.astro
- src/components/AboutStorySection.astro

FaqSection:

- Onder 64rem blijft de sectie gestapeld.
- Van 64rem tot 79.99rem: ongeveer een 5/7-split met circa 3rem gap.
- De globale H2 van 40/48px geldt in deze state.
- Vanaf 80rem mag de bestaande volledige desktopverhouding en grotere gap tot ongeveer 6rem terugkomen.
- Herschrijf de FAQ-interactie niet; behoud controls, aria-expanded, hidden-state en reduced motion.

ContactSection:

- Onder 64rem blijft content/formulier gestapeld.
- Van 64rem tot 79.99rem: compacte tweekolomssplit met ongeveer 3rem gap.
- H1 gebruikt de globale 48/56px.
- Voor- en achternaamvelden blijven in deze compacte state onder elkaar als twee naast elkaar te smal worden.
- Vanaf 80rem mogen de naamvelden en volledige desktopgap naar de bestaande desktopstate.
- Formulier-submit blijft full-width.
- Behoud validatie, labels, foutmeldingen, hCaptcha-layout en bestaande formulierlogica.

AboutStorySection:

- Onder 64rem blijft de lange content gestapeld.
- Van 64rem tot 79.99rem: compacte split met ongeveer 3rem gap en tussenliggende typografie.
- Vanaf 80rem: volledige desktopspacing.
- Controleer de afbeeldingscrop; verander het asset niet.

Gebruik de globale hoofdsectiespacingtoken waar passend.

Verificatie:

1. Voer npm run build uit.
2. Test FAQ op 430, 768, 1024, 1180, 1280 en 1440px, inclusief toetsenbordbediening.
3. Test /contact/ op 320, 430, 768, 900, 1024, 1180, 1280 en 1440px.
4. Controleer dat hCaptcha volledig zichtbaar blijft en dat de pagina geen horizontale overflow heeft.
5. Test /over-ons/ op 430, 820, 1024, 1180, 1280 en 1440px.

Rapporteer per component de gridstate, gap, interactie-/formuliertests en het buildresultaat. Stop daarna.
```

### Acceptatiecriteria prompt 10

- [ ] FAQ heeft een bruikbare compacte split zonder onnatuurlijke headingwrap.
- [ ] Contact splitst vanaf 1024px zonder te smalle naamvelden.
- [ ] Contact blijft overflowvrij op 320px.
- [ ] FAQ- en formuliergedrag zijn intact.
- [ ] De build slaagt.

---

## Prompt 11 — projectenoverzicht en projectdetail

```text
Implementeer nu uitsluitend de responsive verbeteringen voor projectenoverzicht en projectdetail.

Relevante bestanden:

- src/components/ProjectsOverview.astro
- src/components/ProjectDetailPage.astro
- src/components/ProjectCard.astro alleen als een gedeelde regel gericht moet worden aangepast zonder de homepage uit prompt 5 te breken
- src/pages/projecten/[id].astro alleen als de datagedreven samenstelling dit werkelijk vereist

ProjectsOverview:

- Mobiel één kolom.
- Vanaf 48rem twee kolommen.
- Omdat er momenteel exact twee projecten zijn, blijft het overzicht ook op desktop twee kolommen.
- Voeg in deze opdracht geen hypothetische driekolomsstate toe.
- Er mag geen lege derde kolom overblijven.

ProjectDetailPage:

- Gebruik de globale tussenliggende H1/H2-schaal van 64–79.99rem.
- Voorkom een abrupte headerhoogtesprong op 1024px.
- Projectafbeelding:
  - behoud een passende mobiele hoogte;
  - gebruik in de compacte state ongeveer 28–32rem;
  - gebruik de bestaande 40rem pas vanaf 80rem.
- Behoud de gecentreerde contentbreedte, leesbaarheid en datagedreven route-opzet.

Randvoorwaarden:

- Wijzig geen projectcontent of Content Collection-data.
- Dupliceer geen detailpagina's per project.
- Behoud cardlinks, images, altteksten, semantiek en focusstates.
- Gebruik de globale hoofdsectiespacingtoken waar passend.

Verificatie:

1. Voer npm run build uit.
2. Controleer /projecten/ op 430, 768, 900, 1024, 1180, 1280 en 1440px.
3. Controleer beide bestaande projectdetailroutes op 430, 768, 900, 1024, 1180, 1280 en 1440px.
4. Noteer kaartbreedtes op het overzicht bij 1024 en 1280px.
5. Controleer headingregels, beeldhoogtes/crops en horizontale overflow.

Rapporteer de gridstate, gemeten kaartbreedtes, detailbeeldhoogtes, geteste routes en het buildresultaat. Stop daarna.
```

### Acceptatiecriteria prompt 11

- [ ] Het overzicht toont nooit een lege derde kolom.
- [ ] Twee projectkaarten houden een comfortabele breedte.
- [ ] Projectdetailheading en -beeld groeien geleidelijk.
- [ ] De datagedreven route blijft intact.
- [ ] De build slaagt.

---

## Prompt 12 — spacing, vaste hoogtes en responsive images afronden

```text
Voer nu een gerichte afrondingsronde uit voor de systemische responsive details. Dit is geen uitnodiging voor een visueel redesign.

1. Hoofdsectiespacing

- Zoek de reguliere hoofdsecties die nog hard van 4rem naar 6rem springen op 64rem.
- Migreer die waar passend naar de globale spacingtoken uit prompt 1: 4rem basis, 5rem vanaf 64rem en 6rem vanaf 80rem.
- Behoud bewust compactere uitzonderingen zoals USP-balken, cardinterieurs en footer-bottom.
- Vermijd nieuwe losse magic values als de semantische token geschikt is.

2. Interne compacte gaps

- Controleer split-layouts op 64–79.99rem.
- Gebruik daar meestal ongeveer 3rem.
- Behoud grotere bestaande desktopgaps alleen vanaf 80rem waar die visueel passend zijn.

3. Vaste minimumhoogtes

- Herbeoordeel resterende vaste hoogtes/min-height in WorkflowSection, AboutSection en ContractorSection.
- Tablet moet contentgedreven of aantoonbaar lager zijn.
- Behoud alleen een vaste desktophoogte wanneer de layout die vanaf 80rem nodig heeft.

4. Responsive images

- Controleer sizes-attributen in minimaal:
  - ProductCard.astro
  - ProjectCard.astro
  - ProductDetailHero.astro
  - Hero.astro
  - ProjectsSection.astro
- Laat sizes aansluiten op de werkelijke states 1 kolom, 2 kolommen, compacte split en volledige desktop.
- Verander geen image assets tenzij er een aantoonbare fout is.
- Behoud betekenisvolle altteksten en expliciete layoutafmetingen.

5. Breakpointconsistentie

- Zoek alle resterende @media (min-width: 64rem) regels.
- Classificeer ze bewust als compacte state of als volledige desktopstate.
- Verplaats alleen regels die aantoonbaar volledige desktopcompositie activeren naar 80rem.
- Controleer alle matchMedia-aanroepen en zorg dat CSS en JavaScript voor hetzelfde gedrag hetzelfde breakpoint gebruiken.
- Voeg geen extra breakpoint toe zonder concrete noodzaak.

Verificatie:

1. Voer npm run check uit.
2. Voer npm run build uit.
3. Controleer homepage, categorie, productdetail, projecten, projectdetail, over ons, voor aannemers en contact minimaal op 430, 768, 1024, 1180, 1280 en 1440px.
4. Controleer per route document.documentElement.scrollWidth === document.documentElement.clientWidth.
5. Controleer crops en geladen responsive imagekeuzes waar browsertools dit toelaten.

Rapporteer alle aangepaste bestanden gegroepeerd onder spacing, hoogtes, images en breakpointconsistentie. Vermeld check- en buildresultaat en stop daarna.
```

### Acceptatiecriteria prompt 12

- [ ] Reguliere secties volgen een geleidelijke 64/80/96px-spacing.
- [ ] Volledige desktopregels zijn niet onbedoeld op 64rem achtergebleven.
- [ ] `sizes` sluit aan op de nieuwe layouts.
- [ ] Check en build slagen.

---

## Prompt 13 — volledige responsive QA en gerichte regressiefixes

```text
Voer nu de volledige responsive eindcontrole uit op de reeds geïmplementeerde wijzigingen. Lees eerst opnieuw de QA-checklist in docs/RESPONSIVE-UI-UX-AUDIT.md.

Je mag in deze stap alleen concrete regressies of gemiste acceptatiecriteria binnen de bestaande audit-scope corrigeren. Voeg geen nieuwe features, animaties, routes, content, dependencies of redesignideeën toe.

Testviewports:

- 320, 375, 390 en 430px
- 600px
- 768, 820 en 900px
- 1024, 1050, 1100 en 1180px
- 1279 en 1280px
- 1440 en 1600px

Test minimaal deze paginatypes:

- homepage: /
- categorie: /kozijnen/ en /deuren/
- meerdere productdetails met korte en lange titel
- projectenoverzicht: /projecten/
- beide projectdetails
- /over-ons/
- /voor-aannemers/
- /contact/
- /privacyverklaring/
- /404/ of de lokaal beschikbare 404-route

Controleer systematisch:

Header en navigatie:

- compact menu tot 1279px;
- desktopnavigatie vanaf 1280px;
- geen overlap;
- menu, Escape, focus, scroll-lock, dropdowns en aria-expanded.

Layouts:

- producten 1 -> 2 -> 3/carousel;
- workflow 1 -> 2 -> 3;
- USP 1 -> 2x2 -> 4;
- homepageprojecten stack -> tabletgrid -> mosaic;
- footer 1 -> 2 -> 4;
- benefits 1 -> 2 -> 3;
- projectenoverzicht zonder lege derde kolom.

Typografie en CTA's:

- H1/H2 gebruiken de drie vaste schalen op de juiste grenzen;
- headings wrappen gecontroleerd;
- CTA's zijn niet onnodig paginabreed vanaf 576px;
- formulier-submit blijft full-width;
- lange labels worden niet afgeknipt.

Images en overflow:

- geen abrupte banner-naar-portretsprongen;
- relevante crops op 430, 768, 1024, 1180 en 1440px;
- geen horizontale documentoverflow;
- controleer lange e-mailadressen, SVG's, dropdowns en buttons.

Toegankelijkheid en interactie:

- zichtbare focus-visible states;
- hover is niet noodzakelijk om content te begrijpen;
- reduced motion blijft gerespecteerd;
- carousel, FAQ en formulieren blijven met toetsenbord bruikbaar;
- labels en aria-states blijven correct.

Na eventuele gerichte fixes:

1. Voer npm run validate uit.
2. Herhaal de relevante visuele tests voor iedere gecorrigeerde regressie.
3. Controleer git diff en bevestig dat alleen audit-gerelateerde bestanden zijn gewijzigd.
4. Commit, push en deploy niet.

Lever een eindrapport met:

- alle aangepaste bestanden, gegroepeerd per componentgroep;
- alle uitgevoerde commando's en resultaten;
- een compacte viewport-/route-testmatrix;
- gevonden en opgeloste regressies;
- eventuele resterende afwijkingen met prioriteit en reden;
- expliciete bevestiging dat niet is gecommit, gepusht of gedeployed.

Stop na dit eindrapport.
```

### Eindacceptatie

- [ ] `npm run validate` slaagt.
- [ ] Alle genoemde paginatypes zijn visueel gecontroleerd.
- [ ] Geen horizontale documentoverflow op de testviewports.
- [ ] Header en gedeelde interacties werken met muis en toetsenbord.
- [ ] De volledige desktopstate begint consequent op 1280px.
- [ ] Mobiel op 320–430px is niet verslechterd.
- [ ] Er is niet gecommit, gepusht of gedeployed.

---

## Kort voortgangsoverzicht

Vink dit zelf af terwijl je de prompts aan Claude geeft:

- [x] Startprompt — nulmeting
- [x] Prompt 1 — typografie en spacingtoken
- [x] Prompt 2 — header
- [x] Prompt 3 — CTA-breedtes
- [ ] Prompt 4 — USP, producten, workflow en footer
- [ ] Prompt 5 — homepageprojecten
- [ ] Prompt 6 — homepagehero
- [ ] Prompt 7 — overlays
- [ ] Prompt 8 — productdetailhero en benefits
- [ ] Prompt 9 — categoriepagina's
- [ ] Prompt 10 — FAQ, contact en over-ons-story
- [ ] Prompt 11 — projectenoverzicht en projectdetail
- [ ] Prompt 12 — spacing, hoogtes en images
- [ ] Prompt 13 — volledige QA

## Praktische tip bij een fout

Wanneer een stap niet slaagt, geef Claude niet direct de volgende prompt. Geef in plaats daarvan:

```text
Los uitsluitend de fouten of regressies uit je vorige stap op. Gebruik het huidige git diff als scope. Verklaar eerst kort de oorzaak, implementeer daarna de kleinste passende correctie, voer opnieuw de eerder gevraagde build- en visuele controles uit en rapporteer het resultaat. Loop niet vooruit op de volgende implementatieprompt. Commit, push en deploy niet.
```

# Responsive UI/UX-audit

**Website:** <https://timmerfabrieksintnyk.nl>  
**Datum:** 18 augustus 2026  
**Doel:** implementatiespecificatie voor het verbeteren van de volledige responsive ervaring, met extra aandacht voor 768–1199px.  
**Status:** onderzoeks- en specificatiefase; tijdens de audit is geen broncode gewijzigd.

## 1. Executive summary

De website is op mobiel tot circa 430px en op desktop vanaf circa 1280px visueel grotendeels coherent. Het zwakke gebied is 768–1199px.

De hoofdoorzaak is dat de responsive architectuur feitelijk uit twee toestanden bestaat:

- Onder 1024px blijft vrijwel alles mobiel en éénkoloms.
- Vanaf exact 1024px springen navigatie, typografie, grids, split-layouts, spacing en footer tegelijk naar de volledige desktopvariant.

Daardoor ontstaan twee tegenovergestelde problemen:

- Tussen 768 en 1000px zijn pagina’s buitengewoon lang, buttons overdreven breed en afbeeldingen te ondiep.
- Tussen 1024 en circa 1199px zijn navigatie, headings, cards en tekstkolommen juist te krap.

Het ernstigste probleem is de header. De desktopnavigatie overlapt het logo van 1024px tot ongeveer 1155px. Op 1180px past alles technisch slechts met circa 24px vrije ruimte; pas rond 1280px voelt de navigatie werkelijk comfortabel.

De aanbevolen strategie:

- Behoud 48rem als tabletbreakpoint.
- Gebruik 64rem voor een bewuste compacte split-/tablet-landscapestate.
- Voeg 80rem toe als breakpoint voor de volledige desktopcompositie.
- Laat de compacte navigatie actief tot 1280px.
- Voeg een tussenliggende vaste typografieschaal toe tussen 64 en 80rem.
- Introduceer tweekolomsgrids op tablet in plaats van één kolom tot 1023px.
- Activeer drie- en vierkoloms desktopgrids pas wanneer kaarten daadwerkelijk voldoende breed zijn.
- Maak CTA’s vanaf grotere mobiel/tablet inhoudsbreed, behalve waar full-width functioneel gewenst is.

Er is geen sitebrede horizontale scrollbar aangetroffen. De belangrijkste P0 is visuele overlap binnen de header, niet documentoverflow.

Onderzocht: 320, 375, 390, 430, 600, 768, 820, 900, 1000, 1024, 1050, 1100, 1180, 1200, 1280, 1440 en 1600px. Visueel en technisch gecontroleerde paginatypes: homepage, categorieoverzicht, productdetail, projectenoverzicht, projectdetail, over ons, voor aannemers, contact en privacyverklaring.

## 2. Huidige responsive architectuur

### Framework en styling

- Astro 7 met statische directory-output.
- Semantische Astro-componenten met lokaal gescoped plain CSS.
- Geen Tailwind of UI-framework.
- Vanilla JavaScript voor header, dropdowns, carousel, FAQ en formulier.
- TypeScript via Astro strict.
- Configuratie: [`astro.config.mjs`](../astro.config.mjs) en [`tsconfig.json`](../tsconfig.json).

### Breakpoints

Er zijn vrijwel uitsluitend twee CSS-breakpoints:

- `48rem` / 768px: containerpadding en enkele tweekolomsgrids.
- `64rem` / 1024px: bijna alle desktoplayouts en volledige desktoptypografie.

`80rem` komt al voor in `sizes`-attributen, maar wordt niet gebruikt als visueel CSS-breakpoint.

### Containers

De globale `.container` in [`src/styles/global.css`](../src/styles/global.css) is goed opgezet:

- `max-width: 1280px`
- 16px horizontale padding mobiel
- 32px vanaf 768px

Er zijn geen relevante problemen met nested containers of de maximale desktopbreedte.

### Typografie

Onder 1024px:

- H1 40/48px
- H2 36/44px
- H3 28/36px

Vanaf exact 1024px:

- H1 60/68px
- H2 48/56px
- H3 36/44px

Deze grote sprong valt samen met het moment waarop kolommen juist smaller worden.

### Spacing

De meeste hoofdsecties gebruiken:

- 64px verticale padding onder 1024px.
- 96px vanaf 1024px.

Deze waarden zijn in veel componenten afzonderlijk herhaald. De overgang is daardoor systemisch en abrupt.

### Belangrijkste gedeelde componenten

- Header: [`Header.astro`](../src/components/Header.astro)
- Navigatiedropdowns: [`NavDropdown.astro`](../src/components/NavDropdown.astro)
- Homepagehero: [`Hero.astro`](../src/components/Hero.astro)
- Product-/landingspagehero: [`ProductDetailHero.astro`](../src/components/ProductDetailHero.astro)
- CTA’s: [`Button.astro`](../src/components/Button.astro)
- Productkaarten: [`ProductCard.astro`](../src/components/ProductCard.astro)
- Projectkaarten: [`ProjectCard.astro`](../src/components/ProjectCard.astro)
- Footer: [`Footer.astro`](../src/components/Footer.astro)

## 3. Systemische problemen

### 3.1 Binaire responsive architectuur

- **Prioriteit:** P1
- **Viewport:** 768–1279px
- **Visueel probleem:** Tablet is óf een uitgerekte mobiele pagina óf een samengedrukte desktoppagina.
- **Technische oorzaak:** Bijna alle componenten gebruiken hetzelfde `@media (min-width: 64rem)`-moment.
- **Betrokken bestanden:** vrijwel alle componenten; centraal zichtbaar in `src/styles/global.css`.
- **Aanbevolen oplossing:** Gebruik 64rem als compacte tussenstate en 80rem voor de volledige desktopstate.
- **Impact:** Header, heroes, grids, CTA’s, footer, FAQ, contact en sectiespacing.

### 3.2 Typografie wordt groter wanneer kolommen smaller worden

- **Prioriteit:** P1
- **Viewport:** 1024–1279px
- **Probleem:** H1 springt van 40 naar 60px en H2 van 36 naar 48px, terwijl dezelfde breakpoint meerdere éénkolomslayouts in smalle split-layouts omzet.
- **Gevolg:** Vierregelige heroheadings, smalle FAQ-koppen en hoge kaarten.
- **Oorzaak:** De globale desktoptypografie wordt exact op 64rem geactiveerd.
- **Oplossing:** Voeg een vaste tussenstap toe en activeer de huidige volledige desktopwaarden pas op 80rem.

### 3.3 Ontbrekende tabletgrids

- **Prioriteit:** P1
- **Viewport:** 768–1023px
- **Probleem:** Producten, workflow, USP’s, projecten en footer blijven éénkoloms.
- **Meetbaar gevolg:** Op 768px is de productsectie circa 2632px hoog en de workflow circa 1942px.
- **Oorzaak:** Componenten slaan een tweekoloms tabletstate over.
- **Oplossing:** Gebruik vanaf 48rem tweekolomsgrids waar kaartbreedtes van ongeveer 320–450px beschikbaar zijn.

### 3.4 Abrupte spacing-sprong

- **Prioriteit:** P2
- **Viewport:** rond 1024px
- **Probleem:** Vrijwel elke sectie springt tegelijk van 64 naar 96px verticale padding.
- **Oorzaak:** Herhaalde component-CSS zonder semantische spacingtoken.
- **Oplossing:** Introduceer een globale hoofdsectietoken: 64px basis, ongeveer 80px in de compacte 64–79.99rem-state en 96px vanaf 80rem.
- **Impact:** De visuele lengte en ritmiek van alle templates.

### 3.5 Full-width CTA’s blijven te lang actief

- **Prioriteit:** P1
- **Viewport:** circa 576–1023px
- **Probleem:** Buttons van 550–920px breed ogen als balken, onder meer in hero, workflow, projecten en footer.
- **Oorzaak:** Componenten zetten buttons standaard op `width: 100%` en herstellen dit pas op 64rem.
- **Oplossing:** Beperk full-width gedrag tot kleine mobiel. Schakel vanaf circa 36rem over naar `fit-content` of flex-wrap, behalve formulier-submit en doelbewust card-brede CTA’s.

### 3.6 Vaste hoogtes veranderen de afbeeldingsverhouding te sterk

- **Prioriteit:** P2
- **Viewport:** 600–1100px
- **Probleem:** De homepagehero-afbeelding is op 900px circa 821×280px, maar op 1024px ineens circa 440×480px.
- **Oorzaak:** Een vaste hoogte van 17.5rem onder 64rem en 30rem erboven in `Hero.astro`.
- **Oplossing:** Voeg een tabletbeeldhoogte en compacte split-state toe; voorkom een sprong van brede banner naar bijna-portret.

### 3.7 Footer mist een tabletcompositie

- **Prioriteit:** P1
- **Viewport:** 768–1023px
- **Probleem:** De footer blijft éénkoloms en wordt ruim 1300px hoog; op 1024px springt hij naar vier smalle kolommen en circa 509px.
- **Oorzaak:** Alleen één kolom en vier kolommen in `Footer.astro`.
- **Oplossing:** Twee kolommen vanaf 48rem; vier kolommen pas vanaf 80rem.

## 4. Header/navigatie

### Gemeten ruimtebehoefte

Bij de huidige desktopheader:

- Logo: circa 259px breed; het 216×40-logo wordt op 48px hoogte gerenderd.
- Navigatie-items samen: circa 569px.
- CTA: circa 224px.
- Twee hoofdgaps: 48px.
- Totale minimale behoefte: circa 1100px contentbreedte.

Op 1024px is binnen de container slechts circa 945px beschikbaar. De flexibele navigatie krimpt visueel, maar haar kinderen behouden hun natuurlijke breedte.

Resultaat:

- 1024px: eerste navigatie-item begint 131.5px binnen het logo.
- 1100px: circa 55.5px overlap.
- 1150px: nog circa 5.5px overlap.
- 1180px: slechts circa 24.5px vrije ruimte tussen logo en navigatie.
- 1280px: circa 124.5px vrije ruimte; hier voelt de compositie overtuigend.

De CSS- en JavaScriptbreakpoints staan beide op 64rem in `Header.astro`.

![Header- en hero-overlap op 1024px](/Users/luuk/.codex/visualizations/2026/08/18/01a01529-5ddd-7210-adba-8162c2cf0582/homepage-1024-header-hero.png)

### Aanbevolen breakpointstrategie

- Compacte header met bestaand hamburgermenu: onder 80rem.
- Volledige utility- en desktopnavigatie: vanaf 80rem.
- Pas dezelfde media query toe in CSS én `matchMedia`.
- Verklein logo, lettertype of navigatiegaps niet om de desktopvariant kunstmatig in 1024px te persen.
- De huidige fullscreen mobiele navigatie kan worden hergebruikt. Deze is op 820px getest en heeft correcte scroll-lock, `aria-expanded` en viewportvulling.
- Houd dropdowns van 22rem alleen in de echte desktopstate.

**Prioriteit:** P0 voor 1024–1155px, P1 voor de visueel gepropte 1156–1199px-range.

## 5. Hero

### Mobiel: 320–575px

De bestaande compositie is grotendeels bruikbaar:

- H1 wordt op 320px vier regels en op 430px drie regels.
- Buttons zijn full-width en logisch stapelbaar.
- De afbeelding van 280px hoog heeft op 390–430px een bruikbare verhouding.
- Geen horizontale overflow.

![Mobiele referentie op 430px](/Users/luuk/.codex/visualizations/2026/08/18/01a01529-5ddd-7210-adba-8162c2cf0582/homepage-430.png)

### Grote mobiel/tablet portrait: 576–1023px

Problemen:

- Beide CTA’s blijven volledige containerbreedte.
- Op 768px is de hero circa 866px hoog.
- De afbeelding is circa 689×280px en voelt als een ondiepe banner.
- Op 900px groeit zij naar circa 821×280px zonder extra hoogte.
- Tekst, buttons en afbeelding gebruiken dezelfde mobiele stapeling ondanks veel extra horizontale ruimte.

![Huidige tabletstate op 768px](/Users/luuk/.codex/visualizations/2026/08/18/01a01529-5ddd-7210-adba-8162c2cf0582/homepage-768.png)

Aanbevolen gedrag:

- Vanaf circa 36rem: CTA’s in een wrappende rij en inhoudsbreed.
- Vanaf 48rem: behoud de gestapelde tekst/beeldcompositie, maar geef het beeld circa 22–24rem hoogte met een bovengrens.
- Houd tekstbreedte rond de bestaande 38rem.
- Laat de afbeelding de container vullen, maar voorkom een verhouding breder dan ongeveer 2:1.

### Compact landschap/kleine laptop: 1024–1279px

Huidige problemen:

- H1 wordt onmiddellijk 60/68px.
- Op 1024 en 1180px gebruikt de H1 vier regels.
- Op 1024px zijn de tekst- en beeldkolommen slechts circa 440px breed.
- CTA’s passen niet naast elkaar en springen onder elkaar.
- De beeldverhouding verandert abrupt naar circa 440×480px.
- De compositie oogt links tekstzwaar en rechts beeldzwaar.

Aanbevolen gedrag:

- Gebruik vanaf 64rem een compacte split-layout, circa 55/45 of `1.1fr/0.9fr`.
- Houd H1 in deze state op 48/56px.
- Gebruik ongeveer 48px kolomgap in plaats van 64px.
- Beeldhoogte circa 24rem.
- CTA’s blijven `flex-wrap`; inhoudsbreed, niet full-width.
- Schakel pas op 80rem naar de bestaande 60px-H1, gelijke kolommen, 64px gap en 30rem beeldhoogte.

### Desktop: vanaf 1280px

Op 1280px wordt de heading drie regels, de hero circa 640px hoog en de beeld-/tekstbalans overtuigend. De bestaande desktopidentiteit kan hier behouden blijven.

## 6. Homepage — sectie voor sectie

### Hero

Zie hoofdstuk 5.

**Prioriteit:** P1.

### USP-balk

**Probleem**  
Vier USP’s blijven tot 1023px onder elkaar. De sectie is daardoor op 768–1000px 256px hoog en springt op 1024px naar 88px.

**Viewports**  
Vooral 600–1000px.

**Oorzaak**  
De lijst wordt pas op 64rem een horizontale flexrij.

**Aanbevolen gedrag**

- Basis: één kolom.
- Vanaf 48rem: 2×2-grid.
- Vanaf 64 of 80rem: vier items op één rij, afhankelijk van de uiteindelijke tekstbreedte.

**Implementatierichting**  
Pas `UspSection.astro` aan.

**Prioriteit:** P1.

### Producten — “Waar bent u naar op zoek?”

**Probleem**  
Op 768–1000px staan vijf brede kaarten onder elkaar. Vanaf 1024px worden ze plots een driekaartscarousel met kaarten van circa 299px breed.

**Viewports**

- 768px: sectie circa 2632px hoog.
- 1000px: circa 2548px.
- 1024px: circa 934px, maar kaarten zijn smal.

**Oorzaak**  
De track verandert pas op 64rem van grid naar flexcarousel in `ProductsSection.astro`. De JavaScriptmediaquery gebruikt hetzelfde breakpoint.

**Aanbevolen gedrag**

- Eén kolom op mobiel.
- Twee statische kolommen vanaf 48rem.
- Driekaartscarousel pas vanaf 80rem.
- Synchroniseer de JS-mediaquery met het desktopbreakpoint.
- Update het `sizes`-attribuut van `ProductCard.astro` voor de tweekoloms tabletstate.

**Prioriteit:** P1.

### Workflow — “Zo eenvoudig werkt het”

**Probleem**  
Op tablet één extreem brede kaart per rij; op 1024px ineens drie smalle kaarten. De kaarten zijn daar circa 294px breed en 579px hoog. Tekst en checklist wrappen veelvuldig.

**Oorzaak**  
De sectie springt rechtstreeks van één naar drie kolommen. `min-height: 30rem` vergroot de lege ruimte op brede éénkolomskaarten.

![Workflow op 1024px](/Users/luuk/.codex/visualizations/2026/08/18/01a01529-5ddd-7210-adba-8162c2cf0582/homepage-1024-workflow.png)

**Aanbevolen gedrag**

- Eén kolom mobiel.
- Twee kolommen vanaf 48rem.
- Plaats de derde kaart gecentreerd op de tweede rij met dezelfde breedte als de andere kaarten.
- Drie kolommen vanaf 80rem.
- Verwijder of verlaag de vaste minimumhoogte in de tabletstate; laat grid-stretch gelijke hoogtes per rij regelen.
- Maak de header-CTA vanaf grotere mobiel inhoudsbreed.

**Implementatierichting**  
Pas `WorkflowSection.astro` aan.

**Prioriteit:** P1.

### Over-ons-overlay

**Probleem**  
Op 768–1000px vult de groene kaart vrijwel de gehele contentbreedte, waardoor weinig achtergrondbeeld overblijft. Op 1024px springt zij naar 720px breed, 64px padding en 478px hoogte.

**Oorzaak**  
Volle breedte en `min-height: 42.75rem` onder desktop; max-width en 64px cardpadding pas op 64rem.

**Aanbevolen gedrag**

- Vanaf 48rem kaart max-width circa 40–42rem.
- Padding circa 40–48px in de compacte state.
- CTA inhoudsbreed.
- Align de kaart op 64–79.99rem al naar rechts zodat beeld en kaart een duidelijke compositie vormen.
- Gebruik een lagere tablet-minimumhoogte van circa 36–38rem.
- Behoud 45rem/64px voor desktop vanaf 80rem.

**Implementatierichting**  
Pas `AboutSection.astro` aan.

**Prioriteit:** P2.

### Recente projecten

**Probleem**

- Onder 1024px staan beide projecten en de werkplaatsafbeelding volledig onder elkaar.
- Op 1024px wordt onmiddellijk een asymmetrische mosaic geactiveerd; de teksthelften binnen horizontale kaarten worden smal en titels lopen tot vier regels.
- De sprong in sectiehoogte is groot.

**Oorzaak**  
De mosaic en horizontale kaartvariant activeren samen op 64rem in `ProjectsSection.astro` en `ProjectCard.astro`.

**Aanbevolen gedrag**

- Vanaf 48rem twee verticale projectkaarten naast elkaar.
- Werkplaatsafbeelding daaronder, full-width en ongeveer 18–22rem hoog.
- Activeer de bestaande mosaic en horizontale cards pas vanaf 80rem.
- CTA vanaf tablet inhoudsbreed en rechts uitgelijnd.

**Prioriteit:** P1.

### Aannemers-overlay

**Probleem**  
Hetzelfde systeem als de over-ons-sectie: vrijwel full-width overlay op tablet en een abrupte sprong naar een 720px kaart op 1024px.

**Oorzaak**  
Vaste minimumhoogte en desktopregels in `ContractorSection.astro`.

**Aanbevolen gedrag**  
Gebruik dezelfde tussenstate als `AboutSection`, maar links uitgelijnd.

**Prioriteit:** P2.

### FAQ

**Probleem**  
Op 768–1000px is de gestapelde opbouw bruikbaar maar ruim. Op 1024px wordt de linkerkolom slechts circa 354px terwijl H2 naar 48px springt; “Heeft u vragen?” breekt onnatuurlijk en de kolomgap is 96px.

**Oorzaak**  
Volledige desktopverhouding en gap in `FaqSection.astro`.

**Aanbevolen gedrag**

- Gestapeld tot 64rem.
- Compacte 5/7-split vanaf 64rem met circa 48px gap en H2 40px.
- Bestaande 96px gap pas vanaf 80rem.
- De FAQ-interactie zelf functioneert correct en hoeft niet herschreven te worden.

**Prioriteit:** P2.

## 7. Andere pagina’s

### Categoriepagina’s: kozijnen en deuren

Gedeelde componenten: `CategoryHero`, `WindowTypesSection`, `ProductDetailBenefitsSection`, `ContractorSection`, `FaqSection`.

**Problemen**

- `CategoryHero` groeit op 1024px abrupt van circa 214 naar 320px.
- Het productgrid verandert van twee kaarten van circa 355–395px op 820–900px naar drie kaarten van circa 294px op 1024px.
- De lange CTA in de mogelijkhedenkaart wrapt op 1024px.
- De benefits springen van één brede kaart naar drie kaarten van circa 299px.

![Categoriegrid op 1024px](/Users/luuk/.codex/visualizations/2026/08/18/01a01529-5ddd-7210-adba-8162c2cf0582/category-1024-grid.png)

**Implementatierichting**

- Houd de compacte categoryhero tot 80rem; activeer de 20rem desktophoogte daarna.
- Behoud twee productkolommen van 48 tot 79.99rem; drie vanaf 80rem.
- Geef benefits een tweekoloms tabletstate en drie kolommen vanaf 80rem.

**Prioriteit:** P2.

### Productdetailpagina’s

Alle productroutes gebruiken `ProductDetailPage.astro`.

**Problemen**

- De heroafbeelding is op 900px circa 821×280px en op 1024px ineens circa 425×384px.
- De hero gebruikt op 1024px twee kolommen met 96px gap.
- Langere titels en beschrijvingen krijgen onvoldoende tekstbreedte zodra H1 60px wordt.
- Benefits worden op 1024px drie relatief smalle kaarten.

**Aanbevolen gedrag**

- Compacte hero-split vanaf 64rem met 48px gap, H1 48px en beeldhoogte rond 22–24rem.
- Volledige desktophero pas vanaf 80rem.
- `ProductChoicesSection` kan vanaf 64rem twee kolommen blijven gebruiken; die kaartbreedtes zijn goed.
- Benefits twee kolommen in de compacte state, drie vanaf 80rem.

**Prioriteit:** P1 voor de hero, P2 voor benefits.

### Projectenoverzicht

**Probleem**  
Er zijn twee projecten, maar vanaf 1024px wordt een drie-kolomsgrid gebruikt. Daardoor blijft permanent een lege derde kolom staan en worden de twee aanwezige kaarten smaller en hoger.

Op 1024px:

- Kaartbreedte circa 294px.
- Kaarthoogte circa 560px.
- De volledige rechterderde van de grid is leeg.

**Oorzaak**  
`ProjectsOverview.astro` schakelt ongeacht itemaantal naar drie kolommen.

**Aanbevolen gedrag**

- Eén kolom mobiel.
- Twee kolommen vanaf 48rem.
- Blijf twee kolommen gebruiken zolang er exact twee projecten zijn.
- Geen toekomstige drie-kolomsstate toevoegen binnen deze opdracht.

**Prioriteit:** P1.

### Projectdetail

**Probleem**

- De header groeit tussen 900 en 1024px van circa 370 naar 550px.
- De titel springt naar 60px en wordt drie regels.
- De projectafbeelding springt van 544 naar 640px hoogte.

**Aanbevolen gedrag**

- Gebruik de tussenliggende typografieschaal.
- Tabletbeeldhoogte circa 28–32rem.
- Behoud 40rem alleen vanaf 80rem.
- De gecentreerde contentbreedte en tekstlengte zijn verder goed.

**Prioriteit:** P2.

### Over ons

**Bevindingen**

- De productdetailhero erft dezelfde compacte-laptopproblemen.
- De drie highlights zijn op 1024px bruikbaar, al zijn de kaarten circa 294px breed.
- De story-split is op 1024px inhoudelijk goed, maar H2 wordt onnodig groot en drie regels.
- Op 820–900px is stapelen logischer vanwege de lange tekst; deze sectie hoeft niet vroeger te splitten.

**Aanbevolen gedrag**

- Behoud story-stacking onder 64rem.
- Compacte split op 64rem met kleinere typografie en circa 48px gap.
- Volledige desktopspacing vanaf 80rem.

**Prioriteit:** P2.

### Contact

**Problemen**

- Tot 1000px worden content en formulier volledig gestapeld; de sectie is op 768–900px circa 1710px hoog.
- Op 1024px springt de pagina naar twee kolommen van circa 425px met 96px gap.
- De voor- en achternaamvelden worden elk circa 168px breed.

**Positief**

- Geen horizontale overflow op 320px.
- De compacte hCaptcha-iframe past binnen het formulier.
- Inputs en submitbutton hebben bruikbare touchhoogtes.

**Aanbevolen gedrag**

- Compacte tweekoloms pagina vanaf 64rem met circa 48px gap.
- Houd de interne naamvelden in de compacte state eventueel éénkoloms; twee kolommen pas vanaf 80rem.
- H1 48px in plaats van 60px in de compacte state.
- Houd de formulier-submit full-width.

**Prioriteit:** P2.

### Voor aannemers

Deze pagina gebruikt gedeelde `ProductDetailHero`, `ProductsSection`, `WorkflowSection`, `AboutSection` en `FaqSection`.

Op 1024px wordt “Maatwerk voor aannemers” drie regels in een kolom van circa 425px. De gedeelde aanpassingen lossen deze pagina grotendeels automatisch op.

**Prioriteit:** P1 via gedeelde componenten.

### Privacyverklaring en 404

- Geen horizontale overflow aangetroffen.
- De privacycontent gebruikt een goede maximale leesbreedte.
- Alleen de algemene typografie- en spacingaanpassingen zijn relevant.
- Geen templatespecifieke herbouw nodig.

## 8. Typography

Aanbevolen vaste schaal, zonder `clamp()`:

| State | H1 | H2 | H3 | H4 | H5 |
|---|---:|---:|---:|---:|---:|
| Onder 64rem | 40/48 | 36/44 | 28/36 | 24/32 | 20/28 |
| 64–79.99rem | 48/56 | 40/48 | 28/36 | 24/32 | 20/28 |
| Vanaf 80rem | 60/68 | 48/56 | 36/44 | 28/36 | 22/30 |

Aanvullend:

- Behoud bodytekst op 16/28px.
- Behoud bestaande max-widths van 36–48rem voor intro’s.
- Maak headings niet kleiner om structureel verkeerde grids te redden.
- Hero-, project- en categoryheadings profiteren het meest van de 48px tussenstap.
- Cardtitels zijn op mobiel en tablet meestal passend; wijzig die alleen waar een specifieke grid dit vereist.

## 9. Buttons en CTA’s

De basisbutton in `Button.astro` is technisch goed:

- 56px minimumhoogte.
- Voldoende padding.
- Goed icoongap.
- Zichtbare focusstate.
- Geen intrinsieke vaste breedte.

De problemen ontstaan in componentoverrides.

Aanbevolen regels:

- Onder circa 36rem: full-width in heroes en sectieheaders.
- Vanaf circa 36rem: inhoudsbreed en `flex-wrap`.
- Vanaf 48rem: CTA’s in workflow-, projecten- en footerheaders niet langer als volledige balk.
- Formulier-submit blijft full-width.
- CTA’s binnen smalle donkere contactcards mogen full-width blijven.
- Hero-CTA’s staan vanaf grotere mobiel naast elkaar als de totale benodigde breedte van circa 508px beschikbaar is; anders wrappen zij naar twee inhoudsbrede regels.
- Laat buttontekst niet kunstmatig kleiner worden.
- Controleer de lange CTA “Bespreek de mogelijkheden” na het verplaatsen van het driekolomsgrid naar 80rem.

## 10. Images

| Component | Probleem | Aanbeveling |
|---|---|---|
| Homepagehero | 821×280px op 900px, daarna circa 440×480px op 1024px | Tabletbeeldhoogte 22–24rem; compacte split vanaf 64rem |
| Productdetailhero | Dezelfde abrupte brede-banner-naar-portret-sprong | Compacte split en kleinere gap op 64–79.99rem |
| About/Contractor backgrounds | Overlay bedekt op tablet vrijwel het gehele beeld | Tabletkaart max-width en zijdelingse alignment |
| About story | 741×352px op 820px is vrij ondiep | Behoud crop, maar controleer focal point; eventueel circa 24rem hoog |
| Projectdetail | 544px hoog op tablet en 640px vanaf 1024px | Tussenhoogte circa 28–32rem |
| Product/project cards | Vaste 16rem werkt redelijk zodra cardbreedte goed is | Geen wijziging nodig na correcte gridbreakpoints |

Na gridwijzigingen moeten de `sizes`-attributen worden bijgewerkt in:

- `ProductCard.astro`
- `ProjectCard.astro`
- `ProductDetailHero.astro`
- `ProjectsSection.astro`

Dit is vooral performance- en scherptepolish; er zijn geen afbeeldingen aangetroffen die documentoverflow veroorzaken.

## 11. Spacing en containers

### Containers

De bestaande container moet behouden blijven. De 32px tabletpadding levert op 1024px circa 945px bruikbare contentbreedte en is niet de oorzaak van de overlap.

### Verticale spacing

Aanbevolen globale state:

- Basis: 64px.
- Compacte 64–79.99rem-state: circa 80px.
- Desktop vanaf 80rem: 96px.
- Uitzonderingen zoals de USP-balk en highlights behouden hun kleinere lokale spacing.

### Interne gaps

- Compacte split-layouts: ongeveer 48px.
- Volledige desktop: bestaande 64–96px waar visueel passend.
- Cardgrids: 24–32px.
- FAQ op compacte desktop: 48px in plaats van 96px.

### Vaste minimumhoogtes

Herbeoordeel:

- `WorkflowCard`: 30rem/29rem.
- `AboutSection`: 42.75/45rem.
- `ContractorSection`: 42.75/43.625rem.

Gebruik in de tabletstate contentgedreven hoogte of een lagere minimumhoogte.

### Footer

Aanbevolen states:

- Mobiel: één kolom.
- Vanaf 48rem: 2×2 hoofdgrid.
- Vanaf 64rem: CTA-header kan tekst en button naast elkaar tonen.
- Vanaf 80rem: bestaande vierkoloms hoofdgrid en driedelige bottom row.
- Laat juridische links op tablet wrappen of op een tweede rij staan.

## 12. Breakpointstrategie

| Range | Bedoelde state | Hoofdgedrag |
|---|---|---|
| 0–35.99rem | Mobiel | Eén kolom, full-width CTA’s, compacte header |
| 36–47.99rem | Grote mobiel | Inhoudsbrede/wrappende CTA-groepen; verder mobiele structuur |
| 48–63.99rem | Tablet portrait | 32px containerpadding, tweekoloms cardgrids, 2×2 USP/footer |
| 64–79.99rem | Tablet landscape / kleine laptop | Compacte menuheader, tussenliggende typografie, compacte split-layouts, kleinere gaps |
| Vanaf 80rem | Desktop | Volledige navigatie, desktoptypografie, drie-/vierkolomsgrids, carousels en mosaics |
| Vanaf circa 90rem | Grote desktop | Zelfde desktoplayout binnen max-width 1280px |

De nieuwe 80rem-state heeft een concrete technische basis:

- Header past pas rond 1180px minimaal en voelt vanaf 1280px comfortabel.
- Heroheading wordt op 1280px drie regels in plaats van vier.
- Driekoloms cards worden circa 379–384px breed.
- De bestaande image-`sizes` gebruiken 80rem al als relevante desktopgrens.

## 13. Implementatievolgorde voor Claude Sonnet 5

1. Voeg de tussenliggende globale typografiestate en sectiespacingtoken toe.
2. Verplaats de volledige desktoptypografie naar 80rem.
3. Verplaats header-CSS en header-`matchMedia` naar 80rem.
4. Normaliseer CTA-breedtes voor grote mobiel en tablet.
5. Voeg tabletgrids toe voor USP, producten, workflow, homepageprojecten en footer.
6. Verplaats volledige drie-/vierkolomsgrids en productcarousel naar 80rem.
7. Bouw de compacte homepagehero-state.
8. Pas `AboutSection` en `ContractorSection` aan met tablet-max-width en lagere minimumhoogte.
9. Pas FAQ-, contact-, `ProductDetailHero`- en `AboutStory`-gaps aan voor 64–79.99rem.
10. Corrigeer het projectenoverzicht naar twee kolommen.
11. Werk imagehoogtes, crops en `sizes` bij.
12. Voer responsive QA uit op alle gedeelde templates.
13. Run minimaal `npm run build`; voer daarna visuele browsercontrole uit.

## 14. QA-checklist voor Claude

### Viewports

Controleer minimaal:

- 320, 375, 390, 430
- 600
- 768, 820, 900
- 1024, 1050, 1100, 1180
- 1280, 1440, 1600

### Header

- [ ] Compact menu zichtbaar tot en met 1279px.
- [ ] Volledige desktopnavigatie vanaf 1280px.
- [ ] Geen overlap tussen logo, navigatie en CTA.
- [ ] Mobiel menu opent, sluit en scrollt correct.
- [ ] Escape, focus trap, dropdowns en `aria-expanded` blijven werken.
- [ ] CSS- en JavaScriptmediaqueries zijn gelijk.

### Homepage

- [ ] Hero-CTA’s worden geen onnodig brede balken vanaf grote mobiel.
- [ ] Heroafbeelding verandert niet abrupt van banner naar portret.
- [ ] Producten: 1 → 2 → 3/carousel.
- [ ] Workflow: 1 → 2 → 3.
- [ ] USP’s: 1 → 2×2 → 4.
- [ ] Homepageprojecten: gestapeld → twee kaarten → desktopmosaic.
- [ ] Overlaycards laten op tablet voldoende achtergrondbeeld zichtbaar.
- [ ] FAQ-heading wrapt gecontroleerd.
- [ ] Footer: 1 → 2 → 4 kolommen.

### Andere templates

- [ ] Categoriekaarten blijven minstens circa 320px breed.
- [ ] Mogelijkheden-CTA wrapt niet onnodig.
- [ ] Productdetailhero blijft bruikbaar met de langste titel en beschrijving.
- [ ] Projectenoverzicht toont geen lege derde kolom.
- [ ] Projectdetailheading en afbeelding groeien geleidelijk.
- [ ] Contactformulier heeft geen overflow op 320px.
- [ ] hCaptcha blijft volledig zichtbaar.
- [ ] Privacytekst behoudt een leesbare regelbreedte.

### Overflow en beelden

- [ ] `documentElement.scrollWidth === documentElement.clientWidth`.
- [ ] Controleer dropdowns, SVG’s, buttons en lange e-mailadressen.
- [ ] Beoordeel crops op 430, 768, 1024, 1180 en 1440px.
- [ ] Controleer geladen `srcset`/`sizes` na gridwijzigingen.

### Verificatie

- [ ] `npm run build`
- [ ] Eventueel `npm run check`
- [ ] Visuele vergelijking van smalle, tussenliggende en desktopstate.
- [ ] Geen regressie van focusstates of reduced-motiongedrag.

## 15. Prioriteitenlijst

| Prioriteit | Component/sectie | Probleem | Viewport | Aanbevolen oplossing |
|---|---|---|---|---|
| P0 | Header | Navigatie overlapt logo | 1024–1155px | Compacte header tot 80rem |
| P1 | Responsive systeem | Eén gezamenlijke desktopomslag | 768–1279px | 64rem compacte state, 80rem volledige desktop |
| P1 | Typografie | H1/H2 springen te groot | 1024–1279px | Tussenliggende 48/56 en 40/48-schaal |
| P1 | Homepagehero | Vierregelige H1, wrappende CTA’s, abrupte crop | 1024–1279px | Compacte 55/45-split |
| P1 | Producten | Eén kolom op tablet; drie smalle carouselkaarten op 1024px | 768–1279px | Tweecolumn tabletgrid; carousel vanaf 80rem |
| P1 | Workflow | Eén brede of drie te smalle kaarten | 768–1199px | 1 → 2 → 3 kolommen |
| P1 | CTA’s | Buttons worden extreem brede balken | 576–1023px | Inhoudsbreed vanaf grote mobiel |
| P1 | Homepageprojecten | Te lang onder 1024px, te smalle mosaic erboven | 768–1199px | Twee cards + beeld; mosaic vanaf 80rem |
| P1 | Projectenoverzicht | Lege derde kolom met twee projecten | Vanaf 1024px | Permanent tweekoloms desktopgrid |
| P1 | Footer | 1313px hoog op tablet, daarna vier smalle kolommen | 768–1199px | 1 → 2 → 4 kolommen |
| P1 | Voor-aannemers/producthero | Lange titels in smalle 60px-kolom | 1024–1199px | Compacte typografie en kleinere gap |
| P2 | CategoryHero | Onnodige hoogtesprong | 1024–1279px | Desktop-min-height vanaf 80rem |
| P2 | Categorie-/benefitgrids | Drie kaarten van circa 299px | 1024–1199px | Twee kolommen in compacte state |
| P2 | About/Contractor overlays | Kaart bedekt bijna het hele tabletbeeld | 768–1100px | Tablet-max-width en lagere minimumhoogte |
| P2 | FAQ | Smalle linkerkolom en 96px gap | 1024–1199px | Kleinere type en 48px gap |
| P2 | Contact | Abrupte overgang van 1710px stack naar smalle split | 900–1100px | Compacte split en later inner fieldgrid |
| P2 | Projectdetail | Grote sprong in heading- en beeldhoogte | 1024px | Tussenliggende type- en beeldstate |
| P2 | Sectiespacing | 64 → 96px op alle componenten tegelijk | 1024px | Globale driedelige spacingstate |
| P3 | Responsive images | `sizes` sluit na gridwijzigingen niet meer aan | Tablet | `sizes` per nieuwe kolomstate bijwerken |

## Implementatienotities

- Werk eerst systemisch; voorkom losse media queries per incident.
- Houd CSS- en JavaScriptbreakpoints van `Header` en `ProductsSection` synchroon.
- Behoud kleuren, fonts, radii, beeldtaal en buttonstijl.
- Gebruik geen `clamp()`; de bestaande projectafspraken vragen om vaste mobile-, tussen- en desktopwaarden.
- Maak geen aparte mobiele en desktopcomponenten waar één responsive component volstaat.
- Controleer na iedere implementatiefase zowel een smalle mobiele viewport als 768, 1024, 1180 en 1440px.

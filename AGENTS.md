# AGENTS.md

## Projectdoel en scope

Dit is de productiewebsite van Timmerfabriek Sint Nyk. Onderhoud en bouw de site stapsgewijs op basis van expliciete gebruikersvragen, aangeleverde ontwerpen en de bestaande projectdocumentatie. Implementeer alleen gevraagde pagina's, secties en componenten; bedenk geen toekomstige UI of routes vooruit.

Behoud bestaande routes, content, metadata en functionaliteit tenzij de opdracht expliciet om een wijziging vraagt. Deploy, commit of push nooit zonder expliciete toestemming van de gebruiker.

## Bronnen van waarheid

Gebruik voor technische beslissingen in deze volgorde:

1. de actuele gebruikersopdracht;
2. deze `AGENTS.md`;
3. de bestaande code, data en configuratie;
4. de overige documentatie in `docs/`.

Gebruik voor bedrijfsclaims en klantgerichte content in deze volgorde:

1. feiten die de gebruiker in de actuele opdracht bevestigt;
2. `docs/BUSINESS-CONTEXT.md`;
3. bestaande websitecontent, maar alleen wanneer die aantoonbaar geverifieerd is.

Lees vóór het schrijven of inhoudelijk wijzigen van websitecopy minimaal:

- `docs/BUSINESS-CONTEXT.md` voor bevestigde feiten en verboden claims;
- `docs/TONE-OF-VOICE.md` voor schrijfstijl;
- `docs/SEO-CONTENT-RULES.md` voor zoekintentie, metadata en interne links;
- `docs/SITE-STRUCTURE.md` en `docs/KEYWORD-RESEARCH.md` voor pagina-eigenaarschap en cannibalisatie;
- `docs/CONTENT-STATUS.md` voor de actuele paginastatus.

Werk `docs/CONTENT-STATUS.md` bij na een afgeronde inhoudelijke paginawijziging. Verzin nooit bedrijfsgegevens, productspecificaties, garanties, levertijden, certificeringen, werkgebieden, reviews of andere vertrouwensclaims. De reviewscore en het reviewaantal in de hero zijn nog ongeverifieerde placeholderdata en blijven staan tot een expliciete opdracht ze wijzigt of koppelt.

## Tech stack

- Astro 7 met statische output en directory-builds.
- TypeScript via Astro's strict-configuratie.
- Semantische HTML, plain CSS en alleen vanilla JavaScript wanneer interactie dat vereist.
- Lokale fonts via Fontsource: Space Grotesk en DM Sans.
- Astro Content Collections voor projecten en FAQ-items.
- Cloudflare Workers Static Assets via Wrangler.
- Geen Tailwind, React, Vue, Svelte of UI-library.
- Voeg geen dependency toe tenzij die aantoonbaar nodig is en binnen de opdracht valt.

## Belangrijke commando's

```sh
npm run dev
npm run check
npm run build
npm run validate
npm run preview
npm run deploy
```

- Gebruik Node.js 24.x en npm 11.x, zoals vastgelegd in `package.json`.
- Voer na codewijzigingen minimaal `npm run build` uit.
- Voer vóór oplevering van wijzigingen die gegenereerde HTML, scripts, styles of configuratie beïnvloeden `npm run validate` uit. Dit controleert Astro, TypeScript, de productiebuild en de CSP.
- Controleer responsive layout en interactie daarnaast visueel op een smalle mobiele en een relevante desktopbreedte.
- `npm run deploy` start Wrangler; `wrangler.jsonc` voert vooraf automatisch `npm run validate` uit en serveert uitsluitend `dist/`.

## Projectstructuur

- `src/pages/`: expliciete paginaroutes; gebruik alleen dynamische routes voor werkelijk datagedreven pagina's, zoals projectdetails.
- `src/layouts/BaseLayout.astro`: globale documentstructuur, fonts, `global.css`, metadata, canonical URL, structured data, header en footer.
- `src/components/`: kleine Astro-componenten met lokaal gescoped CSS.
- `src/data/navigation.ts`: centrale bron voor hoofd-, utility- en juridische navigatie plus de offerte-CTA.
- `src/data/products.ts`: centrale data voor de productkaarten op de homepage.
- `src/data/productDetails.ts`: centrale inhoud en afbeeldingen voor de herbruikbare productdetailpagina's.
- `src/content.config.ts` en `src/content/`: Content Collections voor projecten en FAQ-items.
- `src/styles/global.css`: design tokens, reset, globale elementstyles en algemene utilities.
- `src/assets/`: lokale SVG-iconen en afbeeldingen; hergebruik deze voordat nieuwe assets worden gemaakt.
- `public/_headers`: beveiligingsheaders en CSP voor Cloudflare.
- `scripts/validate-csp.mjs`: controleert de gegenereerde scripts en styles tegen de CSP.
- `astro.config.mjs`: productie-URL, trailing slashes, directory-output en sitemap.
- `wrangler.jsonc`: Cloudflare-build en Static Assets-configuratie.

## Route- en componentafspraken

- Houd routebestanden dun. Paginaspecifieke routes stellen data samen en gebruiken bestaande sectiecomponenten; kopieer geen volledige herbruikbare pagina-implementatie naar iedere route.
- Gebruik voor productdetailpagina's `ProductDetailPage.astro` met data uit `src/data/productDetails.ts`. Voeg alleen een nieuw detailcomponent toe wanneer de gevraagde structuur werkelijk afwijkt.
- Projectdetailpagina's blijven datagedreven via `src/pages/projecten/[id].astro` en de `projects` Content Collection.
- Gebruik `FaqSection.astro` voor gedeelde FAQ-content uit de `faqs`-collectie of geef gerichte paginaspecifieke items via props door.
- Gebruik `Button.astro` voor CTA-links en buttons. Het component ondersteunt `variant="primary"`, `variant="secondary"` en optioneel `arrow`.
- De CTA's “Offerte aanvragen” en “Contact” verwijzen naar `/contact/`.
- Verander de navbarstructuur of navigatiedata niet voor wijzigingen buiten de header of navigatie.
- Desktopdropdowns openen op hover, maar blijven ook klik- en toetsenbordbedienbaar.
- `WindowTypesSection.astro` ondersteunt gerichte content- en afbeeldingsoverschrijvingen per route. Gebruik props in plaats van productnamen of routecondities in het component hard te coderen.

## Content en SEO

- Schrijf alle klantgerichte websitecontent in natuurlijk Nederlands en spreek de bezoeker consequent aan met `u` en `uw`.
- Gebruik `we` of `wij` voor het bedrijf en noem geen persoonlijke namen op de website.
- Schrijf nuchter, concreet en vakinhoudelijk; vermijd generieke marketingtaal, superlatieven en onbevestigde claims.
- Gebruik geen em dash (`—`) of en dash (`–`) als leesteken in zichtbare tekst, metadata, alt-tekst, labels of andere klantgerichte copy.
- Houd de start van de handelsnaam in februari 2026 gescheiden van de bevestigde ruim 20 jaar vakervaring binnen het team.
- Positioneer productie en levering als kernactiviteiten. Plaatsing is alleen in overleg mogelijk en mag niet als standaardservice of USP worden gepresenteerd.
- Positioneer Noord-Nederland als primair werkgebied; maak er geen absolute grens en geen landelijke standaardclaim van.
- Bewaak per route één duidelijke zoekintentie. Controleer gerelateerde routes en `docs/SITE-STRUCTURE.md` voordat een pagina op een zoekterm wordt geoptimaliseerd.
- Voeg geen locatiepagina's, schema, metadata, redirects of nieuwe indexeerbare routes toe zonder concrete inhoudelijke reden en expliciete scope.
- Iedere reguliere route gebruikt `BaseLayout.astro` met een unieke, beschrijvende title en meta description. Behoud canonical URL's, structured data, trailing slashes en sitemapgedrag tenzij de opdracht dit expliciet wijzigt.

## CSS en design system

- Gebruik eerst bestaande custom properties uit `src/styles/global.css`.
- Voeg alleen een nieuwe semantische token toe als een waarde werkelijk globaal of herbruikbaar is; verspreid geen magic colors.
- Typografie gebruikt `rem`, vaste mobile- en desktopwaarden en geen `clamp()` of viewport-fontsizes.
- Headings gebruiken Space Grotesk. Bodytekst, navigatie, UI en buttons gebruiken DM Sans.
- Werk mobile-first.
- Het primaire desktopbreakpoint is `64rem`; containerpadding wijzigt vanaf `48rem`.
- Gebruik geen extra breakpoint zonder concrete ontwerpreden.
- Gebruik de globale `.container` voor alle uitgelijnde pagina-inhoud:
  - `max-width: 1280px`
  - mobile `padding-inline: 16px`
  - vanaf `48rem` `padding-inline: 32px`
- Achtergronden mogen full-width zijn, maar inhoud hoort binnen `.container`.
- Voeg geen horizontale componentpadding toe wanneer de component al in `.container` staat.
- Houd componentstyles bij voorkeur in het betreffende `.astro`-bestand; zet alleen echte globale regels en tokens in `global.css`.

## Assets en afbeeldingen

- Hergebruik bestaande assets voordat een nieuwe afbeelding of icoon wordt toegevoegd.
- Gebruik voor lokale contentafbeeldingen waar passend `Image` uit `astro:assets`, met betekenisvolle Nederlandse alt-tekst en expliciete layoutafmetingen.
- Importeer SVG's als Astro-component wanneer ze via `currentColor` met een design token moeten meekleuren.
- Decoratieve afbeeldingen krijgen een lege alt-tekst; decoratieve inline iconen krijgen `aria-hidden="true"`.
- Let op exacte hoofdletters in assetimports. De productieomgeving is case-sensitive.

## Responsive en visuele implementatie

- Bouw één responsieve component; maak geen aparte mobile- en desktopvariant tenzij daar een functionele reden voor is.
- Gebruik Grid of Flexbox voor hoofdlay-outs en `gap` voor consistente spacing.
- Gebruik geen absolute positioning voor normale paginalayout.
- Neem aangeleverde maten en waarden exact over. Verzin geen tussenstappen, animaties of styling.
- Controleer na visuele wijzigingen zowel een smalle mobiele viewport als een desktopviewport tegen het aangeleverde ontwerp of referentiebeeld.

## Interactie en toegankelijkheid

- Gebruik JavaScript alleen voor gedrag dat niet betrouwbaar met HTML en CSS kan worden opgelost.
- Gebruik data-attributen voor JavaScript-hooks en classes voor styling.
- Zorg voor zichtbare `:focus-visible`-states die niet uitsluitend op kleur steunen.
- Houd `aria-expanded`, `aria-controls`, `aria-current`, labels, focus en `hidden`- of `inert`-state correct bij interactieve navigatie en formulieren.
- Respecteer `prefers-reduced-motion` bij niet-essentiële beweging en transitions.
- Animeer bij voorkeur alleen `transform`, `opacity` of kleuren en voeg geen micro-interacties toe zonder expliciet verzoek.
- Hover mag nooit nodig zijn om content te begrijpen of bedienen.

## Contactformulier en CSP

- Het contactformulier is actief gekoppeld aan Web3Forms in `ContactSection.astro` en gebruikt botcheck en hCaptcha. Verwijder of vervang de koppeling niet zonder expliciet verzoek.
- De Web3Forms-access key in clientcode is de publieke formulieridentificatie. Voeg nooit andere API-sleutels, wachtwoorden of secrets toe aan browsercode of de repository.
- hCaptcha moet tevens in het Web3Forms-dashboard als verplichte provider zijn geactiveerd. Die externe instelling kan niet vanuit de repository worden afgedwongen.
- Pas `public/_headers` bewust aan wanneer gegenereerde inline scripts of componentstyles veranderen. Voeg alleen hashes toe van legitieme buildoutput.
- Verzwak de CSP niet met `'unsafe-inline'`, brede wildcards of extra externe bronnen om een validatiefout te omzeilen.
- `npm run validate:csp` verwacht eerst een actuele productiebuild en controleert ook dat er geen inline `style`-attributen zijn.

## Wijzigingsdiscipline

- Inspecteer relevante bestaande componenten, tokens, data, content en assets voordat je iets toevoegt of verwijdert.
- Integreer met bestaande styles en patronen in plaats van bestanden blind te vervangen.
- Behoud gebruikerswijzigingen en raak geen ongerelateerde code of documentatie aan.
- Maak geen voorbeeldcontent, routes of componenten buiten de gevraagde scope.
- Controleer `git diff` voor oplevering en rapporteer kort welke bestanden zijn aangepast en welke verificatie is uitgevoerd.

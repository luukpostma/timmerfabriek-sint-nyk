# AGENTS.md

## Projectdoel

Dit is de website van Timmerfabriek Sint Nyk. Bouw de website stapsgewijs op basis van aangeleverde Figma-ontwerpen en referentiebeelden. Implementeer alleen expliciet gevraagde pagina's, secties en componenten; bedenk geen toekomstige UI vooruit.

## Tech stack

- Astro met statische output.
- Semantische HTML, plain CSS en alleen vanilla JavaScript wanneer interactie dat vereist.
- Geen Tailwind, React, Vue, Svelte of UI-library.
- Voeg geen dependency toe tenzij die aantoonbaar nodig is.
- TypeScript gebruikt Astro's strict-configuratie.

## Belangrijke commando's

```sh
npm run dev
npm run build
npm run preview
```

Voer na codewijzigingen minimaal `npm run build` uit. Controleer wijzigingen aan responsive layout of interactie daarnaast visueel op relevante mobile- en desktopbreedtes.

## Projectstructuur

- `src/pages/`: paginaroutes; `index.astro` bevat de homepage en `[...slug].astro` levert tijdelijke placeholderpagina's.
- `src/layouts/BaseLayout.astro`: globale documentstructuur, fonts, `global.css` en de header.
- `src/components/`: kleine Astro-componenten met lokaal gescoped CSS.
- `src/data/navigation.ts`: centrale bron voor navigatielinks, dropdowns, CTA en placeholderroutes.
- `src/styles/global.css`: design tokens, reset, globale elementstyles en algemene utilities.
- `src/assets/`: lokale SVG-iconen en afbeeldingen; hergebruik deze voordat nieuwe assets worden gemaakt.

## Codeprincipes

- Houd componenten eenvoudig en doelgericht; vermijd abstraheren voor hypothetisch hergebruik.
- Gebruik semantische elementen zoals `header`, `nav`, `main`, `section`, headings, paragrafen en lijsten.
- Houd HTML-semantiek en visuele typografie los van elkaar. Een headinglevel bepaalt de documentstructuur; classes/tokens mogen de visuele stijl bepalen.
- Gebruik Astro frontmatter voor imports, props en statische data.
- Gebruik data-attributen voor JavaScript-hooks en classes voor styling.
- Gebruik JavaScript alleen voor gedrag dat niet betrouwbaar met HTML/CSS kan worden opgelost.
- Behoud bestaande routes, content en functionaliteit tenzij de opdracht expliciet om wijziging vraagt.
- De CTA “Offerte aanvragen” en “Contact” verwijzen beide naar `/contact/`.

## CSS en design system

- Gebruik eerst bestaande custom properties uit `src/styles/global.css`.
- Voeg alleen een nieuwe semantische token toe als een waarde werkelijk globaal of herbruikbaar is; verspreid geen magic colors.
- Typography gebruikt `rem`, vaste mobile- en desktopwaarden en geen `clamp()` of viewport-fontsizes.
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

## Bestaande componentafspraken

- Gebruik `Button.astro` voor CTA-links en buttons.
- `Button.astro` ondersteunt `variant="primary"` en `variant="secondary"`, plus optioneel `arrow`.
- Verander navbarstructuur of navigatiedata niet voor wijzigingen buiten de header.
- Desktopdropdowns openen op hover, maar blijven ook klik- en toetsenbordbedienbaar.
- Gebruik voor lokale contentafbeeldingen waar passend `Image` uit `astro:assets`, met betekenisvolle alt-tekst en expliciete layoutafmetingen.
- Importeer SVG's als Astro-component wanneer ze via `currentColor` met een design token moeten meekleuren.

## Responsive en visuele implementatie

- Bouw één responsieve component; maak geen aparte mobile- en desktopvariant tenzij daar een functionele reden voor is.
- Gebruik Grid/Flexbox voor hoofdlay-outs en `gap` voor consistente spacing.
- Gebruik geen absolute positioning voor normale paginalayout.
- Neem aangeleverde maten en waarden exact over. Verzin geen tussenstappen, animaties of styling.
- Vergelijk na visuele wijzigingen zowel een smalle mobiele viewport als een desktopviewport met het aangeleverde ontwerp.

## Interactie en toegankelijkheid

- Zorg voor zichtbare `:focus-visible` states die niet uitsluitend op kleur steunen.
- Houd `aria-expanded`, `aria-controls`, `aria-current`, labels en `hidden`-state correct bij interactieve navigatie.
- Decoratieve iconen krijgen `aria-hidden="true"` en een lege alt wanneer ze als `<img>` worden gebruikt.
- Respecteer `prefers-reduced-motion` bij niet-essentiële beweging en transitions.
- Gebruik subtiele transitions en animeer bij voorkeur alleen `transform`, `opacity` of kleuren.
- Hover mag nooit nodig zijn om content te begrijpen of bedienen.

## Wijzigingsdiscipline

- Inspecteer relevante bestaande componenten, tokens, data en assets voordat je iets toevoegt of verwijdert.
- Integreer met bestaande styles in plaats van bestanden blind te vervangen.
- Behoud gebruikerswijzigingen en raak geen ongerelateerde code aan.
- Maak geen voorbeeldcontent, nieuwe routes of componenten buiten de gevraagde scope.
- Voeg geen animaties of micro-interactions toe zonder expliciet verzoek.
- Rapporteer na afloop kort welke bestanden zijn aangepast en welke verificatie is uitgevoerd.

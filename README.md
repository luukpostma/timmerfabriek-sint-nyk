# Timmerfabriek Sint Nyk

Responsive website voor Timmerfabriek Sint Nyk, stapsgewijs opgebouwd vanuit een bestaand Figma-ontwerp. De website gebruikt statische Astro-output en wordt component voor component uitgebreid.

## Tech stack

- [Astro](https://astro.build/)
- Semantische HTML
- Plain CSS
- Vanilla JavaScript
- DM Sans en Space Grotesk via Fontsource
- Astro Content Collections voor projecten en veelgestelde vragen

Het project gebruikt geen CSS-framework, JavaScript-framework of UI-library.

## Lokaal starten

Installeer eerst de dependencies:

```sh
npm install
```

Start vervolgens de lokale ontwikkelserver:

```sh
npm run dev
```

Open daarna de URL die Astro in de terminal toont, standaard `http://localhost:4321`.

## Beschikbare scripts

| Commando | Omschrijving |
| --- | --- |
| `npm run dev` | Start de lokale ontwikkelserver |
| `npm run build` | Maakt een productiebuild in `dist/` |
| `npm run preview` | Toont de productiebuild lokaal |

## Projectstructuur

```text
src/
├── assets/           Afbeeldingen, logo en SVG-iconen
├── components/       Astro-componenten en paginasecties
├── content/
│   ├── faqs/         Veelgestelde vragen in Markdown
│   └── projects/     Projecten in Markdown
├── data/             Navigatie- en productdata
├── layouts/          Globale documentstructuur
├── pages/            Astro-routes
├── styles/           Design tokens en globale styles
└── content.config.ts Schema's voor de Content Collections
```

## Huidige pagina's

- Homepage met hero, USP's, producten, werkwijze, over ons, projecten, aannemers en FAQ
- Kozijnenoverzicht met onderliggende productroutes
- Deurenoverzicht met onderliggende productroutes
- Projectenoverzicht en statisch gegenereerde projectdetailpagina's
- Tijdelijke routes voor de overige navigatie-items

De globale header en footer worden vanuit `src/layouts/BaseLayout.astro` geladen.

## Styling en responsive basis

De website wordt mobile-first gebouwd. Globale kleuren, vaste typografietokens, resetregels en de algemene `.container` staan in `src/styles/global.css`.

- Maximale containerbreedte: `1280px`
- Mobile containerpadding: `16px`
- Containerpadding vanaf `48rem`: `32px`
- Primair desktopbreakpoint: `64rem`
- Space Grotesk voor headings
- DM Sans voor bodytekst, navigatie en UI

## Content toevoegen

Projecten staan in `src/content/projects/`. De frontmatter wordt gevalideerd met het schema in `src/content.config.ts` en bevat onder andere een titel, categorie, datum, volgorde en afbeelding.

FAQ-items staan in `src/content/faqs/` en gebruiken een vraag en sorteervolgorde in de frontmatter. De Markdown-inhoud vormt het antwoord.

## Werkwijze

Lees voor wijzigingen eerst `AGENTS.md`. Daar staan de projectafspraken voor componenten, CSS, responsive gedrag, toegankelijkheid en verificatie. Voer na codewijzigingen minimaal uit:

```sh
npm run build
```

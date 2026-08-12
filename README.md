# Timmerfabriek Sint Nyk

Website voor Timmerfabriek Sint Nyk, stapsgewijs opgebouwd vanuit een bestaand Figma-ontwerp.

## Tech stack

- [Astro](https://astro.build/)
- Semantische HTML
- Plain CSS
- Vanilla JavaScript
- DM Sans en Space Grotesk via Fontsource

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

## Beschikbare scripts

| Commando | Omschrijving |
| --- | --- |
| `npm run dev` | Start de lokale ontwikkelserver |
| `npm run build` | Maakt een productiebuild in `dist/` |
| `npm run preview` | Toont de productiebuild lokaal |

## Projectstructuur

```text
src/
├── assets/       Afbeeldingen, logo en iconen
├── components/   Herbruikbare Astro-componenten
├── data/         Centrale navigatiedata
├── layouts/      Globale paginalayouts
├── pages/        Paginaroutes
└── styles/       Globale styles en design tokens
```

De website wordt mobile-first gebouwd. Globale kleuren, typografie en layouttokens staan in `src/styles/global.css`.

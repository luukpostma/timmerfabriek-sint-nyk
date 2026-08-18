# Timmerfabriek Sint Nyk

Productiewebsite voor Timmerfabriek Sint Nyk. De site is gebouwd met Astro en wordt volledig statisch gegenereerd voor deployment via Cloudflare Workers Static Assets. De interface bestaat uit herbruikbare Astro-componenten, plain CSS en alleen vanilla JavaScript voor interactief gedrag.

## Vereisten

- Node.js 24.x
- npm 11.x

De ondersteunde versies staan ook in `package.json` onder `engines`.

## Lokaal starten

```sh
npm ci
npm run dev
```

Open vervolgens de URL die Astro toont, standaard `http://localhost:4321`.

## Beschikbare scripts

| Commando | Omschrijving |
| --- | --- |
| `npm run dev` | Start de lokale Astro-ontwikkelserver |
| `npm run check` | Voert Astro- en TypeScript-controles uit |
| `npm run clean` | Verwijdert de gegenereerde map `dist/` |
| `npm run build` | Leegt `dist/` en maakt de statische productiebuild |
| `npm run validate:csp` | Controleert de productiebuild tegen de CSP in `public/_headers` |
| `npm run validate` | Voert `check`, `build` en `validate:csp` achter elkaar uit |
| `npm run preview` | Serveert de productiebuild lokaal |
| `npm run deploy` | Deployt met Wrangler; de Wrangler-configuratie voert eerst `npm run validate` uit |

Voer voor het opleveren van codewijzigingen bij voorkeur de volledige validatie uit:

```sh
npm run validate
```

## Tech stack

- Astro 7 met statische output en strikte TypeScript-configuratie
- semantische HTML en plain CSS
- vanilla JavaScript voor navigatie, FAQ en formuliergedrag
- DM Sans en Space Grotesk via Fontsource
- Astro Content Collections voor projecten en FAQ-items
- `@astrojs/sitemap` voor de sitemap
- Cloudflare Workers Static Assets via Wrangler

Er wordt geen CSS-framework, client-side JavaScript-framework of UI-library gebruikt.

## Projectstructuur

```text
.
├── docs/                   Bedrijfs-, content-, SEO- en ontwerpdocumentatie
├── public/                 Robotsbestand en Cloudflare-headers
├── scripts/                Buildvalidatie, waaronder de CSP-controle
├── src/
│   ├── assets/             Lokale afbeeldingen, het logo en SVG-iconen
│   ├── components/         Herbruikbare Astro-componenten en paginasecties
│   ├── content/
│   │   ├── faqs/           Gedeelde FAQ-items in Markdown
│   │   └── projects/       Projecten in Markdown
│   ├── data/               Navigatie- en productdata
│   ├── layouts/            Globale documentstructuur
│   ├── pages/              Bestandsgebaseerde routes
│   ├── styles/             Design tokens en globale styles
│   └── content.config.ts   Schema's voor de Content Collections
├── astro.config.mjs        Site-URL, trailing slashes en sitemap
└── wrangler.jsonc          Statische Cloudflare-deployment
```

Belangrijke centrale bestanden:

- `src/layouts/BaseLayout.astro`: documentstructuur, lokale fonts, globale styles, metadata, canonical URL, bedrijfsdata en de globale header/footer.
- `src/data/navigation.ts`: hoofd-, utility- en juridische navigatie plus de globale offerte-CTA.
- `src/data/products.ts`: productkaarten op de homepage.
- `src/data/productDetails.ts`: centrale inhoud en afbeeldingen voor alle productdetailpagina's.
- `src/components/ProductDetailPage.astro`: gedeelde opbouw van productdetailpagina's.
- `src/pages/projecten/[id].astro`: statisch gegenereerde projectdetailroutes uit de `projects`-collectie.
- `src/styles/global.css`: design tokens, reset, elementstyles en de globale `.container`.

## Routes en content

De site bevat:

- de homepage;
- categoriepagina's voor kozijnen en deuren;
- productdetailpagina's voor kozijnen en deuren;
- zelfstandige productpagina's voor schuifpuien, beglazing en vouwwanden;
- een projectenoverzicht en datagedreven projectdetailpagina's;
- pagina's voor over ons, aannemers, contact en de privacyverklaring;
- een eigen statische 404-pagina.

Alle publieke routes gebruiken trailing slashes. Astro genereert canonical URL's en een sitemap voor `https://timmerfabrieksintnyk.nl/`; de 404-pagina wordt niet in de sitemap opgenomen.

### Producten

Productdetailroutes horen dun te blijven. Een route selecteert de juiste configuratie uit `src/data/productDetails.ts` en geeft die door aan `ProductDetailPage.astro`. Pas gedeelde productinhoud en productafbeeldingen daarom in de centrale data aan.

### Projecten en FAQ

Projecten staan in `src/content/projects/`. Hun frontmatter bevat een titel, categorie, omschrijving, datum, volgorde, afbeelding en alt-tekst.

FAQ-items staan in `src/content/faqs/`. De frontmatter bevat de vraag en sorteervolgorde; de Markdown-inhoud vormt het antwoord. `FaqSection.astro` kan daarnaast paginaspecifieke FAQ-items via props ontvangen.

De schema's voor beide collecties staan in `src/content.config.ts`.

## Contentbronnen

Gebruik bij het schrijven of wijzigen van websitecontent de bestanden in `docs/`:

- `BUSINESS-CONTEXT.md`: bron van waarheid voor bedrijfsgegevens en toegestane claims;
- `TONE-OF-VOICE.md`: schrijfstijl voor alle klantgerichte tekst;
- `SEO-CONTENT-RULES.md`: regels voor zoekintentie, metadata, interne links en technische bewaking;
- `SITE-STRUCTURE.md` en `KEYWORD-RESEARCH.md`: pagina-eigenaarschap en zoekwoordrichting;
- `CONTENT-STATUS.md`: actuele productiestatus per pagina.

Lees vóór wijzigingen ook `AGENTS.md`; daarin staan de bindende implementatie-, content- en verificatieafspraken voor dit project.

## Contactformulier en beveiliging

Het contactformulier in `ContactSection.astro` verstuurt via HTTPS naar Web3Forms. Het gebruikt een publieke Web3Forms-formulieridentificatie, een botcheck en hCaptcha. Andere API-sleutels, wachtwoorden of secrets mogen nooit in clientcode of de repository worden geplaatst.

De beveiligingsheaders staan in `public/_headers` en worden tijdens de build naar `dist/_headers` gekopieerd. De Content Security Policy staat alleen expliciet toegestane bronnen en SHA-256-hashes toe. `scripts/validate-csp.mjs` controleert dat de gegenereerde inline scripts en styles door die CSP worden gedekt en dat er geen inline `style`-attributen zijn.

## Styling en responsive basis

De site is mobile-first opgebouwd.

- Maximale containerbreedte: `1280px`
- Containerpadding op mobiel: `16px`
- Containerpadding vanaf `48rem`: `32px`
- Primair desktopbreakpoint: `64rem`
- Space Grotesk voor headings
- DM Sans voor bodytekst, navigatie en UI

Gebruik bestaande custom properties uit `src/styles/global.css` en de globale `.container` voordat nieuwe layoutregels of tokens worden toegevoegd.

## Deployment

`wrangler.jsonc` serveert uitsluitend de gegenereerde map `dist/`, dwingt trailing slashes af en gebruikt de eigen 404-pagina. Deploy met:

```sh
npm run deploy
```

Wrangler voert vooraf automatisch `npm run validate` uit. `dist/` is gegenereerde output en hoort niet in Git.

import type { ImageMetadata } from 'astro';
import placeholderImage from '../assets/images/place-holder.jpg';
import schuifpuiImage from '../assets/images/Schuifpui.webp';
import schuifpuiWhyImage from '../assets/images/Schuifpui-waarom.webp';
import binnendeurenImage from '../assets/images/Binnendeuren.webp';
import achterdeurenImage from '../assets/images/Achtedeuren.webp';
import garagedeurenImage from '../assets/images/Garagedeuren.webp';
import voordeurenImage from '../assets/images/Voordeur.webp';
import beglazingImage from '../assets/images/Beglazing.webp';
import draaikiepraamImage from '../assets/images/Draaikiepraam.webp';
import vastGlasKozijnImage from '../assets/images/Vastglaskozijn.webp';
import draairaamImage from '../assets/images/Draairaam.webp';
import deurkozijnenImage from '../assets/images/Deurkozijnen.webp';
import binnendeurkozijnenImage from '../assets/images/Binnendeurkozijnen.webp';
import binnendeurkozijnenWhyImage from '../assets/images/Binnenkozijnen-waarom.webp';

type ChoiceIcon = 'paintbrush' | 'mirror' | 'ruler' | 'grid';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface DetailItem {
  title: string;
  description: string;
}

interface ChoiceItem extends DetailItem {
  icon: ChoiceIcon;
}

export interface ProductDetailConfig {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  heroImage: ImageMetadata;
  heroImageAlt: string;
  choicesHeading: string;
  choicesIntroduction: string;
  choices: ChoiceItem[];
  benefitsHeading: string;
  benefitsIntroduction: string;
  benefits: DetailItem[];
  benefitsImage: ImageMetadata;
  benefitsImageAlt: string;
}

const createChoices = ({
  product,
  glazing,
  measurement,
  hardware,
}: {
  product: string;
  glazing: string;
  measurement: string;
  hardware: string;
}): ChoiceItem[] => [
  {
    title: 'Kleur en afwerking',
    description: `Kies een transparante of dekkende afwerking die past bij uw ${product} en woning.`,
    icon: 'paintbrush',
  },
  {
    title: 'Beglazing',
    description: glazing,
    icon: 'mirror',
  },
  {
    title: 'Maatvoering',
    description: measurement,
    icon: 'ruler',
  },
  {
    title: 'Beslag',
    description: hardware,
    icon: 'grid',
  },
];

const images = {
  heroImage: placeholderImage,
  benefitsImage: placeholderImage,
};

export const productDetails = {
  vastGlasKozijn: {
    title: 'Vast glas kozijn',
    description: 'Breng veel daglicht naar binnen met een vast glazen kozijn dat volledig op maat wordt gemaakt voor uw woning.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Kozijnen', href: '/kozijnen/' },
      { label: 'Vast glas kozijnen' },
    ],
    ...images,
    heroImage: vastGlasKozijnImage,
    heroImageAlt: 'Houten vast glas kozijn van Timmerfabriek Sint Nyk',
    choicesHeading: 'Afgestemd op uw woning',
    choicesIntroduction: 'Stel uw vaste kozijn samen op basis van uitstraling, isolatie en de beschikbare gevelopening.',
    choices: createChoices({
      product: 'vaste kozijn',
      glazing: 'Kies HR++ of triple glas op basis van de gewenste isolatie, veiligheid en lichtinval.',
      measurement: 'We maken het kozijn exact passend voor de bestaande of nieuw te realiseren gevelopening.',
      hardware: 'Werk het kozijn af met passende glaslatten en details die aansluiten op de rest van de woning.',
    }),
    benefitsHeading: 'Waarom een vast glas kozijn?',
    benefitsIntroduction: 'Een vast glas kozijn biedt maximale lichtinval, goede isolatie en een rustige uitstraling zonder bewegende delen.',
    benefits: [
      { title: 'Veel natuurlijk licht', description: 'Het grote glasoppervlak laat volop daglicht binnen en geeft de ruimte een open karakter.' },
      { title: 'Sterke isolatie', description: 'Doordat het kozijn niet hoeft te openen, ontstaat een bijzonder lucht- en kierdichte oplossing.' },
      { title: 'Onderhoudsarm', description: 'Het ontbreken van scharnieren en sluitwerk houdt het gebruik eenvoudig en beperkt het onderhoud.' },
    ],
    benefitsImageAlt: 'Tijdelijke afbeelding van een vast glas kozijn in een woning',
  },
  draaikiepraam: {
    title: 'Draaikiepraam',
    description: 'Ventileer eenvoudig met de kiepstand of open het raam volledig. Ieder draaikiepraam wordt op maat gemaakt voor uw woning.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Kozijnen', href: '/kozijnen/' },
      { label: 'Draaikiepramen' },
    ],
    ...images,
    heroImage: draaikiepraamImage,
    heroImageAlt: 'Houten draaikiepraam van Timmerfabriek Sint Nyk',
    choicesHeading: 'Afgestemd op uw woning',
    choicesIntroduction: 'Stel uw draaikiepraam samen op basis van uitstraling, comfort, isolatie en gebruik.',
    choices: createChoices({
      product: 'draaikiepraam',
      glazing: 'Combineer het draaikiepraam met HR++ of triple glas voor de gewenste isolatiewaarde.',
      measurement: 'Het kozijn wordt exact op maat gemaakt voor renovatie, verbouwing of nieuwbouw.',
      hardware: 'Kies passend beslag, veilige sluitpunten en een bediening die prettig in gebruik is.',
    }),
    benefitsHeading: 'Waarom een draaikiepraam?',
    benefitsIntroduction: 'Een draaikiepraam combineert dagelijkse ventilatie met een ruime opening en wordt volledig op maat gemaakt in onze eigen werkplaats.',
    benefits: [
      { title: 'Twee manieren van ventileren', description: 'Zet het raam op de kiepstand voor gecontroleerde ventilatie of draai het volledig open voor extra lucht.' },
      { title: 'Comfortabel en veilig', description: 'De kiepstand zorgt voor frisse lucht zonder dat het raam volledig open hoeft te staan.' },
      { title: 'Eenvoudig schoon te maken', description: 'Door het raam volledig naar binnen te draaien zijn glas en kozijn goed bereikbaar voor onderhoud.' },
    ],
    benefitsImageAlt: 'Tijdelijke afbeelding van een draaikiepraam in een woning',
  },
  draairaam: {
    title: 'Draairaam',
    description: 'Open uw raam ruim voor frisse lucht en een directe verbinding met buiten, uitgevoerd als houten maatwerk.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Kozijnen', href: '/kozijnen/' },
      { label: 'Draairamen' },
    ],
    ...images,
    heroImage: draairaamImage,
    heroImageAlt: 'Houten draairaam van Timmerfabriek Sint Nyk',
    choicesHeading: 'Afgestemd op uw woning',
    choicesIntroduction: 'Bepaal de uitstraling, draairichting en technische uitvoering van uw houten draairaam.',
    choices: createChoices({
      product: 'draairaam',
      glazing: 'Stem HR++ of triple glas af op de gewenste isolatiewaarde en het formaat van het raam.',
      measurement: 'We bepalen maat en draairichting nauwkeurig voor een goede aansluiting op de ruimte.',
      hardware: 'Kies degelijk hang- en sluitwerk met de gewenste bediening en beveiliging.',
    }),
    benefitsHeading: 'Waarom een draairaam?',
    benefitsIntroduction: 'Een houten draairaam biedt een ruime opening, natuurlijke ventilatie en een tijdloze uitstraling voor iedere woning.',
    benefits: [
      { title: 'Ruime opening', description: 'Het raam kan volledig worden geopend voor veel frisse lucht en een onbelemmerd uitzicht.' },
      { title: 'Praktisch in gebruik', description: 'De eenvoudige bediening maakt dagelijks openen, sluiten en ventileren gemakkelijk.' },
      { title: 'Passend bij iedere stijl', description: 'Profilering, kleur en vlakverdeling worden afgestemd op moderne én klassieke gevels.' },
    ],
    benefitsImageAlt: 'Tijdelijke afbeelding van een houten draairaam',
  },
  deurkozijn: {
    title: 'Deurkozijn',
    description: 'Geef iedere buitendeur een sterke, passende basis met een houten deurkozijn dat exact op maat wordt geproduceerd.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Kozijnen', href: '/kozijnen/' },
      { label: 'Deurkozijnen' },
    ],
    ...images,
    heroImage: deurkozijnenImage,
    heroImageAlt: 'Houten deurkozijn van Timmerfabriek Sint Nyk',
    choicesHeading: 'Afgestemd op uw entree',
    choicesIntroduction: 'Stem uw deurkozijn af op de deur, gevelopening, isolatie-eisen en uitstraling van het pand.',
    choices: createChoices({
      product: 'deurkozijn',
      glazing: 'Voeg desgewenst isolerende zijlichten of een bovenlicht toe voor extra daglicht bij de entree.',
      measurement: 'Kozijn, dorpel en sponningen worden precies afgestemd op de deur en gevelopening.',
      hardware: 'We bereiden het kozijn voor op passend hang- en sluitwerk en de gewenste beveiliging.',
    }),
    benefitsHeading: 'Waarom een houten deurkozijn?',
    benefitsIntroduction: 'Een maatwerk deurkozijn zorgt voor een duurzame aansluiting, goede isolatie en een verzorgde entree.',
    benefits: [
      { title: 'Stevige basis', description: 'Het kozijn draagt de deur betrouwbaar en blijft bestand tegen intensief dagelijks gebruik.' },
      { title: 'Goede kierdichting', description: 'Nauwkeurige maatvoering helpt tocht, vocht en warmteverlies rondom de deur te beperken.' },
      { title: 'Volledig op maat', description: 'Afmetingen, profilering en details worden afgestemd op de deur en bestaande bouwsituatie.' },
    ],
    benefitsImageAlt: 'Tijdelijke afbeelding van een houten deurkozijn',
  },
  binnendeurkozijn: {
    title: 'Binnendeurkozijn',
    description: 'Maak binnenruimtes compleet met een houten binnendeurkozijn dat aansluit op uw deuren, wanden en interieur.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Kozijnen', href: '/kozijnen/' },
      { label: 'Binnendeurkozijnen' },
    ],
    ...images,
    heroImage: binnendeurkozijnenImage,
    heroImageAlt: 'Houten binnendeurkozijn van Timmerfabriek Sint Nyk',
    choicesHeading: 'Afgestemd op uw interieur',
    choicesIntroduction: 'Kies de profilering, maatvoering en afwerking die passen bij uw binnendeur en woonstijl.',
    choices: createChoices({
      product: 'binnendeurkozijn',
      glazing: 'Combineer het kozijn eventueel met een glazen bovenlicht of zijlicht voor meer licht tussen ruimtes.',
      measurement: 'We stemmen het kozijn af op wanddikte, deuropening en de gekozen binnendeur.',
      hardware: 'Scharnieren, sluitplaat en overige voorbereidingen worden passend voor de deur uitgevoerd.',
    }),
    benefitsHeading: 'Waarom een houten binnendeurkozijn?',
    benefitsIntroduction: 'Een houten binnendeurkozijn brengt deuren en interieur samen in een duurzame en nauwkeurig afgewerkte oplossing.',
    benefits: [
      { title: 'Rustige afwerking', description: 'Het kozijn vormt een nette overgang tussen deur, wand en aangrenzende ruimtes.' },
      { title: 'Veel ontwerpvrijheid', description: 'Kies uit verschillende profielen en kleuren, passend bij een modern of klassiek interieur.' },
      { title: 'Nauwkeurig passend', description: 'Maatwerk voorkomt ongewenste kieren en zorgt dat de binnendeur soepel opent en sluit.' },
    ],
    benefitsImage: binnendeurkozijnenWhyImage,
    benefitsImageAlt: 'Houten binnendeurkozijnen in een interieur',
  },
  voordeur: {
    title: 'Voordeur',
    description: 'Geef uw woning een uitnodigende entree met een houten voordeur die veiligheid, isolatie en uitstraling combineert.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Deuren', href: '/deuren/' },
      { label: 'Voordeuren' },
    ],
    ...images,
    heroImage: voordeurenImage,
    heroImageAlt: 'Moderne donkerblauwe houten voordeur met zijlichten',
    choicesHeading: 'Afgestemd op uw entree',
    choicesIntroduction: 'Stel uw voordeur samen op basis van stijl, daglicht, maatvoering en gewenste beveiliging.',
    choices: createChoices({
      product: 'voordeur',
      glazing: 'Kies een gesloten deur of voeg isolerend, helder of decoratief glas toe voor extra daglicht.',
      measurement: 'De deur wordt nauwkeurig afgestemd op het kozijn en de bestaande of nieuwe entree.',
      hardware: 'Kies veilig meerpuntssluitwerk, passend deurbeslag en een comfortabele bediening.',
    }),
    benefitsHeading: 'Waarom een houten voordeur?',
    benefitsIntroduction: 'Een houten voordeur is volledig vorm te geven en biedt een sterke combinatie van karakter, comfort en veiligheid.',
    benefits: [
      { title: 'Een eigen uitstraling', description: 'Vlakverdeling, kleur, glas en details maken de voordeur tot het visitekaartje van uw woning.' },
      { title: 'Comfortabel geïsoleerd', description: 'Een passende opbouw en kierdichting helpen warmte binnen en tocht buiten te houden.' },
      { title: 'Veilig uitgevoerd', description: 'Degelijk hang- en sluitwerk beschermt de entree en geeft vertrouwen bij dagelijks gebruik.' },
    ],
    benefitsImageAlt: 'Tijdelijke afbeelding van een houten voordeur',
  },
  achterdeur: {
    title: 'Achterdeur',
    description: 'Kies een praktische houten achterdeur die dagelijks gemak combineert met goede isolatie en betrouwbare veiligheid.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Deuren', href: '/deuren/' },
      { label: 'Achterdeuren' },
    ],
    ...images,
    heroImage: achterdeurenImage,
    heroImageAlt: 'Houten achterdeur van Timmerfabriek Sint Nyk',
    choicesHeading: 'Afgestemd op dagelijks gebruik',
    choicesIntroduction: 'Bepaal de indeling, lichtinval en uitvoering die passen bij uw keuken, bijkeuken of tuinentree.',
    choices: createChoices({
      product: 'achterdeur',
      glazing: 'Voeg HR++ of triple glas toe voor daglicht en behoud tegelijk een goede isolatiewaarde.',
      measurement: 'We maken de deur passend voor het bestaande kozijn of leveren een complete maatwerkoplossing.',
      hardware: 'Stem scharnieren, sluitwerk en bediening af op intensief dagelijks gebruik en veiligheid.',
    }),
    benefitsHeading: 'Waarom een houten achterdeur?',
    benefitsIntroduction: 'Een houten achterdeur biedt een sterke, praktische doorgang naar buiten en kan precies op uw gebruik worden afgestemd.',
    benefits: [
      { title: 'Praktische doorgang', description: 'De deur is ingericht op dagelijks verkeer tussen woning, tuin, schuur of bijkeuken.' },
      { title: 'Licht waar gewenst', description: 'Met een passende glasopening brengt u extra daglicht in donkere achterliggende ruimtes.' },
      { title: 'Duurzaam maatwerk', description: 'Een nauwkeurige passing en degelijke afwerking zorgen voor langdurig prettig gebruik.' },
    ],
    benefitsImageAlt: 'Tijdelijke afbeelding van een houten achterdeur',
  },
  garagedeur: {
    title: 'Garagedeur',
    description: 'Sluit uw garage stijlvol en degelijk af met houten garagedeuren die exact op de opening worden afgestemd.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Deuren', href: '/deuren/' },
      { label: 'Garagedeuren' },
    ],
    ...images,
    heroImage: garagedeurenImage,
    heroImageAlt: 'Donkere houten garagedeuren in een gemetselde gevel',
    choicesHeading: 'Afgestemd op uw garage',
    choicesIntroduction: 'Kies een uitvoering die past bij de gevel, beschikbare ruimte en manier waarop u de garage gebruikt.',
    choices: createChoices({
      product: 'garagedeur',
      glazing: 'Voeg desgewenst isolerende glasopeningen toe voor natuurlijk licht in de garage.',
      measurement: 'De deuren worden exact passend gemaakt voor de breedte, hoogte en detaillering van de opening.',
      hardware: 'Kies robuuste scharnieren, veilige sluitingen en een bediening passend bij het formaat van de deur.',
    }),
    benefitsHeading: 'Waarom houten garagedeuren?',
    benefitsIntroduction: 'Houten garagedeuren bieden veel ontwerpvrijheid en geven een grote gevelopening een warme, verzorgde uitstraling.',
    benefits: [
      { title: 'Passend bij de gevel', description: 'Kleur, belijning en profilering kunnen worden afgestemd op kozijnen en andere deuren.' },
      { title: 'Robuuste uitvoering', description: 'De constructie en het beslag zijn berekend op het formaat en regelmatig gebruik van de deuren.' },
      { title: 'Volledig maatwerk', description: 'Ook afwijkende openingen en renovatiesituaties kunnen nauwkeurig worden ingevuld.' },
    ],
    benefitsImageAlt: 'Tijdelijke afbeelding van houten garagedeuren',
  },
  binnendeur: {
    title: 'Binnendeur',
    description: 'Breng sfeer en samenhang in uw interieur met een houten binnendeur die volledig naar wens wordt gemaakt.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Deuren', href: '/deuren/' },
      { label: 'Binnendeuren' },
    ],
    ...images,
    heroImage: binnendeurenImage,
    heroImageAlt: 'Witte houten binnendeuren in een licht interieur',
    choicesHeading: 'Afgestemd op uw interieur',
    choicesIntroduction: 'Stel uw binnendeur samen op basis van stijl, lichtinval, afmetingen en gebruiksgemak.',
    choices: createChoices({
      product: 'binnendeur',
      glazing: 'Kies een gesloten deur of voeg helder, mat of decoratief glas toe om licht door te laten.',
      measurement: 'We stemmen de deur nauwkeurig af op het kozijn, de vloerhoogte en gewenste draairichting.',
      hardware: 'Kies scharnieren, krukken en sluitwerk die aansluiten bij de stijl en functie van de ruimte.',
    }),
    benefitsHeading: 'Waarom een houten binnendeur?',
    benefitsIntroduction: 'Een houten binnendeur combineert een natuurlijke uitstraling met maatwerk voor iedere ruimte in huis.',
    benefits: [
      { title: 'Sfeervol materiaal', description: 'Hout brengt warmte en karakter in zowel moderne als traditionele interieurs.' },
      { title: 'Ontworpen voor de ruimte', description: 'Indeling, glas en afwerking kunnen per kamer en functie worden aangepast.' },
      { title: 'Duurzaam te onderhouden', description: 'Een hoogwaardige houten deur kan worden bijgewerkt en blijft daardoor lang mooi.' },
    ],
    benefitsImageAlt: 'Tijdelijke afbeelding van een houten binnendeur',
  },
  schuifpui: {
    title: 'Schuifpui',
    description: 'Verbind binnen en buiten met een houten schuifpui die veel daglicht binnenlaat en soepel opent naar uw terras of tuin.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Schuifpuien' },
    ],
    ...images,
    heroImage: schuifpuiImage,
    heroImageAlt: 'Witte schuifpui tussen een lichte woonkamer en de tuin',
    choicesHeading: 'Afgestemd op uw woning',
    choicesIntroduction: 'Stel uw schuifpui samen op basis van uitstraling, isolatie, afmetingen en dagelijks gebruik.',
    choices: [
      {
        title: 'Kleur en afwerking',
        description: 'Kies een transparante of dekkende afwerking die aansluit op uw gevel, kozijnen en interieur.',
        icon: 'paintbrush',
      },
      {
        title: 'Beglazing',
        description: 'Combineer de schuifpui met HR++ of triple glas voor veel daglicht en een goede isolatiewaarde.',
        icon: 'mirror',
      },
      {
        title: 'Maatvoering',
        description: 'Kies een 2-delige, 3-delige of 4-delige schuifpui, exact op maat gemaakt voor de beschikbare gevelopening.',
        icon: 'ruler',
      },
      {
        title: 'Beslag',
        description: 'Stem rails, handgrepen en veilig sluitwerk af op het formaat en de gewenste bediening van de schuifpui.',
        icon: 'grid',
      },
    ],
    benefitsHeading: 'Waarom een houten schuifpui?',
    benefitsIntroduction: 'Een houten schuifpui brengt licht en ruimte in huis en vormt een comfortabele overgang tussen uw woning en buitenruimte.',
    benefits: [
      {
        title: '2-, 3- of 4-delige uitvoering',
        description: 'De vlakverdeling en het aantal delen worden afgestemd op de breedte van de gevel en de gewenste doorgang.',
      },
      {
        title: 'Veel licht en ruimte',
        description: 'Grote glasvlakken zorgen voor een open uitstraling en halen de tuin zichtbaar naar binnen.',
      },
      {
        title: 'Soepel in gebruik',
        description: 'Degelijke rails en passend beslag maken de schuifpui gemakkelijk te openen en betrouwbaar af te sluiten.',
      },
    ],
    benefitsImage: schuifpuiWhyImage,
    benefitsImageAlt: 'Houten schuifpui aan een woning',
  },
  beglazing: {
    title: 'Beglazing',
    description: 'Verbeter het comfort en de energieprestatie van uw woning met isolerende beglazing die passend wordt geleverd en geplaatst.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Beglazing' },
    ],
    ...images,
    heroImage: beglazingImage,
    heroImageAlt: 'Detail van isolerende beglazing in een wit houten kozijn',
    choicesHeading: 'Afgestemd op uw kozijnen',
    choicesIntroduction: 'Kies de glassoort en uitvoering die passen bij uw kozijnen, comfortwensen en gewenste isolatiewaarde.',
    choices: [
      {
        title: 'Kleur en afwerking',
        description: 'Stem glas, afstandhouders en afwerking zorgvuldig af op de uitstraling van uw kozijnen en gevel.',
        icon: 'paintbrush',
      },
      {
        title: 'Beglazing',
        description: 'Kies HR++ glas of Triple HR+++ glas op basis van de gewenste isolatie, het kozijn en uw woning.',
        icon: 'mirror',
      },
      {
        title: 'Maatvoering',
        description: 'Ieder glaspaneel wordt nauwkeurig ingemeten en passend gemaakt voor bestaande of nieuwe kozijnen.',
        icon: 'ruler',
      },
      {
        title: 'Beslag',
        description: 'Glaslatten, afdichtingen en aansluitdetails worden afgestemd op het kozijn en de gekozen glassoort.',
        icon: 'grid',
      },
    ],
    benefitsHeading: 'Waarom isolerende beglazing?',
    benefitsIntroduction: 'Moderne beglazing verhoogt het wooncomfort, beperkt warmteverlies en maakt bestaande of nieuwe kozijnen energiezuiniger.',
    benefits: [
      {
        title: 'HR++ of Triple HR+++',
        description: 'Kies de isolatiewaarde die past bij uw kozijnen, renovatieplannen en gewenste energieprestatie.',
      },
      {
        title: 'Meer wooncomfort',
        description: 'Isolerend glas vermindert koudeval bij ramen en helpt de binnentemperatuur gelijkmatiger te houden.',
      },
      {
        title: 'Minder warmteverlies',
        description: 'Een passende glasopbouw en zorgvuldige montage beperken energieverlies via ramen en deuren.',
      },
    ],
    benefitsImageAlt: 'Tijdelijke afbeelding van isolerende beglazing in een houten kozijn',
  },
  vouwwand: {
    title: 'Vouwwand',
    description: 'Open uw gevel vrijwel volledig met een houten vouwwand die woonruimte, terras en tuin flexibel met elkaar verbindt.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Vouwwanden' },
    ],
    ...images,
    heroImageAlt: 'Tijdelijke afbeelding voor een houten vouwwand',
    choicesHeading: 'Afgestemd op uw woning',
    choicesIntroduction: 'Stel uw vouwwand samen op basis van paneelindeling, uitstraling, isolatie en gewenste openingsrichting.',
    choices: [
      {
        title: 'Kleur en afwerking',
        description: 'Kies een transparante of dekkende afwerking die aansluit op uw gevel, interieur en overige kozijnen.',
        icon: 'paintbrush',
      },
      {
        title: 'Beglazing',
        description: 'Combineer de vouwwand met HR++ of triple glas voor veel daglicht en een comfortabele isolatiewaarde.',
        icon: 'mirror',
      },
      {
        title: 'Maatvoering',
        description: 'Aantal panelen, paneelbreedtes en openingsrichting worden exact afgestemd op uw gevelopening en gebruik.',
        icon: 'ruler',
      },
      {
        title: 'Beslag',
        description: 'Kies hoogwaardige rails, scharnieren, handgrepen en sluitwerk voor een soepele en veilige bediening.',
        icon: 'grid',
      },
    ],
    benefitsHeading: 'Waarom een houten vouwwand?',
    benefitsIntroduction: 'Een houten vouwwand biedt maximale flexibiliteit: gesloten profiteert u van licht en uitzicht, geopend ontstaat een brede verbinding met buiten.',
    benefits: [
      {
        title: 'Brede vrije opening',
        description: 'De panelen vouwen compact opzij, waardoor een groot deel van de gevel volledig kan worden geopend.',
      },
      {
        title: 'Flexibele paneelindeling',
        description: 'Het aantal panelen en een eventuele loopdeur worden afgestemd op de ruimte en uw dagelijkse gebruik.',
      },
      {
        title: 'Licht en comfortabel',
        description: 'Grote glasvlakken brengen veel daglicht binnen, terwijl isolerende beglazing het wooncomfort ondersteunt.',
      },
    ],
    benefitsImageAlt: 'Tijdelijke afbeelding van een houten vouwwand tussen woning en tuin',
  },
} satisfies Record<string, ProductDetailConfig>;

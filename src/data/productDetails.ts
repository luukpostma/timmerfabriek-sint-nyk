import type { ImageMetadata } from 'astro';
import placeholderImage from '../assets/images/place-holder.jpg';
import schuifpuiImage from '../assets/images/Schuifpui.webp';
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
import vouwwandImage from '../assets/images/Vouwwand.webp';

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
};

export const productDetails = {
  vastGlasKozijn: {
    title: 'Vast glas kozijn',
    description: 'Een vast glas kozijn brengt veel daglicht binnen, zonder scharnieren of een te openen deel. We maken ieder kozijn op maat voor uw project.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Kozijnen', href: '/kozijnen/' },
      { label: 'Vast glas kozijnen' },
    ],
    ...images,
    heroImage: vastGlasKozijnImage,
    heroImageAlt: 'Houten vast glas kozijn van Timmerfabriek Sint Nyk',
    choicesHeading: 'Afgestemd op uw gevel',
    choicesIntroduction: 'Bij een vast glas kozijn draait het vooral om afwerking, beglazing en een exacte pasvorm in de gevel.',
    choices: [
      {
        title: 'Kleur en afwerking',
        description: 'Kies een transparante of dekkende afwerking die aansluit bij uw overige kozijnen en gevel.',
        icon: 'paintbrush',
      },
      {
        title: 'Beglazing',
        description: 'Combineer het vaste glas met HR++ of triple glas, passend bij de gewenste isolatie en lichtinval.',
        icon: 'mirror',
      },
      {
        title: 'Maatvoering',
        description: 'We maken het kozijn exact passend voor de bestaande of nieuwe gevelopening.',
        icon: 'ruler',
      },
      {
        title: 'Toepassing in de gevel',
        description: 'Vast glas combineert goed met draaikiepramen of een deurkozijn, bijvoorbeeld als zij- of bovenlicht.',
        icon: 'grid',
      },
    ],
    benefitsHeading: 'Waarom een vast glas kozijn?',
    benefitsIntroduction: 'Een vast glas kozijn kiest u bewust vanwege het ontbreken van een te openen deel. Dat heeft duidelijke voordelen.',
    benefits: [
      { title: 'Veel natuurlijk licht', description: 'Een groot glasoppervlak zonder kozijnindeling van draaiende delen laat volop daglicht binnen.' },
      { title: 'Rustig gevelbeeld', description: 'Zonder scharnieren, grepen of sluitwerk oogt het kozijn strak en rustig in de gevel.' },
      { title: 'Onderhoudsarm', description: 'Er zijn geen scharnieren of sluitwerk die na verloop van tijd afgesteld of vervangen moeten worden.' },
    ],
  },
  draaikiepraam: {
    title: 'Draaikiepraam',
    description: 'Kiepen voor ventilatie of volledig draaien voor frisse lucht: een draaikiepraam combineert beide in één raam, op maat gemaakt in onze werkplaats.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Kozijnen', href: '/kozijnen/' },
      { label: 'Draaikiepramen' },
    ],
    ...images,
    heroImage: draaikiepraamImage,
    heroImageAlt: 'Houten draaikiepraam van Timmerfabriek Sint Nyk',
    choicesHeading: 'Afgestemd op gebruik en ventilatie',
    choicesIntroduction: 'Bepaal hoe u het draaikiepraam wilt gebruiken: van kleur en beglazing tot de bediening waarmee u wisselt tussen kiepen en draaien.',
    choices: [
      {
        title: 'Kleur en afwerking',
        description: 'Kies een transparante of dekkende afwerking die aansluit bij uw kozijnen en gevel.',
        icon: 'paintbrush',
      },
      {
        title: 'Beglazing',
        description: 'Combineer het draaikiepraam met HR++ of triple glas voor de gewenste isolatiewaarde.',
        icon: 'mirror',
      },
      {
        title: 'Maatvoering',
        description: 'Het kozijn wordt exact op maat gemaakt voor renovatie, verbouwing of nieuwbouw.',
        icon: 'ruler',
      },
      {
        title: 'Bediening',
        description: 'Met veilig, prettig beslag wisselt u eenvoudig tussen de kiepstand en volledig openen.',
        icon: 'grid',
      },
    ],
    benefitsHeading: 'Waarom een draaikiepraam?',
    benefitsIntroduction: 'Een draaikiepraam combineert twee manieren van openen in één raam, volledig op maat gemaakt in onze werkplaats.',
    benefits: [
      { title: 'Twee manieren van ventileren', description: 'Zet het raam op de kiepstand voor gecontroleerde ventilatie, of draai het volledig open voor extra lucht.' },
      { title: 'Comfortabel en veilig', description: 'De kiepstand geeft frisse lucht zonder dat het raam volledig open hoeft te staan: praktisch bij regen of wind.' },
      { title: 'Eenvoudig schoon te maken', description: 'Doordat het raam volledig naar binnen kan draaien, zijn glas en kozijn ook aan de buitenzijde goed bereikbaar.' },
    ],
  },
  draairaam: {
    title: 'Draairaam',
    description: 'Een draairaam opent in één beweging volledig, voor veel frisse lucht en vrij zicht naar buiten. Wij maken ieder raam op maat.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Kozijnen', href: '/kozijnen/' },
      { label: 'Draairamen' },
    ],
    ...images,
    heroImage: draairaamImage,
    heroImageAlt: 'Houten draairaam van Timmerfabriek Sint Nyk',
    choicesHeading: 'Afgestemd op ruimte en uitzicht',
    choicesIntroduction: 'Kies de uitstraling, draairichting en technische uitvoering van uw draairaam.',
    choices: [
      {
        title: 'Kleur en afwerking',
        description: 'Kies een transparante of dekkende afwerking die aansluit op de architectuur van uw woning of pand.',
        icon: 'paintbrush',
      },
      {
        title: 'Beglazing',
        description: 'Stem HR++ of triple glas af op de gewenste isolatiewaarde en het formaat van het raam.',
        icon: 'mirror',
      },
      {
        title: 'Maatvoering',
        description: 'We bepalen maat en draairichting nauwkeurig voor een goede aansluiting op de ruimte.',
        icon: 'ruler',
      },
      {
        title: 'Draairichting',
        description: 'U bepaalt zelf naar welke kant het raam opent, passend bij de ruimte en het gewenste gebruik.',
        icon: 'grid',
      },
    ],
    benefitsHeading: 'Waarom een draairaam?',
    benefitsIntroduction: 'Een draairaam opent volledig voor frisse lucht en vrij zicht. Dat is anders dan een draaikiepraam, dat ook een kiepstand heeft.',
    benefits: [
      { title: 'Ruime opening', description: 'Het raam gaat in één beweging volledig open, voor veel frisse lucht en onbelemmerd uitzicht.' },
      { title: 'Eenvoudige bediening', description: 'Eén duidelijke beweging om te openen en sluiten, zonder tussenstand of extra bediening.' },
      { title: 'Rustige, traditionele uitstraling', description: 'Zonder zichtbaar kiepbeslag oogt een draairaam rustiger: een bewuste keuze bij authentieke of karakteristieke woningen.' },
    ],
  },
  deurkozijn: {
    title: 'Deurkozijn',
    description: 'Een deurkozijn is het maatwerkkozijn rondom uw buitendeur, exact op maat gemaakt en afgestemd op de gevelopening.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Kozijnen', href: '/kozijnen/' },
      { label: 'Deurkozijnen' },
    ],
    ...images,
    heroImage: deurkozijnenImage,
    heroImageAlt: 'Houten deurkozijn van Timmerfabriek Sint Nyk',
    choicesHeading: 'Afgestemd op uw entree',
    choicesIntroduction: 'Stem uw deurkozijn af op de deur, de gevelopening en de gewenste isolatie en uitstraling.',
    choices: [
      {
        title: 'Kleur en afwerking',
        description: 'Kies een transparante of dekkende afwerking die aansluit bij de deur en de gevel.',
        icon: 'paintbrush',
      },
      {
        title: 'Beglazing',
        description: 'Voeg desgewenst isolerende zijlichten of een bovenlicht toe voor extra daglicht bij de entree.',
        icon: 'mirror',
      },
      {
        title: 'Maatvoering',
        description: 'Kozijn, dorpel en sponningen stemmen we precies af op de deur en de gevelopening.',
        icon: 'ruler',
      },
      {
        title: 'Beslag',
        description: 'We bereiden het kozijn voor op passend hang- en sluitwerk en de gewenste beveiliging.',
        icon: 'grid',
      },
    ],
    benefitsHeading: 'Waarom een houten deurkozijn?',
    benefitsIntroduction: 'Een deurkozijn vormt de omlijsting rond uw buitendeur. De nauwkeurigheid daarvan bepaalt mede hoe de deur functioneert.',
    benefits: [
      { title: 'Stevige ophanging', description: 'Het kozijn draagt de deur betrouwbaar en is bestand tegen intensief dagelijks gebruik.' },
      { title: 'Nauwkeurige aansluiting', description: 'Een precieze pasvorm rond de deur beperkt kieren, tocht en vochtinsijpeling.' },
      { title: 'Volledig op maat', description: 'Afmetingen, profilering en details stemmen we af op de deur en de bestaande bouwsituatie.' },
    ],
  },
  binnendeurkozijn: {
    title: 'Binnendeurkozijn',
    description: 'Tussen binnendeur, wand en interieur zorgt een binnendeurkozijn voor een nauwkeurige, op maat gemaakte overgang.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Kozijnen', href: '/kozijnen/' },
      { label: 'Binnendeurkozijnen' },
    ],
    ...images,
    heroImage: binnendeurkozijnenImage,
    heroImageAlt: 'Houten binnendeurkozijn van Timmerfabriek Sint Nyk',
    choicesHeading: 'Afgestemd op uw interieur',
    choicesIntroduction: 'Profilering, maatvoering en afwerking bepaalt u zelf, afgestemd op uw binnendeur en interieur.',
    choices: [
      {
        title: 'Kleur en afwerking',
        description: 'Kies een afwerking en kleur die passen bij de binnendeur en de rest van het interieur.',
        icon: 'paintbrush',
      },
      {
        title: 'Profiel en model',
        description: 'Kies een profiel en model dat past bij de rest van uw kozijnen en interieur.',
        icon: 'mirror',
      },
      {
        title: 'Maatvoering',
        description: 'We stemmen het kozijn af op de wanddikte, de deuropening en de gekozen binnendeur.',
        icon: 'ruler',
      },
      {
        title: 'Beslag',
        description: 'Scharnieren, sluitplaat en overige voorbereidingen maken we passend voor de gekozen deur.',
        icon: 'grid',
      },
    ],
    benefitsHeading: 'Waarom een houten binnendeurkozijn?',
    benefitsIntroduction: 'Een binnendeurkozijn is de nauwkeurige overgang tussen deur, wand en interieur.',
    benefits: [
      { title: 'Rustige afwerking', description: 'Het kozijn vormt een nette overgang tussen deur, wand en aangrenzende ruimtes.' },
      { title: 'Veel ontwerpvrijheid', description: 'Kies uit verschillende profielen en kleuren, passend bij een modern of klassiek interieur.' },
      { title: 'Nauwkeurig passend', description: 'Maatwerk voorkomt ongewenste kieren en zorgt dat de binnendeur soepel opent en sluit.' },
    ],
  },
  voordeur: {
    title: 'Voordeur',
    description: 'Een houten voordeur bepaalt mede de eerste indruk van uw woning en wordt volledig op maat gemaakt voor uw entree.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Deuren', href: '/deuren/' },
      { label: 'Voordeuren' },
    ],
    ...images,
    heroImage: voordeurenImage,
    heroImageAlt: 'Moderne donkerblauwe houten voordeur met zijlichten',
    choicesHeading: 'Afgestemd op uw entree',
    choicesIntroduction: 'Stel uw voordeur samen op basis van stijl, daglicht, maatvoering en hang- en sluitwerk.',
    choices: createChoices({
      product: 'voordeur',
      glazing: 'Kies een gesloten deur, of voeg HR++ of triple glas toe voor extra daglicht bij de entree.',
      measurement: 'De deur wordt nauwkeurig afgestemd op het kozijn en de bestaande of nieuwe entree.',
      hardware: 'Kies passend deurbeslag en hang- en sluitwerk bij de gewenste bediening.',
    }),
    benefitsHeading: 'Waarom een houten voordeur?',
    benefitsIntroduction: 'Een houten voordeur is volledig naar wens vorm te geven, van vlakverdeling tot glas en beslag.',
    benefits: [
      { title: 'Een eigen uitstraling', description: 'Vlakverdeling, kleur, glas en details maken de voordeur het visitekaartje van uw woning.' },
      { title: 'Welkome lichtinval', description: 'Optioneel glas of zijlichten geven de entree een open en uitnodigend karakter.' },
      { title: 'Nauwkeurige aansluiting', description: 'De deur sluit nauwkeurig aan op het kozijn, voor een strakke entree zonder kieren.' },
    ],
  },
  achterdeur: {
    title: 'Achterdeur',
    description: 'Een houten achterdeur is een praktische, dagelijkse doorgang naar buiten, volledig op maat gemaakt.',
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
      glazing: 'Voeg HR++ of triple glas toe voor extra daglicht bij de deur.',
      measurement: 'We maken de deur passend voor het bestaande kozijn of leveren een complete maatwerkoplossing.',
      hardware: 'Stem scharnieren, sluitwerk en bediening af op intensief dagelijks gebruik.',
    }),
    benefitsHeading: 'Waarom een houten achterdeur?',
    benefitsIntroduction: 'Een houten achterdeur is een praktische doorgang naar buiten en wordt precies op uw gebruik afgestemd.',
    benefits: [
      { title: 'Praktische doorgang', description: 'De deur is ingericht op dagelijks verkeer tussen woning, tuin, schuur of bijkeuken.' },
      { title: 'Licht waar gewenst', description: 'Met een passende glasopening brengt u extra daglicht in donkere achterliggende ruimtes.' },
      { title: 'Nauwkeurig maatwerk', description: 'Een precieze pasvorm in het kozijn zorgt voor soepel gebruik, ook bij dagelijkse belasting.' },
    ],
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
      glazing: 'Voeg desgewenst glasopeningen met HR++ of triple glas toe voor natuurlijk licht in de garage.',
      measurement: 'De deuren worden exact passend gemaakt voor de breedte, hoogte en detaillering van de opening.',
      hardware: 'Kies scharnieren en sluitwerk passend bij het formaat en de bediening van de deur.',
    }),
    benefitsHeading: 'Waarom houten garagedeuren?',
    benefitsIntroduction: 'Houten garagedeuren bieden veel ontwerpvrijheid en zijn volledig op maat te maken voor uw garageopening.',
    benefits: [
      { title: 'Passend bij de gevel', description: 'Kleur, belijning en profilering kunnen worden afgestemd op kozijnen en andere deuren.' },
      { title: 'Warme, houten uitstraling', description: 'Hout geeft een grote gevelopening een warme, verzorgde uitstraling.' },
      { title: 'Volledig maatwerk', description: 'Ook afwijkende openingen en renovatiesituaties kunnen nauwkeurig worden ingevuld.' },
    ],
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
      { title: 'Goed te onderhouden', description: 'Een houten deur kan worden bijgewerkt en opnieuw afgelakt of geschilderd wanneer u dat wenst.' },
    ],
  },
  schuifpui: {
    title: 'Schuifpui',
    description: 'Een houten schuifpui op maat verbindt uw woning met de tuin of het terras, met grote glasvlakken voor veel daglicht.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Schuifpuien' },
    ],
    ...images,
    heroImage: schuifpuiImage,
    heroImageAlt: 'Witte schuifpui tussen een lichte woonkamer en de tuin',
    choicesHeading: 'Afgestemd op uw woning',
    choicesIntroduction: 'Stel uw schuifpui samen op basis van afwerking, beglazing, uitvoering en bediening.',
    choices: [
      {
        title: 'Kleur en afwerking',
        description: 'Kies een transparante of dekkende afwerking die aansluit op uw gevel, kozijnen en interieur.',
        icon: 'paintbrush',
      },
      {
        title: 'Beglazing',
        description: 'Combineer de schuifpui met HR++ of triple glas voor veel daglicht.',
        icon: 'mirror',
      },
      {
        title: 'Uitvoering',
        description: 'Kies een 2-, 3- of 4-delige schuifpui, afgestemd op de beschikbare gevelopening, de gewenste vlakverdeling en de gewenste doorgang.',
        icon: 'ruler',
      },
      {
        title: 'Beslag',
        description: 'Stem rails, handgrepen en sluitwerk af op het formaat en de gewenste bediening van de schuifpui.',
        icon: 'grid',
      },
    ],
    benefitsHeading: 'Waarom een houten schuifpui?',
    benefitsIntroduction: 'Een houten schuifpui brengt licht en ruimte in huis en vormt een overgang tussen uw woning en buitenruimte.',
    benefits: [
      {
        title: '2-, 3- of 4-delige uitvoering',
        description: 'Afhankelijk van de gevelopening en gewenste doorgang maken we de schuifpui in een 2-, 3- of 4-delige uitvoering.',
      },
      {
        title: 'Veel licht en ruimte',
        description: 'Grote glasvlakken zorgen voor een open uitstraling en halen de tuin zichtbaar naar binnen.',
      },
      {
        title: 'Praktisch in gebruik',
        description: 'Rails en beslag zijn afgestemd op het formaat en de manier waarop u de schuifpui wilt bedienen.',
      },
    ],
  },
  beglazing: {
    title: 'Beglazing',
    description: 'Wij leveren beglazing met HR++ of triple glas, zowel voor nieuwe kozijnen, deuren en schuifpuien als voor uw bestaande houten kozijn.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Beglazing' },
    ],
    ...images,
    heroImage: beglazingImage,
    heroImageAlt: 'Detail van isolerende beglazing in een wit houten kozijn',
    choicesHeading: 'Afgestemd op uw kozijnen',
    choicesIntroduction: 'Kies de glassoort die past bij uw kozijn en situatie, voor nieuwe kozijnen of ter vervanging in een bestaand kozijn.',
    choices: [
      {
        title: 'HR++ of triple glas',
        description: 'We leveren beglazing met HR++ of triple glas, passend bij uw kozijn en de situatie van het project.',
        icon: 'mirror',
      },
      {
        title: 'Nieuw of bestaand kozijn',
        description: 'Nieuwe beglazing is ook los te bestellen voor uw bestaande houten kozijn, of mee te nemen bij nieuwe kozijnen, deuren of een schuifpui.',
        icon: 'grid',
      },
      {
        title: 'Maatvoering',
        description: 'We meten nauwkeurig in en bestellen de beglazing op maat bij onze glasleverancier, passend voor uw bestaande of nieuwe kozijn.',
        icon: 'ruler',
      },
      {
        title: 'Afwerking en aansluiting',
        description: 'Glaslatten en aansluitdetails maken we passend bij het kozijn, voor een nette afwerking.',
        icon: 'paintbrush',
      },
    ],
    benefitsHeading: 'Waarom nieuwe beglazing?',
    benefitsIntroduction: 'Nieuwe beglazing is te kiezen bij nieuw houten maatwerk, of los voor uw bestaande kozijn.',
    benefits: [
      {
        title: 'Advies bij de keuze',
        description: 'We denken met u mee welke glassoort past bij uw kozijn en project.',
      },
      {
        title: 'Zonder nieuw kozijn',
        description: 'U hoeft niet meteen een nieuw kozijn te bestellen om van nieuwe beglazing te profiteren.',
      },
      {
        title: 'Eén aanspreekpunt',
        description: 'U regelt de beglazing via ons: wij bestellen op maat bij onze glasleverancier en zorgen voor een goede aansluiting op uw kozijn.',
      },
    ],
  },
  vouwwand: {
    title: 'Vouwwand',
    description: 'Een houten vouwwand maken we zelf op maat in onze werkplaats, voor een brede opening tussen uw woonruimte en het terras of de tuin.',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Vouwwanden' },
    ],
    ...images,
    heroImage: vouwwandImage,
    heroImageAlt: 'Houten vouwwand die de woonruimte met de tuin verbindt',
    choicesHeading: 'Afgestemd op uw woning',
    choicesIntroduction: 'Stel uw vouwwand samen op basis van afwerking, beglazing, paneelindeling en bediening.',
    choices: [
      {
        title: 'Kleur en afwerking',
        description: 'Kies een transparante of dekkende afwerking die wij zelf spuiten, passend bij uw gevel en interieur.',
        icon: 'paintbrush',
      },
      {
        title: 'Beglazing',
        description: 'Combineer de vouwwand met HR++ of triple glas, op maat besteld bij onze glasleverancier.',
        icon: 'mirror',
      },
      {
        title: 'Maatvoering',
        description: 'Het aantal panelen en de indeling stemmen we af op de gevelopening en het gewenste gebruik. Een van de delen kan worden uitgevoerd als loopdeur, zodat u niet steeds de volledige vouwwand hoeft te openen.',
        icon: 'ruler',
      },
      {
        title: 'Beslag',
        description: 'Rails, scharnieren, handgrepen en sluitwerk monteren we zelf, passend bij het formaat en de bediening van uw vouwwand.',
        icon: 'grid',
      },
    ],
    benefitsHeading: 'Waarom een houten vouwwand?',
    benefitsIntroduction: 'Een houten vouwwand combineert veel glas met een brede, flexibele opening naar buiten.',
    benefits: [
      {
        title: 'Brede, vrije opening',
        description: 'De panelen vouwen compact opzij, waardoor een groot deel van de gevelopening vrij komt.',
      },
      {
        title: 'Flexibele paneelindeling',
        description: 'Het aantal panelen wordt afgestemd op de ruimte en het gewenste gebruik.',
      },
      {
        title: 'Veel glas, brede verbinding',
        description: 'Gesloten zorgt de vouwwand voor veel daglicht, geopend ontstaat een brede verbinding met terras of tuin.',
      },
    ],
  },
} satisfies Record<string, ProductDetailConfig>;

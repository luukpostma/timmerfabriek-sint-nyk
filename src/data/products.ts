import type { ImageMetadata } from 'astro';
import beglazingImage from '../assets/images/Beglazing.webp';
import deurenImage from '../assets/images/Voordeur.webp';
import kozijnenImage from '../assets/images/Kozijnen.webp';
import schuifpuienImage from '../assets/images/Schuifpui.webp';
import vouwwandImage from '../assets/images/Vouwwand.webp';

export interface ProductCardItem {
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  image: ImageMetadata;
  alt: string;
  type: 'category' | 'product';
}

export const productDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

export const products: ProductCardItem[] = [
  {
    title: 'Kozijnen',
    eyebrow: 'Maatwerk',
    description:
      'Houten kozijnen op maat, van vast glas tot draaikiepramen, gemaakt in onze eigen werkplaats in Sint Nicolaasga.',
    href: '/kozijnen/',
    image: kozijnenImage,
    alt: 'Witte houten kozijnen in de gemetselde gevel van een woning',
    type: 'category',
  },
  {
    title: 'Deuren',
    eyebrow: 'Op maat',
    description:
      'Houten voor-, achter- en garagedeuren op maat, passend bij de stijl en maatvoering van uw woning.',
    href: '/deuren/',
    image: deurenImage,
    alt: 'Moderne donkerblauwe houten voordeur met zijlichten',
    type: 'category',
  },
  {
    title: 'Schuifpuien',
    eyebrow: 'Licht & ruimte',
    description:
      'Houten schuifpuien op maat voor een lichte, open verbinding tussen woning en tuin.',
    href: '/schuifpuien/',
    image: schuifpuienImage,
    alt: 'Houten schuifpui tussen een woonkamer en tuin',
    type: 'product',
  },
  {
    title: 'Beglazing',
    eyebrow: 'HR++ & triple glas',
    description:
      'Isolerende beglazing met HR++ of triple glas voor bestaande of nieuwe houten kozijnen.',
    href: '/beglazing/',
    image: beglazingImage,
    alt: 'Detail van isolerende beglazing in een wit houten kozijn',
    type: 'product',
  },
  {
    title: 'Vouwwand',
    eyebrow: 'Breed openen',
    description: 'Houten vouwwanden op maat om uw gevel in één keer breed te openen.',
    href: '/vouwwanden/',
    image: vouwwandImage,
    alt: 'Glazen vouwwand die een woonruimte met buiten verbindt',
    type: 'product',
  },
];

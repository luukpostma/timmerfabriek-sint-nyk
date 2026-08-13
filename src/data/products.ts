import type { ImageMetadata } from 'astro';
import beglazingImage from '../assets/images/Beglazing.webp';
import deurenImage from '../assets/images/Voordeur.webp';
import kozijnenImage from '../assets/images/Kozijnen.webp';
import schuifpuienImage from '../assets/images/Schuifpui.webp';
import vouwwandImage from '../assets/images/vouwwand.jpg';

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
    description: productDescription,
    href: '/kozijnen/',
    image: kozijnenImage,
    alt: 'Witte houten kozijnen in de gemetselde gevel van een woning',
    type: 'category',
  },
  {
    title: 'Deuren',
    eyebrow: 'Stijlvol & modern',
    description: productDescription,
    href: '/deuren/',
    image: deurenImage,
    alt: 'Moderne donkerblauwe houten voordeur met zijlichten',
    type: 'category',
  },
  {
    title: 'Schuifpuien',
    eyebrow: 'Populair',
    description: productDescription,
    href: '/schuifpuien/',
    image: schuifpuienImage,
    alt: 'Houten schuifpui tussen een woonkamer en tuin',
    type: 'product',
  },
  {
    title: 'Beglazing',
    eyebrow: 'HR+++',
    description: productDescription,
    href: '/beglazing/',
    image: beglazingImage,
    alt: 'Detail van isolerende beglazing in een wit houten kozijn',
    type: 'product',
  },
  {
    title: 'Vouwwand',
    eyebrow: 'Flexibel',
    description: productDescription,
    href: '/vouwwanden/',
    image: vouwwandImage,
    alt: 'Glazen vouwwand die een woonruimte met buiten verbindt',
    type: 'product',
  },
];

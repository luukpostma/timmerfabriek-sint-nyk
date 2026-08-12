import type { ImageMetadata } from 'astro';
import beglazingImage from '../assets/images/beglazing.jpg';
import deurenImage from '../assets/images/deuren.jpg';
import kozijnenImage from '../assets/images/kozijnen.jpg';
import schuifpuienImage from '../assets/images/schuifpuien.jpg';
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
    alt: 'Witte houten kozijnen in een gemetselde gevel',
    type: 'category',
  },
  {
    title: 'Deuren',
    eyebrow: 'Stijlvol & modern',
    description: productDescription,
    href: '/deuren/',
    image: deurenImage,
    alt: 'Moderne houten dubbele voordeur in een woning',
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
    alt: 'Houten deur met isolerende beglazing in een witte gevel',
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

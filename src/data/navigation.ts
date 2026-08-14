export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export const mainNavigation: NavigationItem[] = [
  {
    label: 'Kozijnen',
    href: '/kozijnen/',
    children: [
      { label: 'Vast glas kozijnen', href: '/kozijnen/vast-glas-kozijnen/' },
      { label: 'Draaikiepramen', href: '/kozijnen/draaikiepramen/' },
      { label: 'Draairamen', href: '/kozijnen/draairamen/' },
      { label: 'Deurkozijnen', href: '/kozijnen/deurkozijnen/' },
      { label: 'Binnendeurkozijnen', href: '/kozijnen/binnendeurkozijnen/' },
    ],
  },
  {
    label: 'Deuren',
    href: '/deuren/',
    children: [
      { label: 'Voordeuren', href: '/deuren/voordeuren/' },
      { label: 'Achterdeuren', href: '/deuren/achterdeuren/' },
      { label: 'Garagedeuren', href: '/deuren/garagedeuren/' },
      { label: 'Binnendeuren', href: '/deuren/binnendeuren/' },
    ],
  },
  { label: 'Schuifpuien', href: '/schuifpuien/' },
  { label: 'Beglazing', href: '/beglazing/' },
  { label: 'Vouwwanden', href: '/vouwwanden/' },
];

export const utilityNavigation: NavigationItem[] = [
  { label: 'Projecten', href: '/projecten/' },
  { label: 'Over ons', href: '/over-ons/' },
  { label: 'Voor aannemers', href: '/voor-aannemers/' },
  { label: 'Contact', href: '/contact/' },
];

export const callToAction = {
  label: 'Offerte aanvragen',
  href: '/contact/',
};

export const legalNavigation: NavigationItem[] = [
  { label: 'Privacyverklaring', href: '/privacyverklaring/' },
];

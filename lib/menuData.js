export const NAV_LINKS = [
  { id: 1, label: 'Anasayfa', href: '/' },
  { id: 2, 
    label: 'Kurumsal', 
    href: '#',
    isMega: true,
    columns: [
      [
        { label: 'Hakkımızda', href: '#' },
        { label: 'Misyon & Vizyon', href: '#' },
      ],
      [
        { label: 'Kalite Politikalarımız', href: '#' },
        { label: 'Belgelerimiz', href: '#' },
      ]
    ]
  },
  {
    id: 3,
    label: 'Ürünlerimiz',
    href: '#',
    isMega: true,
    columns: [
      [
        { label: "60'lık seri Momentum", href: '/momentum-60' },
        { label: "70'lik seri Dinamic", href: '/dinamic-70' },
        { label: "80'lik seri Energy", href: '/energy-80' },
      ],
      [
        { label: "Easyslide Sürme Seri", href: '/easyslide-surme-seri' },
        { label: "Isı Yalıtımlı seri Isotherm", href: '/isotherm' },
      ]
    ]
  },
//   { id: 4, label: 'İhracat', href: '#' },
//   { id: 5, label: 'Haberler', href: '#' },
//   { id: 6, label: 'Bayiler', href: '#' },
  { id: 7, label: 'İletişim', href: '/iletisim' },
];
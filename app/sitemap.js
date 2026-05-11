// app/sitemap.js
export default function sitemap() {
  const baseUrl = 'https://veraplastpvc.com.tr';
  
  const routes = [
    '',
    '/hakkimizda',
    '/iletisim',
    '/urunler',
    '/projeler',
  ];
  
  const locales = ['tr', 'en'];
  const urls = [];
  
  locales.forEach(locale => {
    routes.forEach(route => {
      urls.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  return urls;
}
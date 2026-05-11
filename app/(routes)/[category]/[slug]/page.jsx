import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { dinamic } from '@/lib/products/dinamic';
import { momentum } from '@/lib/products/momentum';
import { easyslide } from '@/lib/products/easyslide';
import { energy } from '@/lib/products/energy';
import { isotherm } from '@/lib/products/isotherm';
import Container from '@/components/ui/container';
import ColorPaletteSlider from '@/components/color-palette/color-palette-slider';

// Kategori yapılandırması
const categoryConfig = {
  'momentum-60': {
    name: '60\'lık seri',
    products: momentum,
    basePath: '/momentum-60'
  },
  'dinamic-70': {
    name: '70\'lik seri', 
    products: dinamic,
    basePath: '/dinamic-70'
  },
  'energy-80': {
    name: '80\'lik seri',
    products: energy,
    basePath: '/energy-80'
  },
  'easyslide-surme-seri': {
    name: 'Easyslide Sürme Seri',
    products: easyslide,
    basePath: '/easyslide-surme-seri'
  },  
  'isotherm': {
    name: 'Isı Yalıtımlı seri',
    products: isotherm,
    basePath: '/isotherm'
  }
};

export async function generateStaticParams() {
  const params = [];
  
  Object.entries(categoryConfig).forEach(([category, config]) => {
    config.products.forEach((product) => {
      params.push({
        category,
        slug: product.slug
      });
    });
  });
  
  return params;
}

export async function generateMetadata({ params }) {
  const { category, slug } = params;
  const config = categoryConfig[category];
  
  if (!config) {
    return { title: 'Kategori Bulunamadı' };
  }
  
  const product = config.products.find((p) => p.slug === slug);
  
  if (!product) {
    return { title: 'Ürün Bulunamadı' };
  }

  return {
    title: `${product.title} - Novatech PVC`,
    description: `${product.title} ${config.name.toLowerCase()} modelinin teknik özellikleri ve detayları.`,
  };
}

export default function ProductDetailPage({ params }) {
  const { category, slug } = params;
  const config = categoryConfig[category];
  
  if (!config) {
    notFound();
  }
  
  const product = config.products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-64 mb-4 lg:mb-20 bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: `url(/product-lists/page-bg.jpg)` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white uppercase tracking-wider mb-4">{config.name}</h1>
          <ul className="flex items-center justify-center space-x-2 text-sm max-lg:flex-wrap">
            <li><a href="/" className="text-white hover:text-gray-200 transition-colors" title="Ana Sayfa">ANASAYFA</a></li>
            <li className="text-white">/</li>
            <li>
              <a href={config.basePath} className="text-gray-200 hover:text-white transition-colors" title={config.name}>
                {config.name.toUpperCase()}
              </a>
            </li>
            <li className="text-white">/</li>
            <li className="text-gray-200">{product.title}</li>
          </ul>
        </div>
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 mb-16 max-lg:px-4">
          {/* Product Image */}
          <div className="relative h-96 lg:h-full min-h-[500px] bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-6">{product.title}</h2>
            
            {/* Technical Specifications */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-6">Teknik Özellikler</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center">
                  <span className="block text-xl lg:text-3xl font-bold text-slate-900 mb-2">{product.specs.sealCount}</span>
                  <span className="text-sm uppercase font-semibold text-slate-400">Conta Sayısı</span>
                </div>
                
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center">
                  <span className="block text-xl lg:text-3xl font-bold text-slate-900 mb-2">{product.specs.chamberCount}</span>
                  <span className="text-sm uppercase font-semibold text-slate-400">Oda Sayısı</span>
                </div>
                
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center">
                  <span className="block text-xl lg:text-3xl font-bold text-slate-900 mb-2">{product.specs.profileWidth}</span>
                  <span className="text-sm uppercase font-semibold text-slate-400">Profil Genişliği (mm)</span>
                </div>
                
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center">
                  <span className="block text-xl lg:text-3xl font-bold text-slate-900 mb-2">{product.specs.systemName}</span>
                  <span className="text-sm uppercase font-semibold text-slate-400">Sistem</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-slate-700 mb-2">
                  <span className="font-semibold">Sistem Açıklaması:</span> {product.specs.systemExp}
                </p>
                {product.specs.profileClass && (
                  <p className="text-slate-700">
                    <span className="font-semibold">Profil Sınıfı:</span> {product.specs.profileClass}
                  </p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            {/* <div className="flex gap-4">
              <Link 
                href="/iletisim" 
                className="flex-1 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold text-center hover:bg-slate-800 transition-colors"
              >
                Teklif Al
              </Link>
              <Link 
                href={config.basePath} 
                className="flex-1 bg-white text-slate-900 border-2 border-slate-900 px-8 py-4 rounded-xl font-semibold text-center hover:bg-slate-50 transition-colors"
              >
                Tüm {config.name}
              </Link>
            </div> */}

          </div>
        </div>

        <ColorPaletteSlider />

        {/* Related Products */}
        {config.products.filter((p) => p.slug !== product.slug).length >= 4 && (
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Diğer {config.name} Modelleri</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-lg:px-4">
              {config.products
                .filter((p) => p.slug !== product.slug)
                .slice(0, 4)
                .map((item) => (
                  <Link key={item.id} href={`/${category}/${item.slug}`} className="block">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                      <div className="relative w-full h-32 mb-4">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-center text-slate-800">{item.title}</h4>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        )}

      </Container>
    </section>
  );
}

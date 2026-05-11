import { energy } from '@/lib/products/energy';
import ProductCard from '@/components/static-novatech/productList/productCard';
import Container from '@/components/ui/container';

export default function ProductsPage() {
  return (
    <section className="bg-slate-50 min-h-screen pb-20">
      <div className="relative h-64 mb-10 lg:mb-20 bg-cover bg-center bg-no-repeat flex items-center justify-center" style={{ backgroundImage: `url(/product-lists/page-bg.jpg)` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white uppercase tracking-wider mb-4">ENERGY</h1>
          <ul className="flex items-center justify-center space-x-2 text-sm">
            <li><a href="/" className="text-white hover:text-gray-200 transition-colors" title="Ana Sayfa">ANASAYFA</a></li>
            <li className="text-white">/</li>
            <li className="text-gray-200"><a href="/energy-80" className="text-gray-200 hover:text-white transition-colors" title="Kapılar">ENERGY</a></li>
          </ul>
        </div>
      </div>
      <Container>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-lg:px-4">
          {energy.map((item) => (
            <ProductCard key={item.id} product={item} category="energy-80" />
          ))}
        </div>
      </Container>
    </section>
  );
}
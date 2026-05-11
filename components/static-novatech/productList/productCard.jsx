import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product, category = 'kapi' }) {
  return (
    <Link href={`/${category}/${product.slug}`} className="block">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-md transition-shadow lg:hover:-translate-y-6 lg:hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)]">
      {/* Image Container */}
      <div className="relative w-full h-56 mb-6">
        <Image 
          src={product.image} 
          alt={product.title} 
          fill 
          className="object-contain"
        />
      </div>
      
      {/* Product Title */}
      <h3 className="text-xl font-bold text-center text-slate-800 mb-8 tracking-tight line-clamp-2 h-14 flex items-center justify-center">
        {product.title}
      </h3>
      
      {/* Quick Specs Boxes */}
      <div className="flex gap-4 mb-8">
        <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl py-3 text-center">
          <span className="block text-xl font-bold text-slate-900">{product.specs.sealCount}</span>
          <span className="text-[10px] uppercase font-semibold text-slate-400">Conta Sayısı</span>
        </div>
        <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl py-3 text-center">
          <span className="block text-xl font-bold text-slate-900">{product.specs.chamberCount}</span>
          <span className="text-[10px] uppercase font-semibold text-slate-400">Oda Sayısı</span>
        </div>
      </div>
      
      {/* Technical Details */}
      <div className="product-features pt-6 text-sm border-t border-slate-100">
        <div className="feature bg-gray-50 rounded-lg p-4 text-[12px]">
          <p className="text-slate-700">Profil Genişliği: {product.specs.profileWidth}mm</p>
          <hr className="my-2 border-slate-200" />
          <p className="text-slate-700">{product.specs.systemName}: {product.specs.systemExp}</p>
        </div>
      </div>
    </div>
    </Link>
  );
}
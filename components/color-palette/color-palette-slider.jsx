'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useEffect } from 'react';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ColorPaletteSlider = () => {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="color-palette"]', {
      infinite: true,
      keyboard: {
        Escape: 'close',
        Delete: 'close',
        Backspace: 'close',
        ArrowLeft: 'prev',
        ArrowRight: 'next',
      },
      toolbar: {
        display: [
          'zoom',
          'slideshow',
          'fullscreen',
          'download',
          'thumbs',
          'close',
        ],
      },
      caption: function (fancybox, slide) {
        return slide.caption || '';
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  const colors = [
    { name: 'S.GOLDEN OAK', src: 'https://cdn.designfast.io/image/2026-01-25/03c8c18b-5391-4a4e-a86f-ee14ad11093b.jpeg' },
    { name: 'P.DARK OAK - ST541', src: 'https://cdn.designfast.io/image/2026-01-25/72b50503-5eda-44b3-800c-a25f16e689f1.jpeg' },
    { name: 'SWAMP OAK - ST503', src: 'https://cdn.designfast.io/image/2026-01-25/70d3d714-d72d-4be4-ac7f-bce2b3b45c9c.jpeg' },
    { name: 'WHITE - ST517', src: 'https://cdn.designfast.io/image/2026-01-25/5005d907-d4c1-4b7f-98fd-cdb7f21c5c31.png' },
    { name: 'GREY SAND - AS509', src: 'https://cdn.designfast.io/image/2026-01-25/b47428c0-0225-4a42-8701-65a96326e890.jpeg' },
    { name: 'ANTHRACITE GREY - ST508', src: 'https://cdn.designfast.io/image/2026-01-25/8b37aed7-1f0d-4fe9-8fd6-544f5cbe7da3.jpeg' },
    { name: 'MATTE DARK BLACK - AS520', src: 'https://cdn.designfast.io/image/2026-01-25/1d7284d0-9d27-4b56-b9cf-038eb1005f03.jpeg' },
    { name: 'AnTeak', src: 'https://cdn.designfast.io/image/2026-01-25/c957e4f9-5dd3-4275-b9e6-b7a7fb4dce40.png' },
    { name: 'POLISH PINE', src: 'https://cdn.designfast.io/image/2026-01-25/3a4a3bbf-a75a-4597-969d-83f00090998c.png' },
  ];

  return (
    <div className="mb-16">
      <h3 className="text-xl font-bold text-slate-900 my-4 px-4">Renk Paleti</h3>
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          slidesPerView={8}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          breakpoints={{
            0: {
              slidesPerView: 2.3,
            },
            640: {
              slidesPerView: 3.3,
            },
            768: {
              slidesPerView: 4.3,
            },
            1024: {
              slidesPerView: 6,
            },
            1280: {
              slidesPerView: 8,
            },
          }}
          className="color-palette-swiper"
        >
          {colors.map((color, index) => (
            <SwiperSlide key={index}>
              <div className="text-center">
                <div 
                  className="relative w-[125px] h-[180px] mx-auto mb-3 bg-gray-200 border-2 border-gray-300 cursor-pointer hover:border-blue-400 transition-colors"
                  data-fancybox="color-palette"
                  data-src={color.src}
                  data-caption={color.name}
                >
                  <Image
                    src={color.src}
                    alt={color.name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-bold text-slate-700">{color.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Navigation Buttons */}
        <div className="swiper-button-prev !text-slate-600 !left-0"></div>
        <div className="swiper-button-next !text-slate-600 !right-0"></div>
      </div>
    </div>
  );
};

export default ColorPaletteSlider;

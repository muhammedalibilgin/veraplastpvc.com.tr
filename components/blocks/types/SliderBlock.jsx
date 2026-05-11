"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";

const SliderBlock = ({ data }) => {
    if (!data?.slides || !Array.isArray(data.slides)) return null;
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="relative w-full">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                className="w-full"
            >
                {data.slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full aspect-[1080/1620] md:aspect-[21/9] lg:aspect-[25/9]">
                            {/* Mobil için farklı resim */}
                            <picture>
                                <source media="(max-width: 767px)" srcSet={slide.mobileImageUrl || slide.imageUrl} />
                                <Image src={slide.imageUrl} alt={slide.alt || `Slide ${index + 1}`} fill className="object-cover" priority={index < 2} />
                            </picture>
                            <div className="absolute inset-0 bg-black bg-opacity-40">
                                <div className="h-full w-full flex items-center justify-center text-center">
                                    <div className="max-w-4xl px-4">
                                        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{slide.title}</h1>
                                        <p className="text-white text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">{slide.description}</p>
                                        {slide.buttonText && (
                                            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-lg flex items-center gap-2 mx-auto transition-colors">
                                                {slide.buttonText}
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Sol taraftaki slayt göstergesi */}
            <div className="absolute bottom-3 lg:left-5 lg:top-1/2 transform -translate-y-1/2 z-10 max-lg:left-0 max-lg:right-0 max-lg:mr-auto max-lg:ml-auto">
                <div className="flex lg:flex-col max-lg:flex-row max-lg:justify-center items-center space-y-2 max-lg:space-y-0 gap-3">
                    {data.slides.map((_, index) => (
                        <div key={index} className="flex flex-col items-center max-lg:min-h-[44px] max-lg:m-0 max-lg:justify-end">
                            {currentSlide === index && <div className="text-white text-2xl font-bold mb-1">{index + 1}</div>}
                            <div className={`h-0.5 ${currentSlide === index ? "bg-[#fbde2e] w-11" : "bg-[rgba(221,221,221,.5)] w-6"}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SliderBlock;

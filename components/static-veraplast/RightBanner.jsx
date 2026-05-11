import React from 'react';
import Image from 'next/image';

const RightBanner = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  subtitle, 
  description, 
  buttonText, 
  buttonLink,
  className = ""
}) => {
  return (
    <div className={`flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 py-6 px-4 lg:py-16 ${className}`}>
      {/* Sol Taraf - Yazı ve Buton */}
      <div className="flex justify-end w-full lg:w-[60vw]">
        <div className="wrapper space-y-6 lg:max-w-[30vw] lg:mr-[10vw]">
            {title && (
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {title}
            </h2>
            )}
            
            {subtitle && (
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-800">
                {subtitle}
            </h3>
            )}
            
            {description && (
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                {description}
            </p>
            )}
            
            {buttonText && (
            <a 
                href={buttonLink || "#"}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
                {buttonText}
                <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
                </svg>
            </a>
            )}
        </div>
      </div>
      
      {/* Sağ Taraf - Resim */}
      <div className="w-full lg:w-[40vw]">
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src={imageSrc}
            alt={imageAlt || title || "Banner görseli"}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RightBanner;

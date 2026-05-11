// const FooterClient = ({ html }) => {
//     // Eğer html bir stringse, JSON.parse() ile dönüştür
//     let parsedHtml;
//     try {
//         parsedHtml = JSON.parse(html);
//     } catch (e) {
//         console.error("HTML parse hatası:", e);
//     }

//     return (
//         <div
//             dangerouslySetInnerHTML={{ __html: parsedHtml?.code || "<p>Footer içeriği bulunamadı.</p>" }}
//         />
//     );
// };

// export default FooterClient;

"use client";

import { FacebookIcon, Instagram, Youtube, Linkedin, Phone, Mail, ChevronDown } from "lucide-react";
import { useState } from 'react';
import Link from "next/link";

const FooterClient = () => {
    const [openSections, setOpenSections] = useState({
        firma: false,
        urunler: false,
        baglantilar: false,
        iletisim: false
    });

    const toggleSection = (section) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };
    return (
        <footer className="bg-gray-900 text-white max-lg:text-center">
            {/* Üst Kısım - Logo, İletişim, Sosyal Medya */}
            <div className="border-b border-gray-700">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-x-10 gap-y-6">
                        {/* Logo */}
                        <div className="mb-6 md:mb-0">
                            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                                {/* <img src="/novatech-logo.jpg" alt="Novatech PVC" className="h-12 w-auto border-r-[12px] border-r-white" /> */}
                                <span className="text-2xl font-bold text-white">VERAPLASTPVC</span>
                            </Link>
                        </div>
                        
                        {/* İletişim Bilgileri */}
                        <div className="flex flex-col lg:flex-row gap-3 items-center md:items-start mb-6 md:mb-0">
                            <div className="border-r border-gray-600/20 lg:mr-10 lg:pr-10">
                                <h4 className="text-lg font-bold">Telefon:</h4>
                                <a href="tel:+905456779025" className="text-gray-300 hover:text-white transition-colors">+90 545 677 90 25</a>
                                <p className="text-sm text-gray-400 mt-1">İletişim numarasını kullanarak bizlerle iletişime geçebilirsiniz</p>
                            </div>
                            {/* <div>
                                <h4 className="text-lg font-bold">E-Posta:</h4>
                                <a href="mailto:info@novatechpvc.com.tr" className="text-gray-300 hover:text-white transition-colors">info@novatechpvc.com.tr</a>
                                <p className="text-sm text-gray-400 mt-1">Dilerseniz taleplerinizi e-posta yoluyla iletebilirsiniz</p>
                            </div> */}
                        </div>
                        
                        {/* Sosyal Medya İkonları */}
                        <div className="flex gap-4">
                            <a href="javascript:void(0);" className="flex items-center justify-center text-white text-decoration-none transition-transform hover:scale-110" style={{width: '40px', height: '40px', backgroundColor: '#3b5998', fontSize: '18px', borderRadius: '4px'}} target="_blank" aria-label="Facebook">
                                <svg width="18" height="18" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"/></svg>
                            </a>
                            <a href="javascript:void(0);" className="flex items-center justify-center text-white text-decoration-none transition-transform hover:scale-110" style={{width: '40px', height: '40px', backgroundColor: '#e1306c', fontSize: '18px', borderRadius: '4px'}} target="_blank" aria-label="Instagram">
                                <svg width="18" height="18" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                            </a>
                            <a href="javascript:void(0);" className="flex items-center justify-center text-white text-decoration-none transition-transform hover:scale-110" style={{width: '40px', height: '40px', backgroundColor: '#ff0000', fontSize: '18px', borderRadius: '4px'}} target="_blank" aria-label="YouTube">
                                <svg width="18" height="18" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"/></svg>                            </a>
                            <a href="javascript:void(0);" className="flex items-center justify-center text-white text-decoration-none transition-transform hover:scale-110" style={{width: '40px', height: '40px', backgroundColor: '#0077b5', fontSize: '18px', borderRadius: '4px'}} target="_blank" aria-label="LinkedIn">
                                <svg width="18" height="18" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z"/></svg>                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Alt Kısım - Link Sütunları */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-8">
                    {/* Firma Hakkında */}
                    <div className="footer-section">
                        <button 
                            onClick={() => toggleSection('firma')}
                            className="text-lg font-semibold mb-4 lg:cursor-default hover:text-white transition-colors lg:pointer-events-none"
                        >
                            <span>FİRMA HAKKINDA</span>
                        </button>
                        <ul className={`space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${openSections.firma ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} lg:max-h-none lg:opacity-100 lg:block`}>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hakkımızda</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Misyon ve Vizyon</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Kalite Politikalarımız</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Belgelerimiz</a></li>
                        </ul>
                    </div>
                    
                    {/* Ürünler */}
                    <div className="footer-section">
                        <button 
                            onClick={() => toggleSection('urunler')}
                            className="text-lg font-semibold mb-4 lg:cursor-default hover:text-white transition-colors lg:pointer-events-none"
                        >
                            <span>ÜRÜNLER</span>
                        </button>
                        <ul className={`space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${openSections.urunler ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} lg:max-h-none lg:opacity-100 lg:block`}>
                            <li><a href="/momentum-60" className="text-gray-300 hover:text-white transition-colors">Momentum</a></li>
                            <li><a href="/dinamic-70" className="text-gray-300 hover:text-white transition-colors">Dinamic</a></li>
                            <li><a href="/energy-80" className="text-gray-300 hover:text-white transition-colors">Energy</a></li>
                            <li><a href="/easyslide-surme-seri" className="text-gray-300 hover:text-white transition-colors">Easyslide</a></li>
                            <li><a href="/isotherm" className="text-gray-300 hover:text-white transition-colors">Isotherm</a></li>
                        </ul>
                    </div>
                    
                    {/* Bağlantılar */}
                    <div className="footer-section">
                        <button 
                            onClick={() => toggleSection('baglantilar')}
                            className="text-lg font-semibold mb-4 lg:cursor-default hover:text-white transition-colors lg:pointer-events-none"
                        >
                            <span>BAĞLANTILAR</span>
                        </button>
                        <ul className={`space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${openSections.baglantilar ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} lg:max-h-none lg:opacity-100 lg:block`}>
                            <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Anasayfa</a></li>
                            <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white transition-colors">Hakkımızda</a></li>
                            <li><a href="javascript:void(0)" className="text-gray-300 hover:text-white transition-colors">Ürünlerimiz</a></li>
                            <li><a href="/iletisim" className="text-gray-300 hover:text-white transition-colors">İletişim</a></li>
                        </ul>
                    </div>
                    
                    {/* İletişim Bilgileri */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">İLETİŞİM BİLGİLERİ</h3>
                        <div className="space-y-2 text-gray-300">
                            <p className="text-sm">Güzelburç Mahallesi – Antakya/HATAY</p>
                            <p className="text-sm"><a href="tel:+905456779025" className="text-gray-300 hover:text-white transition-colors">+90 545 677 90 25</a></p>
                            {/* <p className="text-sm"><a href="mailto:info@novatechpvc.com.tr" className="text-gray-300 hover:text-white transition-colors">info@novatechpvc.com.tr</a></p> */}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-gray-700 py-4">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm text-gray-400">© Copyright 2025 | Tüm Hakları Saklıdır.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterClient;

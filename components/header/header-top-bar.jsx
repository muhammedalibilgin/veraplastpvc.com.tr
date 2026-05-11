"use client";

import Cookies from "js-cookie";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useLanguage } from "@/components/intl-provider-wrapper";
import { useState, useEffect } from "react";
import getAnnouncementBar from "@/actions/customize/header/get-announcement-bar";
import ContainerFluid from "../ui/container-fluid";

const localeNames = {
    tr: "Türkçe",
    en: "English",
    de: "Deutsch",
    fr: "Français",
    es: "Español",
    it: "Italiano",
    ru: "Русский",
    ar: "العربية",
};

const HeaderTopBar = () => {
    const { locale, setLocale, supportedLanguages } = useLanguage();
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                const response = await getAnnouncementBar(locale);
                const data = await response.json();
                if (data?.isActive && Array.isArray(data.items)) {
                    setAnnouncements(data.items);
                }
            } catch (error) {
                console.error("Error fetching announcements:", error);
            }
        };
        fetchAnnouncements();
    }, []);

    const changeLanguage = (lang) => {
        setLocale(lang);
        Cookies.set("NEXT_LOCALE", lang, { expires: 365 });
        window.location.reload();
    };

    return (
        <ContainerFluid>
            <div className="bg-black text-white text-sm">
                <div className="mx-auto flex justify-between items-center py-2 px-4">
                    {/* Left Section */}
                    <div className="flex-1"></div>

                    {/* Center Section */}
                    <div className="flex-1 text-center overflow-hidden">
                        <div className="relative">
                            {announcements && announcements?.length > 1 ? (
                                <Swiper
                                    direction="vertical"
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    className="h-6"
                                >
                                    {announcements.map((announcement, index) => (
                                        <SwiperSlide key={index}>
                                            <p className="whitespace-nowrap" dangerouslySetInnerHTML={{ __html: announcement.message }} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            ) : announcements?.length === 1 ? (
                                <p className="whitespace-nowrap" dangerouslySetInnerHTML={{ __html: announcements[0].message }} />
                            ) : null}
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex-1 flex justify-end space-x-4">
                        <select value={locale} onChange={(e) => changeLanguage(e.target.value)} className="bg-black text-white px-2 py-1 rounded">
                            {supportedLanguages.map((langCode) => (
                                <option key={langCode} value={langCode}>
                                    {localeNames[langCode] || langCode.toUpperCase()}
                                </option>
                            ))}
                        </select>
                        {/* <select className="bg-black text-white px-2 py-1 rounded">
                        <option value="usd">USD</option>
                        <option value="try">TRY</option>
                        <option value="eur">EUR</option>
                    </select> */}
                    </div>
                </div>
            </div>
        </ContainerFluid>
    );
};

export default HeaderTopBar;

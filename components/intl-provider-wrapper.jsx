"use client";

import { IntlProvider } from "react-intl";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

import fetchLanguageSettings from "@/actions/settings/get-language";
import LoadingScreen from "@/components/loading";

async function loadMessages(locale) {
    try {
        const messages = await import(`../locales/${locale}.json`);
        return messages.default;
    } catch (error) {
        console.warn(`${locale} mesaj dosyası bulunamadı, İngilizce kullanılacak`);
        const fallbackMessages = await import("../locales/en.json");
        return fallbackMessages.default;
    }
}

const LanguageContext = createContext({
    locale: "tr",
    setLocale: (lang) => {},
    supportedLanguages: ["tr", "en", "de"],
});

export function IntlProviderWrapper({ children }) {
    const [locale, setLocaleState] = useState("tr");
    const [supportedLanguages, setSupportedLanguages] = useState(["tr", "en"]);
    const [messages, setMessages] = useState(null);

    useEffect(() => {
        const initializeLanguageSettings = async () => {
            try {
                const settings = await fetchLanguageSettings();
                if (settings) {
                    setSupportedLanguages(settings.supportedLocales || ["tr", "en"]);
                    // Varsayılan dili belirle
                    const defaultLocale = settings.defaultLocale || "tr";

                    // Çerezden kaydedilmiş dili kontrol et
                    let savedLang = Cookies.get("NEXT_LOCALE");

                    if (savedLang && settings.supportedLocales?.includes(savedLang)) {
                        setLocaleState(savedLang);
                    } else {
                        setLocaleState(defaultLocale);
                        Cookies.set("NEXT_LOCALE", defaultLocale, { expires: 365 });
                    }

                    // Mesajları yükle
                    const localeMessages = await loadMessages(savedLang || defaultLocale);
                    setMessages({ [savedLang || defaultLocale]: localeMessages });
                }
            } catch (error) {
                console.error("Dil ayarları yüklenirken hata:", error);
                setSupportedLanguages(["tr", "en"]);
                setLocaleState("tr");

                const fallbackMessages = await loadMessages("tr");
                setMessages({ tr: fallbackMessages });
            }
        };

        initializeLanguageSettings();
    }, []);

    const setLocale = async (lang) => {
        if (!supportedLanguages.includes(lang)) return;

        try {
            if (!messages?.[lang]) {
                const localeMessages = await loadMessages(lang);
                setMessages((prev) => ({ ...prev, [lang]: localeMessages }));
            }

            setLocaleState(lang);
            Cookies.set("NEXT_LOCALE", lang, { expires: 365 });
        } catch (error) {
            console.error("Dil değiştirilirken hata:", error);
        }
    };

    return (
        <LanguageContext.Provider value={{ locale, setLocale, supportedLanguages }}>
            <IntlProvider locale={locale} messages={messages?.[locale] || {}}>
                {!messages ? <LoadingScreen /> : children}
            </IntlProvider>
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}

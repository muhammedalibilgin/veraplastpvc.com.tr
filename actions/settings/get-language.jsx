const URL = `${process.env.NEXT_PUBLIC_API_URL}/customize/settings/language`;

const fetchLanguageSettings = async () => {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            console.warn("Language settings could not be loaded, using defaults");
            return {
                defaultLocale: "tr",
                supportedLocales: ["tr", "en"],
            };
        }
        return await response.json();
    } catch (error) {
        console.error("Language settings could not be loaded:", error);
        return {
            defaultLocale: "tr",
            supportedLocales: ["tr", "en"],
        };
    }
};

export default fetchLanguageSettings;

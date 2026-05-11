const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
const URL = `${API_URL}/customize/blocks`;

const getBlocks = async (locale = "tr") => {
    try {
        // Timeout ile fetch çağrısı - 5 saniye içinde cevap gelmezse vazgeç
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const res = await fetch(`${URL}?locale=${locale}`, {
            cache: "no-store",
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!res.ok) {
            console.warn('Blocks API response not ok, using empty array');
            return [];
        }

        return await res.json();
    } catch (error) {
        // Sadece development'da göster, production'da sessiz kal
        if (process.env.NODE_ENV === 'development') {
            console.warn('Backend not available, using empty blocks:', error.message);
        }
        return [];
    }
}

export default getBlocks;
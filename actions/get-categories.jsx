const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
const URL = `${API_URL}/categories`;

const getCategories = async () => {
    try {
        // Timeout ile fetch çağrısı - 5 saniye içinde cevap gelmezse vazgeç
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const res = await fetch(URL, { 
            cache: "no-store",
            signal: controller.signal 
        });
        
        clearTimeout(timeoutId);
        
        if (!res.ok) {
            console.warn('Categories API response not ok, using empty array');
            return [];
        }
        return await res.json();

    } catch (error) {
        // Sadece development'da göster, production'da sessiz kal
        if (process.env.NODE_ENV === 'development') {
            console.warn('Backend not available, using empty categories:', error.message);
        }
        return [];
    }
}

export default getCategories;
import Container from "../ui/container";

const StatisticsBanner = () => {
    return (
        <div className="py-12 px-4" style={{backgroundColor: 'rgb(89, 89, 89)'}}>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* 1. Kolon - Açık Alan */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 mb-4">
                            <img src="/statistics/acik-alan.png" alt="Açık Alan" className="w-full h-full object-contain" />
                        </div>
                        <div className="text-5xl lg:text-7xl font-bold text-white mb-2">9000</div>
                        <div className="text-gray-300">m² Açık Alan</div>
                    </div>
                    
                    {/* 2. Kolon - Kapalı Alan */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 mb-4">
                            <img src="/statistics/kapali-alan.png" alt="Kapalı Alan" className="w-full h-full object-contain" />
                        </div>
                        <div className="text-5xl lg:text-7xl font-bold text-white mb-2">22000</div>
                        <div className="text-gray-300">m² Kapalı Alan</div>
                    </div>
                    
                    {/* 3. Kolon - Pencere/Kapı */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 mb-4">
                            <img src="/statistics/pencere.png" alt="Pencere/Kapı" className="w-full h-full object-contain" />
                        </div>
                        <div className="text-5xl lg:text-7xl font-bold text-white mb-2">1000</div>
                        <div className="text-gray-300">Adet Pencere/Kapı</div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default StatisticsBanner;

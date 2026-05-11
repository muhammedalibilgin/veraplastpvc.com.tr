// import getBillboard from "@/actions/get-billboard";
// import getProducts from "@/actions/get-products";
// import Billboard from "@/components/billboard";
// import ProductList from "@/components/product-list";
// import Container from "@/components/ui/container";
import ContainerFluid from "@/components/ui/container-fluid";
import getBlocks from "@/actions/get-blocks";
// import BlockRenderer from "@/components/blocks/BlockRenderer";
import SliderBlock from "@/components/blocks/types/SliderBlock";
import Categories from "@/components/static-veraplast/categories";
import RightBanner from "@/components/static-veraplast/RightBanner";
import LeftBanner from "@/components/static-veraplast/LeftBanner";
// import StatisticsBanner from "@/components/static-veraplast/StatisticsBanner";
import { sliderData } from "@/lib/sliderData";

export const revalidate = 60;

const HomePage = async () => {
    const response = await getBlocks();
    // const blocks = response?.blocks || [];

    return (
        <ContainerFluid>
            <div className="pb-10">
                {/* <BlockRenderer blocks={blocks} /> */}
                <SliderBlock data={sliderData} />
                <Categories />
                <RightBanner imageSrc="/industrial-tools.jpg" imageAlt="22 Yıllık Tecrübe" title="22 Yıllık Tecrübe" subtitle="3 Kıtada 10´larca Ülkeye İhracat" description="1999'dan bu yana sektördeki lider konumumuzla, 3 kıtada onlarca ülkeye kaliteli ürünlerimizle ihracat yapıyoruz. Müşteri memnuniyetini ön planda tutarak, uluslararası standartlarda üretim gerçekleştiriyoruz." buttonText="FIRMA HAKKINDA" buttonLink="/hakkimizda" />
                <LeftBanner imageSrc="/male-worker-factory.jpg" imageAlt="Yüksek Kalite Standartları" title="Yüksek Kalite Standartları" subtitle="TSE ve CE Belgeleri" description="Ürünlerimiz, uluslararası kalite standartlarına uygun olarak üretilmektedir. TSE ve CE belgeleriyle kalitemizi tescil ediyoruz." buttonText="BELGELERİMİZ" buttonLink="/belgeler" />
                <RightBanner imageSrc="/industrial-tools.jpg" imageAlt="Misyon ve Vizyon" title="Misyon ve Vizyon" subtitle="" description="Önümüzdeki yillar içinde, sektörde öncü bir rol üstlenmek ve müsterilerimize dünya standartlarinda ürünler sunmak amaciyla, en modern teknolojilere sahip üretim tesislerini kurmak ve çalisanlarimizin egitimlerini sürekli olarak güncel tutmak. Ayrica, çalisanlarimizin verimli ve güvenli bir çalisma ortami saglamak için her türlü önlemi almayi hedefliyoruz." buttonText="MİSYON VE VİZYON" buttonLink="/misyon-ve-vizyon" />
                {/* <StatisticsBanner /> */}
            </div>
        </ContainerFluid>
    );
};

export default HomePage;

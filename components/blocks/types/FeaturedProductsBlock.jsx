import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

const FeaturedProductsBlock = ({ data }) => {
    if (!data || !data.products) return null;
    
    return (
        <div className="pb-10">
            <Container>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList 
                        title={data.title || "Products"} 
                        items={data.products} 
                    />
                </div>
            </Container>
        </div>
    );
};

export default FeaturedProductsBlock;

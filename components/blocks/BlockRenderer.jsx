'use client';

import FeaturedProductsBlock from "./types/FeaturedProductsBlock";
import SpecialCodeBlock from "./types/SpecialCodeBlock";
import SliderBlock from "./types/SliderBlock";

const blockComponents = {
    'special-code': SpecialCodeBlock,
    'slider': SliderBlock,
    'featured-products': FeaturedProductsBlock
};

const BlockRenderer = ({ blocks }) => {
    if (!blocks || blocks.length === 0) {
        return null;
    }

    const sortedBlocks = [...blocks].sort((a, b) => a.order - b.order);

    return (
        <div className="space-y-10">
            {sortedBlocks.map((block) => {
                const BlockComponent = blockComponents[block.type];
                
                if (!BlockComponent) {
                    console.warn(`Block type '${block.type}' not found`);
                    return null;
                }

                // content içindeki veriyi data prop'u olarak iletiyoruz
                return (
                    <div key={block.id} className={`block-${block.type}`}>
                        <BlockComponent data={block.content} />
                    </div>
                );
            })}
        </div>
    );
};

export default BlockRenderer;

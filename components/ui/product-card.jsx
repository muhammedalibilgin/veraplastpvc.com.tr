"use client";

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

const ProductCard = ({ data }) => {
    const cart = useCart();
    const previewModal = usePreviewModal();
    const router = useRouter();

    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    };

    const onPreview = (event) => { 
        event.stopPropagation();
        previewModal.onOpen(data);
    };

    const onAddToCart = (event) => { 
        event.stopPropagation();
        cart.addItem(data);
    };

    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-x-4">
            {/* {images && actions} */}
            <div className="aspect-square rounded-xl  bg-gray-100 relative">
                <Image alt="product image" src={data?.images?.[0]?.url} fill className="aspect-square object-cover rounded-md" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={true} />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton onClick={onPreview} icon={<Expand size={20} className="text-gray-600" />} />
                        <IconButton onClick={onAddToCart} icon={<ShoppingCart size={20} className="text-gray-600" />} />
                    </div>
                </div>
            </div>
            {/* desription */}
            <div>
                <p className="font-semibold text-lg">{data.name} </p>
                <p className="text-sm text-gray-500">{data.category?.name} </p>
            </div>
            {/* price */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price} />
            </div>
        </div>
    );
};

export default ProductCard;

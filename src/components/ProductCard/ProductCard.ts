import { useState } from "react";

import { type Product } from "@/types/product.types.ts";

export type ProductCardProps = Product;

export const useProductCard = (image: string) => {
    const [imgSrc, setImgSrc] = useState(image);

    const handleImageChange = (src: string): void => {
        setImgSrc(src);
    };

    return {
        imgSrc,
        handleImageChange
    };
};

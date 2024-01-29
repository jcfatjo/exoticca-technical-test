import { useState } from "react";

export type ProductCardProps = {
    title: string;
    image: string;
    map: string;
    priceDetail: {
        pricingPercentage: number;
        oldPrice: string;
        fromPrice: string;
        pricePerNight: string;
    };
};

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

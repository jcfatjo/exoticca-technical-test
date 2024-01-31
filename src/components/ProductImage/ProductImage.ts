import { useState } from "react";

export type ProductImageProps = {
    imageSrc: string;
    mapImageSrc: string;
    alt: string;
};

export const useProductImage = () => {
    const [imageOpacity, setImageOpacity] = useState(1);

    const handleOpacityChange = (opacity: number): void => {
        setImageOpacity(opacity);
    };

    return {
        imageOpacity,
        handleOpacityChange
    };
};

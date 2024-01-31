import { Box, Image } from "@chakra-ui/react";
import React from "react";

import { type ProductImageProps, useProductImage } from "@/components/ProductImage/ProductImage.ts";

const ProductImage: React.FC<ProductImageProps> = ({ imageSrc, mapImageSrc, alt }: ProductImageProps) => {
    const { imageOpacity, handleOpacityChange } = useProductImage();

    return (
        <Box
            className="relative w-full h-full"
            onMouseEnter={() => {
                handleOpacityChange(0);
            }}
            onMouseLeave={() => {
                handleOpacityChange(1);
            }}>
            <Image
                className="absolute top-0 left-0 z-10 object-cover w-full h-full transition-opacity duration-500 ease-in-out"
                opacity={imageOpacity}
                maxH={{ base: "150px", lg: "100%" }}
                src={imageSrc}
                alt={alt}
            />
            <Image className="relative object-cover w-full h-full" maxH={{ base: "150px", lg: "100%" }} src={mapImageSrc} alt={alt} />
        </Box>
    );
};

export default ProductImage;

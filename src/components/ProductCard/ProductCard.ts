import { type ProductDataProps } from "@/components/ProductData/ProductData.ts";
import { type ProductImageProps } from "@/components/ProductImage/ProductImage.ts";
import { type Product } from "@/types/product.types.ts";

export type ProductCardProps = Product;

type ProductProps = {
    productImage: ProductImageProps;
    productData: ProductDataProps;
};

export const useProductCard = ({
    image,
    mapImage,
    title,
    priceDetail,
    url,
    destination,
    days,
    highlights,
    extras,
    isGroupTours,
    isSoloTraveller,
    tags
}: ProductCardProps): ProductProps => {
    return {
        productImage: {
            imageSrc: image,
            mapImageSrc: mapImage,
            alt: title
        },
        productData: {
            priceDetail,
            url,
            destination,
            days,
            title,
            highlights,
            extras,
            isGroupTours,
            isSoloTraveller,
            tags
        }
    };
};

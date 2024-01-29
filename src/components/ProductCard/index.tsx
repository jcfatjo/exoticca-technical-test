import { Card, CardBody, Image } from "@chakra-ui/react";
import React from "react";

import { type ProductCardProps, useProductCard } from "@/components/ProductCard/ProductCard.ts";

import PriceDetail from "../PriceDetail";

const ProductCard: React.FC<ProductCardProps> = ({ title, image, map, priceDetail }: ProductCardProps) => {
    const { imgSrc, handleImageChange } = useProductCard(image);

    return (
        <Card className="overflow-hidden" direction={["column", "row"]} variant="outline">
            <Image
                objectFit="cover"
                maxW={["100%", "50%"]}
                maxH={[150, "100%"]}
                src={imgSrc}
                alt={title}
                onMouseEnter={() => {
                    handleImageChange(map);
                }}
                onMouseLeave={() => {
                    handleImageChange(image);
                }}
            />
            <CardBody className="p-4">
                <PriceDetail {...priceDetail} />
            </CardBody>
        </Card>
    );
};

export default ProductCard;

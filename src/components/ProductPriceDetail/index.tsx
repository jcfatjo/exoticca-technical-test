import { Box, Tag, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import { EXOTICCA_URL_PREFIX } from "@/app.constants.ts";
import { type ProductPriceDetailProps } from "@/components/ProductPriceDetail/ProductPriceDetail.ts";

const ProductPriceDetail: React.FC<ProductPriceDetailProps> = ({
    pricingPercentage,
    oldPrice,
    fromPrice,
    pricePerNight,
    url
}: ProductPriceDetailProps) => {
    return (
        <Box
            className="flex gap-2"
            flexDirection={["row", null, "column"]}
            alignItems={["center", null, "end"]}
            justifyContent={["start", null, "center"]}>
            <Tag className="rounded-full bg-amber-300 px-2 py-2 h-fit w-fit font-normal">-{pricingPercentage}%</Tag>
            <Box className="flex flex-col" alignItems={["start", null, "end"]} justifyContent={["start", null, "center"]}>
                <Text className="text-xs font-normal text-gray-500">
                    From <del>{oldPrice}</del>
                </Text>
                <Link data-cy="product-price-link" href={`${EXOTICCA_URL_PREFIX}${url}`} target="_blank">
                    <Text data-cy="product-price" className="font-bold leading-6" fontSize={["large", null, "x-large"]}>
                        {fromPrice}
                    </Text>
                </Link>
                <Text className="text-xs font-normal text-gray-500">Per night: {pricePerNight}</Text>
            </Box>
        </Box>
    );
};

export default ProductPriceDetail;

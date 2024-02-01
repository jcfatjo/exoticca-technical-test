import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import { EXOTICCA_URL_PREFIX } from "@/app.constants.ts";
import { type ProductTopProps } from "@/components/ProductTop/ProductTop.ts";

const ProductTop: React.FC<ProductTopProps> = ({ destination, days, title, url }: ProductTopProps) => {
    return (
        <>
            <Text data-cy="product-destination">
                {destination} in {days} days +
            </Text>
            <Link data-cy="product-title-link" href={`${EXOTICCA_URL_PREFIX}${url}`} target="_blank">
                <Text data-cy="product-title" className="text-xl hover:underline">
                    {title}
                </Text>
            </Link>
        </>
    );
};

export default ProductTop;

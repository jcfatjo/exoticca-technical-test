import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import { EXOTICCA_URL_PREFIX } from "@/app.constants.ts";
import { type ProductTopProps } from "@/components/ProductTop/ProductTop.ts";

const ProductTop: React.FC<ProductTopProps> = ({ destination, days, title, url }: ProductTopProps) => {
    return (
        <>
            <Text>
                {destination} in {days} days +
            </Text>
            <Link href={`${EXOTICCA_URL_PREFIX}${url}`} target="_blank">
                <Text className="text-xl hover:underline">{title}</Text>
            </Link>
        </>
    );
};

export default ProductTop;

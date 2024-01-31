import { Button, Flex } from "@chakra-ui/react";
import React from "react";

import { EXOTICCA_URL_PREFIX } from "@/app.constants.ts";
import { type ProductButtonProps } from "@/components/ProductButton/ProductButton.ts";

const ProductButton: React.FC<ProductButtonProps> = ({ url }: ProductButtonProps) => {
    return (
        <Flex className="w-full h-full" alignItems={[null, "center", "end"]} justifyContent={[null, "center", "end"]}>
            <Button
                as="a"
                className="rounded-full bg-gray-900 text-white hover:bg-gray-700 active:bg-gray-500 px-6 py-7 w-fit font-normal"
                href={`${EXOTICCA_URL_PREFIX}${url}`}
                target="_blank">
                See trip
            </Button>
        </Flex>
    );
};

export default ProductButton;

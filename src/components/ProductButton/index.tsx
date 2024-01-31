import { Button, Flex } from "@chakra-ui/react";
import React from "react";

import { EXOTICCA_URL_PREFIX } from "@/app.constants.ts";
import { type ProductButtonProps } from "@/components/ProductButton/ProductButton.ts";

const ProductButton: React.FC<ProductButtonProps> = ({ url }: ProductButtonProps) => {
    return (
        <Flex className="w-full h-full" alignItems={["center", null, "end"]} justifyContent={["center", null, "end"]}>
            <Button
                as="a"
                className="rounded-full px-6 py-7 w-fit bg-black hover:bg-gray-800 active:bg-gray-600 text-white font-normal"
                href={`${EXOTICCA_URL_PREFIX}${url}`}
                target="_blank">
                See trip
            </Button>
        </Flex>
    );
};

export default ProductButton;

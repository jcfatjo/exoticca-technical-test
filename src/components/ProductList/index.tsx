import { Box, Heading } from "@chakra-ui/react";
import React from "react";

import ProductCard from "@/components/ProductCard";
import { type ProductListProps } from "@/components/ProductList/ProductList.ts";
import { type Product } from "@/types/product.types.ts";

const ProductList: React.FC<ProductListProps> = ({ title, products }: ProductListProps) => {
    return (
        <>
            {products.length > 0 && (
                <Box className="pt-8">
                    <Heading className="font-normal text-center mb-6" as="h2" size={["lg", null, "xl"]}>
                        {title}
                    </Heading>
                    {products.map((product: Product, index: number) => (
                        <ProductCard key={`product-${index}`} {...product} />
                    ))}
                </Box>
            )}
        </>
    );
};

export default ProductList;

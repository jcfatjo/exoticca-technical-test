import { Box, Heading, Skeleton } from "@chakra-ui/react";
import React from "react";

import ProductCard from "@/components/ProductCard";
import { type ProductListProps } from "@/components/ProductList/ProductList.ts";
import { type Product } from "@/types/product.types.ts";

const ProductList: React.FC<ProductListProps> = ({ isLoaded, title, products }: ProductListProps) => {
    return (
        <>
            {products.length > 0 && (
                <Box className="py-8">
                    <Skeleton isLoaded={isLoaded}>
                        <Heading className="font-normal text-center mb-6" as="h2" size={["lg", null, "xl"]}>
                            {title}
                        </Heading>
                    </Skeleton>
                    {products.map((product: Product, index: number) => (
                        <Skeleton key={`product-${index}`} isLoaded={isLoaded}>
                            <ProductCard {...product} />
                        </Skeleton>
                    ))}
                </Box>
            )}
        </>
    );
};

export default ProductList;

import { Box, Heading, Skeleton } from "@chakra-ui/react";
import React from "react";

import { useContentSkeleton } from "@/components/ContentSkeleton/ContentSkeleton.ts";
import ProductCard from "@/components/ProductCard";

const ContentSkeleton: React.FC = () => {
    const { skeletonProducts } = useContentSkeleton();

    return (
        <>
            {skeletonProducts.map((skeletonProduct, index) => (
                <Box key={`skeleton-product-${index}`} className="pt-8">
                    <Skeleton>
                        <Heading className="font-normal text-center mb-6" as="h2" size={["lg", null, "xl"]}>
                            Loading
                        </Heading>
                    </Skeleton>
                    <Skeleton>
                        <ProductCard {...skeletonProduct} />
                    </Skeleton>
                </Box>
            ))}
        </>
    );
};

export default ContentSkeleton;

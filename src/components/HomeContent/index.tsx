import { Container, Stack } from "@chakra-ui/react";
import React from "react";

import ContentSkeleton from "@/components/ContentSkeleton";
import {
    FeaturedMonoMarketTitle,
    FeaturedMultiMarketTitle,
    MonoMarketTitle,
    MultiMarketTitle
} from "@/components/HomeContent/HomeContent.constants.ts";
import { useHomeContent } from "@/components/HomeContent/HomeContent.ts";
import PageHeader from "@/components/PageHeader";
import ProductList from "@/components/ProductList";

const HomeContent: React.FC = () => {
    const { placeName, featuredMonoProducts, featuredMultiProducts, monoProducts, multiProducts, isLoading, handleCountrySearch } =
        useHomeContent();

    return (
        <>
            <PageHeader onSearch={handleCountrySearch} />
            <Container as="main" maxW={{ base: "600px", lg: "1200px" }} px={{ base: 4, lg: 6 }} pt={["60px", null, "70px"]}>
                <Stack spacing={8}>
                    {isLoading ? (
                        <ContentSkeleton />
                    ) : (
                        <>
                            <ProductList title={`${FeaturedMonoMarketTitle.PREFIX} ${placeName}`} products={featuredMonoProducts} />
                            <ProductList
                                title={`${FeaturedMultiMarketTitle.PREFIX} ${placeName} ${FeaturedMultiMarketTitle.SUFFIX}`}
                                products={featuredMultiProducts}
                            />
                            <ProductList title={`${MonoMarketTitle.PREFIX} ${placeName}`} products={monoProducts} />
                            <ProductList title={`${MultiMarketTitle.PREFIX} ${placeName}`} products={multiProducts} />
                        </>
                    )}{" "}
                </Stack>
            </Container>
        </>
    );
};

export default HomeContent;

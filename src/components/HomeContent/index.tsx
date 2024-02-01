import { Container } from "@chakra-ui/react";
import React from "react";

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
                <ProductList
                    isLoaded={!isLoading}
                    title={`${FeaturedMonoMarketTitle.PREFIX} ${placeName}`}
                    products={featuredMonoProducts}
                />
                <ProductList
                    isLoaded={!isLoading}
                    title={`${FeaturedMultiMarketTitle.PREFIX} ${placeName} ${FeaturedMultiMarketTitle.SUFFIX}`}
                    products={featuredMultiProducts}
                />
                <ProductList isLoaded={!isLoading} title={`${MonoMarketTitle.PREFIX} ${placeName}`} products={monoProducts} />
                <ProductList isLoaded={!isLoading} title={`${MultiMarketTitle.PREFIX} ${placeName}`} products={multiProducts} />
            </Container>
        </>
    );
};

export default HomeContent;

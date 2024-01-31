import { Container } from "@chakra-ui/react";
import React from "react";

import ProductList from "@/components/ProductList";
import { FeaturedMonoMarketTitle, FeaturedMultiMarketTitle, MonoMarketTitle, MultiMarketTitle } from "@/pages/Home.constants.ts";
import { useHome } from "@/pages/Home.ts";

const Home: React.FC = () => {
    const { placeName, featuredMonoProducts, featuredMultiProducts, monoProducts, multiProducts } = useHome();

    return (
        <Container maxW={{ base: 600, lg: 1200 }} px={{ base: 4, lg: 6 }}>
            <ProductList title={`${FeaturedMonoMarketTitle.PREFIX} ${placeName}`} products={featuredMonoProducts} />
            <ProductList
                title={`${FeaturedMultiMarketTitle.PREFIX} ${placeName} ${FeaturedMultiMarketTitle.SUFFIX}`}
                products={featuredMultiProducts}
            />
            <ProductList title={`${MonoMarketTitle.PREFIX} ${placeName}`} products={monoProducts} />
            <ProductList title={`${MultiMarketTitle.PREFIX} ${placeName}`} products={multiProducts} />
        </Container>
    );
};

export default Home;

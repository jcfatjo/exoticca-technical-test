import { Container } from "@chakra-ui/react";
import React from "react";

import ProductList from "@/components/ProductList";
import { FeaturedMonoMarketTitle, FeaturedMultiMarketTitle, MonoMarketTitle, MultiMarketTitle } from "@/pages/Home.constants.ts";
import { useHome } from "@/pages/Home.ts";

const Home: React.FC = () => {
    const { placeName, featuredMonoProducts, featuredMultiProducts, monoProducts, multiProducts } = useHome();

    return (
        <Container maxW={["600px", null, null, "1200px"]} px={[4, 4, 4, 16]}>
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

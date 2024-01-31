import React from "react";

import ProductCard from "@/components/ProductCard";
import { useHome } from "@/pages/Home.ts";
import { type Product } from "@/types/products.types.ts";

const Home: React.FC = () => {
    const { featuredMonoProducts, featuredMultiProducts, monoProducts, multiProducts } = useHome();

    return (
        <>
            {featuredMonoProducts.map((product: Product, index: number) => (
                <ProductCard key={`featuredMonoProduct-${index}`} {...product} />
            ))}
            {featuredMultiProducts.map((product: Product, index: number) => (
                <ProductCard key={`featuredMultiProduct-${index}`} {...product} />
            ))}
            {monoProducts.map((product: Product, index: number) => (
                <ProductCard key={`monoProduct-${index}`} {...product} />
            ))}
            {multiProducts.map((product: Product, index: number) => (
                <ProductCard key={`multiProduct-${index}`} {...product} />
            ))}
        </>
    );
};

export default Home;

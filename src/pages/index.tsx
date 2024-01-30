import React from "react";

import ProductCard from "@/components/ProductCard";
import { useHome } from "@/pages/Home.ts";
import { type Product } from "@/types/products.types.ts";

const Home: React.FC = () => {
    // const { products } = useHome();
    const { featuredMonoProducts, featuredMultiProducts, monoProducts, multiProducts } = useHome();

    return (
        <>
            {featuredMonoProducts.map((product: Product, index: number) => (
                <ProductCard
                    key={`featuredMonoProduct-${index}`}
                    title={product.title}
                    image={product.image}
                    map={product.mapImage}
                    priceDetail={product.priceDetail}
                />
            ))}
            {featuredMultiProducts.map((product: Product, index: number) => (
                <ProductCard
                    key={`featuredMultiProduct-${index}`}
                    title={product.title}
                    image={product.image}
                    map={product.mapImage}
                    priceDetail={product.priceDetail}
                />
            ))}
            {monoProducts.map((product: Product, index: number) => (
                <ProductCard
                    key={`monoProduct-${index}`}
                    title={product.title}
                    image={product.image}
                    map={product.mapImage}
                    priceDetail={product.priceDetail}
                />
            ))}
            {multiProducts.map((product: Product, index: number) => (
                <ProductCard
                    key={`multiProduct-${index}`}
                    title={product.title}
                    image={product.image}
                    map={product.mapImage}
                    priceDetail={product.priceDetail}
                />
            ))}
        </>
    );
};

export default Home;

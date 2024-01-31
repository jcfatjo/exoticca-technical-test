import { useEffect, useState } from "react";

import { useGetSearchResult } from "@/hooks/api/api.hook.ts";
import { useProducts } from "@/hooks/products.hook.ts";
import { type Product } from "@/types/product.types.ts";

export const useHome = () => {
    const { searchResult, isLoading, isError } = useGetSearchResult();
    const { getProductGroups } = useProducts();

    const [placeName, setPlaceName] = useState("");
    const [featuredMonoProducts, setFeaturedMonoProducts] = useState<Product[]>([]);
    const [featuredMultiProducts, setFeaturedMultiProducts] = useState<Product[]>([]);
    const [monoProducts, setMonoProducts] = useState<Product[]>([]);
    const [multiProducts, setMultiProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (searchResult == null || typeof searchResult === "undefined") {
            return;
        }

        const { name, destinations } = searchResult;
        const { featuredMono, featuredMulti, mono, multi } = getProductGroups(destinations);

        setPlaceName(name);
        setFeaturedMonoProducts(featuredMono);
        setFeaturedMultiProducts(featuredMulti);
        setMonoProducts(mono);
        setMultiProducts(multi);
    }, [searchResult]);

    return {
        placeName,
        featuredMonoProducts,
        featuredMultiProducts,
        monoProducts,
        multiProducts,
        isLoading,
        isError
    };
};

import { useEffect, useState } from "react";

import { useGetSearchResults } from "@/hooks/api/api.hook.ts";
import { useProducts } from "@/hooks/products.hook.ts";
import { DEFAULT_COUNTRY } from "@/pages/Home.constants.ts";
import { type Product } from "@/types/product.types.ts";

export const useHome = () => {
    const [country, setCountry] = useState(DEFAULT_COUNTRY);

    const { searchResults, isLoading, isError } = useGetSearchResults(country);
    const { getProductGroups } = useProducts();

    const [placeName, setPlaceName] = useState("");
    const [featuredMonoProducts, setFeaturedMonoProducts] = useState<Product[]>([]);
    const [featuredMultiProducts, setFeaturedMultiProducts] = useState<Product[]>([]);
    const [monoProducts, setMonoProducts] = useState<Product[]>([]);
    const [multiProducts, setMultiProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (!searchResults) {
            return;
        }

        const { name, destinations } = searchResults;
        const { featuredMono, featuredMulti, mono, multi } = getProductGroups(destinations);

        setPlaceName(name);
        setFeaturedMonoProducts(featuredMono);
        setFeaturedMultiProducts(featuredMulti);
        setMonoProducts(mono);
        setMultiProducts(multi);
    }, [searchResults]);

    const handleCountrySearch = (searchText: string) => {
        setCountry(searchText);
    };

    return {
        placeName,
        featuredMonoProducts,
        featuredMultiProducts,
        monoProducts,
        multiProducts,
        isLoading,
        isError,
        handleCountrySearch
    };
};

import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { DEFAULT_COUNTRY, ERROR_TOAST_DURATION_MS } from "@/components/HomeContent/HomeContent.constants.ts";
import { useGetSearchResults } from "@/hooks/api/api.hook.ts";
import { useProducts } from "@/hooks/products.hook.ts";
import { type Product } from "@/types/product.types.ts";

export const useHomeContent = () => {
    const [country, setCountry] = useState(DEFAULT_COUNTRY);

    const { data, isLoading, isError } = useGetSearchResults(country);
    const { getProductGroups } = useProducts();

    const [placeName, setPlaceName] = useState("");
    const [featuredMonoProducts, setFeaturedMonoProducts] = useState<Product[]>([]);
    const [featuredMultiProducts, setFeaturedMultiProducts] = useState<Product[]>([]);
    const [monoProducts, setMonoProducts] = useState<Product[]>([]);
    const [multiProducts, setMultiProducts] = useState<Product[]>([]);

    const toast = useToast();

    useEffect(() => {
        if (!data?.name) {
            return;
        }

        const { name, destinations } = data;
        const { featuredMono, featuredMulti, mono, multi } = getProductGroups(destinations);

        setPlaceName(name);
        setFeaturedMonoProducts(featuredMono);
        setFeaturedMultiProducts(featuredMulti);
        setMonoProducts(mono);
        setMultiProducts(multi);
    }, [data]);

    const handleCountrySearch = (searchText: string) => {
        setCountry(searchText);
    };

    useEffect(() => {
        if (isError) {
            toast({
                title: "An error has occurred",
                description: `Unable to get data by "${country}"`,
                status: "error",
                duration: ERROR_TOAST_DURATION_MS,
                isClosable: true
            });
        }
    }, [isError]);

    return {
        placeName,
        featuredMonoProducts,
        featuredMultiProducts,
        monoProducts,
        multiProducts,
        isLoading,
        handleCountrySearch
    };
};

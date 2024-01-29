import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@/hooks/api/api.constants.ts";

const getProducts = async () => {
    const response = await fetch("https://api-us.exoticca.com/api/landing/v2/country/botswana");
    return await response.json();
};

export const useGetProducts = () => {
    const {
        data: products,
        isLoading,
        isError
    } = useQuery({
        queryKey: [QueryKeys.PRODUCTS],
        queryFn: getProducts
    });

    return {
        products,
        isLoading,
        isError
    };
};

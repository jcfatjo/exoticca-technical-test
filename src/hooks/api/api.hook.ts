import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@/hooks/api/api.constants.ts";
import { type SearchResultModel } from "@/models/search-result.model.ts";

const fetchSearchResults = async (country: string): Promise<SearchResultModel> => {
    const response = await fetch(`https://api-us.exoticca.com/api/landing/v2/country/${country}`);
    return await response.json();
};

export const useGetSearchResults = (country: string) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: [QueryKeys.SEARCH_RESULT, country],
        queryFn: async () => await fetchSearchResults(country)
    });

    return {
        searchResults: data,
        isLoading,
        isError
    };
};

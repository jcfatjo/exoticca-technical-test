import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@/hooks/api/api.constants.ts";
import { type SearchResultModel } from "@/models/search-result.model.ts";

const fetchSearchResult = async (country: string): Promise<SearchResultModel> => {
    const response = await fetch(`/api/search-handler?country=${country}`);

    if (!response.ok) {
        const errorMessage = "An error occurred while fetching the search result.";
        console.error(errorMessage);
        throw new Error(errorMessage);
    }

    return await response.json();
};

export const useGetSearchResult = (country: string) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: [QueryKeys.SEARCH_RESULT, country],
        queryFn: async () => await fetchSearchResult(country),
        refetchOnWindowFocus: false
    });

    return {
        data,
        isLoading,
        isError
    };
};

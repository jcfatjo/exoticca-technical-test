import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@/hooks/api/api.constants.ts";
import { type SearchResultModel } from "@/models/search-result.model.ts";

const getSearchResults = async (): Promise<SearchResultModel> => {
    const response = await fetch("https://api-us.exoticca.com/api/landing/v2/country/botswana");
    return await response.json();
};

export type UseGetSearchResults = () => {
    searchResult?: SearchResultModel;
    isLoading: boolean;
    isError: boolean;
};

export const useGetSearchResult: UseGetSearchResults = () => {
    const {
        data: searchResult,
        isLoading,
        isError
    } = useQuery({
        queryKey: [QueryKeys.SEARCH_RESULT],
        queryFn: getSearchResults
    });

    return {
        searchResult,
        isLoading,
        isError
    };
};

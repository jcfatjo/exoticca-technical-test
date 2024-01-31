import type React from "react";
import { useState } from "react";

import { KEY_ENTER } from "@/components/HeaderSearchbar/HeaderSearchbar.constants.ts";

type OnSearch = (searchText: string) => void;

export type HeaderSearchbarProps = {
    isShown: boolean;
    onSearch: OnSearch;
};

export const useHeaderSearchbar = (onSearch: OnSearch) => {
    const [searchText, setSearchText] = useState("");

    const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === KEY_ENTER) {
            search();
        }
    };

    const handleSearch = () => {
        search();
    };

    const search = () => {
        if (searchText) {
            onSearch(searchText);
        }
    };

    return {
        searchText,
        handleSearchTextChange,
        handleKeyDown,
        handleSearch
    };
};

import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import React from "react";

import { type HeaderSearchbarProps, useHeaderSearchbar } from "@/components/HeaderSearchbar/HeaderSearchbar.ts";
import SearchIcon from "@/components/Icons/SearchIcon";

const HeaderSearchbar: React.FC<HeaderSearchbarProps> = ({ isShown, onSearch }: HeaderSearchbarProps) => {
    const { searchText, handleSearchTextChange, handleKeyDown, handleSearch } = useHeaderSearchbar(onSearch);

    return (
        <InputGroup className="max-w-full w-[400px]" display={{ base: isShown ? "block" : "none" }}>
            <InputLeftElement className="text-2xl">
                <SearchIcon />
            </InputLeftElement>
            <Input
                className="rounded-full pr-32 bg-white"
                placeholder="Search your next destination"
                value={searchText}
                onChange={handleSearchTextChange}
                onKeyDown={handleKeyDown}
            />
            <InputRightElement className="w-[120px]">
                <Button
                    className="rounded-full h-7 w-[100px] bg-black hover:bg-gray-800 active:bg-gray-600 text-white font-normal"
                    size="sm"
                    onClick={handleSearch}>
                    Search
                </Button>
            </InputRightElement>
        </InputGroup>
    );
};

export default HeaderSearchbar;

import { Icon } from "@chakra-ui/react";
import React from "react";

const SearchIcon: React.FC = props => (
    <Icon fill="none" viewBox="0 0 24 24" {...props}>
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.05"
            d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16m10 2-4.35-4.35"
        />
    </Icon>
);

export default SearchIcon;

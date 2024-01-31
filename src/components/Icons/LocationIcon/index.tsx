import { Icon } from "@chakra-ui/react";
import React from "react";

const LocationIcon: React.FC = props => (
    <Icon viewBox="0 0 16 16" fill="none" {...props}>
        <g stroke="#454545" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
            <path
                d="M11.52 4.01a4.97 4.97 0 0 1 0 7.04l-2.7 2.69c-.45.46-1.2.46-1.65 0l-2.69-2.69a4.97 4.97 0 1 1 7.04-7.04z"
                clipRule="evenodd"
            />
            <path d="M9.64 6.82 7.7 8.77l-.95-.94" />
        </g>
    </Icon>
);

export default LocationIcon;

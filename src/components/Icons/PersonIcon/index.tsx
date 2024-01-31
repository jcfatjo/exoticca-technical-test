import { Icon } from "@chakra-ui/react";
import React from "react";

const PersonIcon: React.FC = props => (
    <Icon viewBox="0 0 14 14" fill="none" {...props}>
        <path
            stroke="#121212"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.4"
            d="M11.7 12.3V11a2.3 2.3 0 0 0-2.4-2.3H4.7A2.3 2.3 0 0 0 2.3 11v1.2M7 6.4a2.3 2.3 0 1 0 0-4.7 2.3 2.3 0 0 0 0 4.7Z"
        />
    </Icon>
);

export default PersonIcon;

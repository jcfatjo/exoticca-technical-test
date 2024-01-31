import { Flex, Image } from "@chakra-ui/react";
import React from "react";

import { EXOTICCA_LOGO_URL } from "@/components/PageHeader/PageHeader.constants.ts";
import { type PageHeaderProps } from "@/components/PageHeader/PageHeader.ts";

const PageHeader: React.FC<PageHeaderProps> = (_props: PageHeaderProps) => {
    return (
        <Flex as="header" className="justify-center fixed top-0 z-10 w-full bg-black" py={[4, null, 3]} h={["60px", null, "70px"]}>
            <Image src={EXOTICCA_LOGO_URL}></Image>
        </Flex>
    );
};

export default PageHeader;

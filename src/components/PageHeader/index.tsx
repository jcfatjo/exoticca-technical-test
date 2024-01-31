import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import { EXOTICCA_URL_COUNTRY_SUFFIX, EXOTICCA_URL_PREFIX } from "@/app.constants.ts";
import HeaderSearchbar from "@/components/HeaderSearchbar";
import { EXOTICCA_LOGO_URL } from "@/components/PageHeader/PageHeader.constants.ts";
import { usePageHeader } from "@/components/PageHeader/PageHeader.ts";

const PageHeader: React.FC = () => {
    const { isShowSearchbar } = usePageHeader();

    return (
        <Flex
            as="header"
            className="items-center justify-center fixed top-0 z-10 px-2 w-full bg-black"
            py={[4, null, 3]}
            h={["60px", null, "70px"]}>
            <Link className="h-full" href={`${EXOTICCA_URL_PREFIX}${EXOTICCA_URL_COUNTRY_SUFFIX}`} target="_blank">
                <Image className="h-full" src={EXOTICCA_LOGO_URL} display={{ base: isShowSearchbar ? "none" : "block" }} />
            </Link>
            <HeaderSearchbar isShown={isShowSearchbar} />
        </Flex>
    );
};

export default PageHeader;

import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import { EXOTICCA_URL_COUNTRY_SUFFIX, EXOTICCA_URL_PREFIX } from "@/app.constants.ts";
import HeaderSearchbar from "@/components/HeaderSearchbar";
import { EXOTICCA_LOGO_URL } from "@/components/PageHeader/PageHeader.constants.ts";
import { type PageHeaderProps, usePageHeader } from "@/components/PageHeader/PageHeader.ts";

const PageHeader: React.FC<PageHeaderProps> = ({ onSearch }: PageHeaderProps) => {
    const { isShowSearchbar } = usePageHeader();

    return (
        <Flex
            as="header"
            className="items-center justify-center fixed top-0 z-50 px-2 w-full bg-black"
            py={[4, null, 3]}
            h={["60px", null, "70px"]}>
            <Link
                data-cy="header-logo-link"
                className="h-full"
                href={`${EXOTICCA_URL_PREFIX}${EXOTICCA_URL_COUNTRY_SUFFIX}`}
                target="_blank">
                <Image
                    data-cy="header-logo"
                    className="h-full"
                    src={EXOTICCA_LOGO_URL}
                    display={{ base: isShowSearchbar ? "none" : "block" }}
                    alt="Exoticca"
                />
            </Link>
            <HeaderSearchbar isShown={isShowSearchbar} onSearch={onSearch} />
        </Flex>
    );
};

export default PageHeader;

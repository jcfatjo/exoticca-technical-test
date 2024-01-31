import { useEffect, useState } from "react";

import { SCROLL_Y_THRESHOLD } from "@/components/PageHeader/PageHeader.constants.ts";

export type PageHeaderProps = {
    onSearch: (searchText: string) => void;
};

export const usePageHeader = () => {
    const [isShowSearchbar, setIsShowSearchbar] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", toggleSearchbarVisibility);

        return () => {
            window.removeEventListener("scroll", toggleSearchbarVisibility);
        };
    }, []);

    const toggleSearchbarVisibility = () => {
        setIsShowSearchbar(window.scrollY > SCROLL_Y_THRESHOLD);
    };

    return {
        isShowSearchbar
    };
};

import { CONTENT_SKELETON_PRODUCT_CARD } from "@/components/ContentSkeleton/ContentSkeleton.constants.ts";

export const useContentSkeleton = () => {
    const skeletonProducts = [...Array(4).keys()].map(_ => {
        return CONTENT_SKELETON_PRODUCT_CARD;
    });

    return {
        skeletonProducts
    };
};

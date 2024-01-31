import { type ProductTag } from "@/types/product.types.ts";

export type ProductTagsProps = {
    isGroupTours: boolean;
    isSoloTraveller: boolean;
    tags: ProductTag[];
};

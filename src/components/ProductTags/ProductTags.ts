import { type ProductTag } from "@/types/products.types.ts";

export type ProductTagsProps = {
    isGroupTours: boolean;
    isSoloTraveller: boolean;
    tags: ProductTag[];
};

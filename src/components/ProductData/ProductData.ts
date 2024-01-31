import { type ProductExtra, type ProductHighlight, type ProductPriceDetail, type ProductTag } from "@/types/product.types.ts";

export type ProductDataProps = {
    priceDetail: ProductPriceDetail;
    url: string;
    destination: string;
    days: number;
    title: string;
    highlights: ProductHighlight[];
    extras: ProductExtra[];
    isGroupTours: boolean;
    isSoloTraveller: boolean;
    tags: ProductTag[];
};

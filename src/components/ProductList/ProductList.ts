import { type Product } from "@/types/product.types.ts";

export type ProductListProps = {
    isLoaded: boolean;
    title: string;
    products: Product[];
};

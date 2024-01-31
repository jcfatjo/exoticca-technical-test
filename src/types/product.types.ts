export type ProductHighlight = {
    title: string;
};

export type ProductPriceDetail = {
    fromPrice: string;
    oldPrice: string;
    pricingPercentage: number;
    pricePerNight: string;
};

export type ProductExtra = "ACCOMMODATION" | "ALL_FLIGHTS" | "ALL_TRANSFERS" | "SOME_MEALS" | "ACTIVITIES";

export type ProductTag = {
    name: string;
    description: string;
};

export type Product = {
    title: string;
    url: string;
    destination: string;
    days: number;
    image: string;
    mapImage: string;
    highlights: ProductHighlight[];
    priceDetail: ProductPriceDetail;
    extras: ProductExtra[];
    isGroupTours: boolean;
    isSoloTraveller: boolean;
    tags: ProductTag[];
};

export type ProductGroups = {
    featuredMono: Product[];
    featuredMulti: Product[];
    mono: Product[];
    multi: Product[];
};

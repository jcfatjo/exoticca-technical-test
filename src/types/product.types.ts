export type ProductHighlight = {
    title: string;
};

export type ProductPriceDetail = {
    fromPrice: string;
    oldPrice: string;
    pricingPercentage: number;
    pricePerNight: string;
};

export enum ProductExtraType {
    ACCOMMODATION = "ACCOMMODATION",
    ALL_FLIGHTS = "ALL_FLIGHTS",
    ALL_TRANSFERS = "ALL_TRANSFERS",
    SOME_MEALS = "SOME_MEALS",
    ACTIVITIES = "ACTIVITIES"
}

export type ProductExtra =
    | ProductExtraType.ACCOMMODATION
    | ProductExtraType.ALL_FLIGHTS
    | ProductExtraType.ALL_TRANSFERS
    | ProductExtraType.SOME_MEALS
    | ProductExtraType.ACTIVITIES;

export type ProductTag = {
    name: string;
    description: string;
};

export type Product = {
    image: string;
    mapImage: string;
    title: string;
    priceDetail: ProductPriceDetail;
    url: string;
    destination: string;
    days: number;
    highlights: ProductHighlight[];
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

import { type Product } from "@/types/product.types.ts";

export const CONTENT_SKELETON_PRODUCT_CARD: Product = {
    image: "",
    mapImage: "",
    title: "",
    priceDetail: {
        fromPrice: "",
        oldPrice: "",
        pricingPercentage: 0,
        pricePerNight: ""
    },
    url: "",
    destination: "",
    days: 0,
    highlights: [{ title: "" }],
    extras: [],
    isGroupTours: false,
    isSoloTraveller: false,
    tags: [{ name: "", description: "" }]
};

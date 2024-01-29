import { useEffect, useState } from "react";

export type OfferProps = {
    discountPct: number;
    originalPrice: number;
    price: number;
    pricePerNight: number;
};

export const useOffer = ({ originalPrice, price, pricePerNight }: OfferProps) => {
    const usFormatter = new Intl.NumberFormat("en-US");

    const [formattedOriginalPrice, setFormattedOriginalPrice] = useState("");
    const [formattedPrice, setFormattedPrice] = useState("");
    const [formattedPricePerNight, setFormattedPricePerNight] = useState("");

    useEffect(() => {
        const originalPriceString = usFormatter.format(originalPrice);
        setFormattedOriginalPrice(originalPriceString);

        const priceString = usFormatter.format(price);
        setFormattedPrice(priceString);

        const pricePerNightString = usFormatter.format(pricePerNight);
        setFormattedPricePerNight(pricePerNightString);
    }, []);

    return {
        formattedOriginalPrice,
        formattedPrice,
        formattedPricePerNight
    };
};

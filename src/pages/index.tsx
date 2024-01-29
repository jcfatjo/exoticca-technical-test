import React from "react";

import ProductCard from "@/components/ProductCard";

const Home: React.FC = () => {
    const product = {
        title: "Cape, Kruger, Victoria Falls & Chobe N.P.",
        image: "https://static-us.exoticca.com/img/p/9947/222233.jpg",
        map: "https://uploads.exoticca.com/p/9947/25916/i/ism_horizontal_aspect_ratio_3_29.jpg",
        priceDetail: {
            pricingPercentage: 40,
            oldPrice: "$6,349",
            fromPrice: "$3,799",
            pricePerNight: "$271"
        }
    };

    return <ProductCard {...product} />;
};

export default Home;

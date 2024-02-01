import { render } from "@testing-library/react";
import React from "react";

import ProductCard from "@/components/ProductCard/index.tsx";
import { type ProductCardProps } from "@/components/ProductCard/ProductCard.ts";
import { type ProductPriceDetailProps } from "@/components/ProductPriceDetail/ProductPriceDetail.ts";
import { ProductExtraType, type ProductTag } from "@/types/product.types.ts";

test("Renders a ProductCard and checks its content", () => {
    const priceDetail: ProductPriceDetailProps = {
        pricingPercentage: 40,
        oldPrice: "$6,349",
        fromPrice: "$3,799",
        pricePerNight: "$271",
        url: "/us/tours/africa/9947-cape-kruger-victoria-falls-chobe-np"
    };

    const tags: ProductTag[] = [
        {
            name: "Multi-Country",
            description: "Travel across multiple countries with the same trip"
        },
        {
            name: "Spring",
            description: "Great destinations for travel in spring"
        }
    ];

    const props: ProductCardProps = {
        image: "https://static-us.exoticca.com/img/p/9947/n/rfcCIDCN05JG.jpg",
        mapImage: "https://uploads.exoticca.com/p/9947/25916/i/ism_horizontal_aspect_ratio_3_29.jpg",
        title: "Cape, Kruger, Victoria Falls & Chobe N.P.",
        priceDetail,
        url: "/us/tours/africa/9947-cape-kruger-victoria-falls-chobe-np",
        destination: "string",
        days: 15,
        highlights: [
            {
                title: "Chobe National Park"
            },
            {
                title: "Victoria Falls"
            },
            {
                title: "Cape Town"
            },
            {
                title: "Johannesburg"
            },
            {
                title: "Kruger National Park"
            }
        ],
        extras: [
            ProductExtraType.ACCOMMODATION,
            ProductExtraType.ALL_FLIGHTS,
            ProductExtraType.ALL_TRANSFERS,
            ProductExtraType.SOME_MEALS,
            ProductExtraType.ACTIVITIES
        ],
        isGroupTours: true,
        isSoloTraveller: true,
        tags
    };

    const productCardComponent = render(<ProductCard {...props} />);

    expect(productCardComponent.container.querySelector(`[src="${props.image}"]`)).toBeInTheDocument();
    expect(productCardComponent.container.querySelector(`[src="${props.mapImage}"]`)).toBeInTheDocument();
    expect(productCardComponent.container).toHaveTextContent("+ 1 more");
});

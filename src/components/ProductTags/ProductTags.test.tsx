import { render } from "@testing-library/react";
import React from "react";

import ProductTags from "@/components/ProductTags/index.tsx";
import { type ProductTagsProps } from "@/components/ProductTags/ProductTags.ts";

test("Renders two different ProductTags components and checks the content of both", () => {
    const props1: ProductTagsProps = {
        isGroupTours: true,
        isSoloTraveller: false,
        tags: [
            {
                name: "Adventure",
                description: "Trips with outdoor and aventure activities"
            },
            {
                name: "Nature",
                description: "Trips with visit to natural environments"
            },
            {
                name: "Culture",
                description: "Trips to cities with walking tours and cultural activities"
            },
            {
                name: "Family",
                description: "Trips suitable for families with children"
            }
        ]
    };

    const props2: ProductTagsProps = {
        isGroupTours: false,
        isSoloTraveller: true,
        tags: [
            {
                name: "Adventure",
                description: "Trips with outdoor and aventure activities"
            },
            {
                name: "Nature",
                description: "Trips with visit to natural environments"
            },
            {
                name: "Culture",
                description: "Trips to cities with walking tours and cultural activities"
            },
            {
                name: "Luxury",
                description: "Trips with luxury accommodations"
            }
        ]
    };

    const productTagsComponent1 = render(<ProductTags {...props1} />);

    expect(productTagsComponent1.container).toHaveTextContent("Group tours");
    expect(productTagsComponent1.container).not.toHaveTextContent("Solo traveller");
    expect(productTagsComponent1.container).toHaveTextContent("Adventure");
    expect(productTagsComponent1.container).toHaveTextContent("Nature");
    expect(productTagsComponent1.container).toHaveTextContent("Culture");
    expect(productTagsComponent1.container).toHaveTextContent("Family");

    const productTagsComponent2 = render(<ProductTags {...props2} />);

    expect(productTagsComponent2.container).not.toHaveTextContent("Group tours");
});

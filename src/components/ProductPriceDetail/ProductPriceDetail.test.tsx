import { render } from "@testing-library/react";
import React from "react";

import ProductPriceDetail from "@/components/ProductPriceDetail/index.tsx";
import { type ProductPriceDetailProps } from "@/components/ProductPriceDetail/ProductPriceDetail.ts";

test("renders content", () => {
    const offer: ProductPriceDetailProps = {
        pricingPercentage: -40,
        oldPrice: "$6,349",
        fromPrice: "$3,799",
        pricePerNight: "$271",
        url: "/us/tours/africa/9947-cape-kruger-victoria-falls-chobe-np"
    };

    const offerComponent = render(<ProductPriceDetail {...offer} />);

    console.log(offerComponent);
});

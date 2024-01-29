import { render } from "@testing-library/react";
import React from "react";

import PriceDetail from "@/components/PriceDetail/index.tsx";
import { type PriceDetailProps } from "@/components/PriceDetail/PriceDetail.ts";

test("renders content", () => {
    const offer: PriceDetailProps = {
        pricingPercentage: -40,
        oldPrice: "$6,349",
        fromPrice: "$3,799",
        pricePerNight: "$271"
    };

    const offerComponent = render(<PriceDetail {...offer} />);

    console.log(offerComponent);
});

import { render } from "@testing-library/react";
import React from "react";

import Offer from "@/components/Offer/index.tsx";
import { type OfferProps } from "@/components/Offer/Offer.ts";

test("renders content", () => {
    const offer: OfferProps = {
        discountPct: -40,
        originalPrice: 6349,
        price: 3799,
        pricePerNight: 271
    };

    const offerComponent = render(<Offer {...offer} />);

    console.log(offerComponent);
});

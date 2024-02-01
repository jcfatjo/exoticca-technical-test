import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { EXOTICCA_URL_PREFIX } from "@/app.constants.ts";
import ProductPriceDetail from "@/components/ProductPriceDetail/index.tsx";
import { type ProductPriceDetailProps } from "@/components/ProductPriceDetail/ProductPriceDetail.ts";

test("Renders a ProductPriceDetail component, checks the values and checks if the link is clickable", () => {
    const props: ProductPriceDetailProps = {
        pricingPercentage: 40,
        oldPrice: "$6,349",
        fromPrice: "$3,799",
        pricePerNight: "$271",
        url: "/us/tours/africa/9947-cape-kruger-victoria-falls-chobe-np"
    };

    const productPriceDetailComponent = render(<ProductPriceDetail {...props} />);

    expect(productPriceDetailComponent.container).toHaveTextContent(`-${props.pricingPercentage}%`);
    expect(productPriceDetailComponent.container).toHaveTextContent(props.oldPrice);
    expect(productPriceDetailComponent.container).toHaveTextContent(props.fromPrice);
    expect(productPriceDetailComponent.container).toHaveTextContent(props.pricePerNight);

    const link = screen.getByRole("link", { name: props.fromPrice });

    expect(link).toHaveAttribute("href", `${EXOTICCA_URL_PREFIX}${props.url}`);
    expect(link).toHaveAttribute("target", "_blank");

    fireEvent.click(link);
});

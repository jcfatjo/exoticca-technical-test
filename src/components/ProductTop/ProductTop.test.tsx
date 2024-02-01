import { render, screen } from "@testing-library/react";
import React from "react";

import { EXOTICCA_URL_PREFIX } from "@/app.constants.ts";
import ProductTop from "@/components/ProductTop/index.tsx";
import { type ProductTopProps } from "@/components/ProductTop/ProductTop.ts";

test("Renders a ProductTop component, checks its content and checks if the link is clickable", () => {
    const productTop: ProductTopProps = {
        destination: "Peru",
        days: 9,
        title: "Sacred Land of the Incas",
        url: "https://www.exoticca.com/us/tours/america/7452-sacred-land-of-the-incas"
    };

    const productTopComponent = render(<ProductTop {...productTop} />);

    expect(productTopComponent.container).toHaveTextContent(productTop.destination);
    expect(productTopComponent.container).toHaveTextContent(`${productTop.days}`);
    expect(productTopComponent.container).toHaveTextContent(productTop.title);

    const link = screen.getByRole("link", { name: productTop.title });

    expect(link).toHaveAttribute("href", `${EXOTICCA_URL_PREFIX}${productTop.url}`);
    expect(link).toHaveAttribute("target", "_blank");
});

import { fireEvent, render } from "@testing-library/react";
import React from "react";

import { EXOTICCA_URL_PREFIX } from "@/app.constants.ts";
import ProductButton from "@/components/ProductButton/index.tsx";
import { type ProductButtonProps } from "@/components/ProductButton/ProductButton.ts";

test("Renders a ProductButton component and checks if it is clickable", () => {
    const props: ProductButtonProps = {
        url: "/us/tours/africa/9947-cape-kruger-victoria-falls-chobe-np"
    };

    const productButtonComponent = render(<ProductButton {...props} />);
    const link = productButtonComponent.getByText("See trip");

    expect(link).toHaveAttribute("href", `${EXOTICCA_URL_PREFIX}${props.url}`);
    expect(link).toHaveAttribute("target", "_blank");

    fireEvent.click(link);
});

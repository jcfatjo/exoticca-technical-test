import { List, ListIcon, ListItem } from "@chakra-ui/react";
import React from "react";

import { type ProductExtrasProps, useProductExtras } from "@/components/ProductExtras/ProductExtras.tsx";
import { type ProductExtra } from "@/types/product.types.ts";

const ProductExtras: React.FC<ProductExtrasProps> = ({ extras }: ProductExtrasProps) => {
    const { getIcon, getText } = useProductExtras();

    return (
        <List>
            {extras.map((extra: ProductExtra, index: number) => (
                <ListItem key={`extra-${index}`} className="truncate text-sm capitalize">
                    <ListIcon as={getIcon(extra)}></ListIcon>
                    {getText(extra)}
                </ListItem>
            ))}
        </List>
    );
};

export default ProductExtras;

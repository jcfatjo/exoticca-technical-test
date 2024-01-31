import { List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import React from "react";

import LocationIcon from "@/components/Icons/LocationIcon";
import { MAX_SHOWN_HIGHLIGHTS } from "@/components/ProductHighlights/ProductHighlights.constants.ts";
import { type ProductHighlightsProps } from "@/components/ProductHighlights/ProductHighlights.ts";
import { type ProductHighlight } from "@/types/product.types.ts";

const ProductHighlights: React.FC<ProductHighlightsProps> = ({ highlights }: ProductHighlightsProps) => {
    return (
        <List>
            {highlights.slice(0, MAX_SHOWN_HIGHLIGHTS).map((highlight: ProductHighlight, index: number) => (
                <ListItem key={`highlight-${index}`} className="text-sm truncate">
                    <ListIcon as={LocationIcon}></ListIcon>
                    {highlight.title}
                </ListItem>
            ))}
            {highlights.length > MAX_SHOWN_HIGHLIGHTS && (
                <ListItem>
                    <Text className="ml-5 text-sm truncate">+ {highlights.length - MAX_SHOWN_HIGHLIGHTS} more</Text>
                </ListItem>
            )}
        </List>
    );
};

export default ProductHighlights;

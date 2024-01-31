import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import ProductButton from "@/components/ProductButton";
import { type ProductDataProps } from "@/components/ProductData/ProductData.ts";
import ProductExtras from "@/components/ProductExtras";
import ProductHighlights from "@/components/ProductHighlights";
import ProductPriceDetail from "@/components/ProductPriceDetail";
import ProductTags from "@/components/ProductTags";
import ProductTop from "@/components/ProductTop";

const ProductData: React.FC<ProductDataProps> = ({
    priceDetail,
    url,
    destination,
    days,
    title,
    highlights,
    extras,
    isGroupTours,
    isSoloTraveller,
    tags
}: ProductDataProps) => {
    return (
        <Grid
            className="p-4 h-full"
            templateColumns={["1fr", null, "repeat(3, minmax(0, 1fr))"]}
            autoRows={"auto"}
            columnGap={[0, null, 2]}
            rowGap={[3, null, 2]}>
            <GridItem area={"span 1/1/auto/-1"} gridColumnStart={{ md: 3 }} gridRow={{ md: "span 2" }}>
                <ProductPriceDetail {...priceDetail} url={url} />
            </GridItem>
            <GridItem gridColumn={["span 1", null, "span 2"]} gridRowStart={[2, null, 1]}>
                <ProductTop destination={destination} days={days} title={title} url={url} />
            </GridItem>
            <GridItem area={"span 1/1/auto/2"}>
                <ProductHighlights highlights={highlights} />
            </GridItem>
            <GridItem area={"span 1/2/auto/3"}>
                <ProductExtras extras={extras} />
            </GridItem>
            <GridItem gridColumn={"1/4"} gridColumnEnd={{ md: 3 }}>
                <ProductTags isGroupTours={isGroupTours} isSoloTraveller={isSoloTraveller} tags={tags} />
            </GridItem>
            <GridItem gridColumn={"1 / -1"} gridColumnStart={{ md: 3 }} mt={[3, null, 0]}>
                <ProductButton url={url} />
            </GridItem>
        </Grid>
    );
};

export default ProductData;

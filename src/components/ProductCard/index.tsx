import { Card, CardBody, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";

import ProductButton from "@/components/ProductButton";
import { type ProductCardProps, useProductCard } from "@/components/ProductCard/ProductCard.ts";
import ProductExtras from "@/components/ProductExtras";
import ProductHighlights from "@/components/ProductHighlights";
import ProductTags from "@/components/ProductTags";
import ProductTop from "@/components/ProductTop";

import ProductPriceDetail from "../ProductPriceDetail";

const ProductCard: React.FC<ProductCardProps> = ({
    destination,
    days,
    title,
    url,
    image,
    mapImage,
    highlights,
    extras,
    priceDetail,
    isGroupTours,
    isSoloTraveller,
    tags
}: ProductCardProps) => {
    const { imgSrc, handleImageChange } = useProductCard(image);

    return (
        <Card className="overflow-hidden rounded-3xl mb-8" direction={{ base: "column", lg: "row" }} variant="outline">
            <Image
                objectFit="cover"
                maxW={{ base: "100%", lg: "50%" }}
                maxH={{ base: "150px", lg: "100%" }}
                src={imgSrc}
                alt={title}
                onMouseEnter={() => {
                    handleImageChange(mapImage);
                }}
                onMouseLeave={() => {
                    handleImageChange(image);
                }}
            />
            <CardBody className="p-4">
                <Grid
                    className="h-full"
                    rowGap={[3, null, 2]}
                    columnGap={[0, null, 2]}
                    autoRows={"auto"}
                    templateColumns={["1fr", null, "repeat(3, minmax(0, 1fr))"]}>
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
            </CardBody>
        </Card>
    );
};

export default ProductCard;

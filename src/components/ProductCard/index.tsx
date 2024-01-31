import { Card, CardBody, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";

import ProductButton from "@/components/ProductButton";
import { type ProductCardProps, useProductCard } from "@/components/ProductCard/ProductCard.ts";
import ProductTags from "@/components/ProductTags";
import ProductTop from "@/components/ProductTop";

import PriceDetail from "../PriceDetail";

const ProductCard: React.FC<ProductCardProps> = ({
    destination,
    days,
    title,
    url,
    image,
    mapImage,
    priceDetail,
    isGroupTours,
    isSoloTraveller,
    tags
}: ProductCardProps) => {
    const { imgSrc, handleImageChange } = useProductCard(image);

    return (
        <Card className="overflow-hidden rounded-3xl mb-8" direction={["column", null, null, "row"]} variant="outline">
            <Image
                objectFit="cover"
                maxW={["100%", null, null, "50%"]}
                maxH={[150, null, null, "100%"]}
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
                <Grid className="h-full" autoRows={"auto"} gap={[3, null, 2]} templateColumns={["1fr", null, "repeat(3, minmax(0, 1fr))"]}>
                    <GridItem area={"span 1/1/auto/-1"} gridColumnStart={[null, null, 3]} gridRow={[null, null, "span 2"]}>
                        <PriceDetail {...priceDetail} />
                    </GridItem>
                    <GridItem gridColumn={["span 1", null, "span 2"]} gridRowStart={[2, null, 1]}>
                        <ProductTop destination={destination} days={days} title={title} url={url} />
                    </GridItem>
                    <GridItem area={"span 1/1/auto/2"}></GridItem>
                    <GridItem area={"span 1/2/auto/3"}></GridItem>
                    <GridItem gridColumn={"1/4"} gridColumnEnd={[null, null, 3]}>
                        <ProductTags isGroupTours={isGroupTours} isSoloTraveller={isSoloTraveller} tags={tags} />
                    </GridItem>
                    <GridItem gridColumn={"1 / -1"} gridColumnStart={[null, null, 3]}>
                        <ProductButton url={url} />
                    </GridItem>
                </Grid>
            </CardBody>
        </Card>
    );
};

export default ProductCard;

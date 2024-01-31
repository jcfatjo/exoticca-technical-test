import { Card, CardBody, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import { type ProductCardProps, useProductCard } from "@/components/ProductCard/ProductCard.ts";
import ProductData from "@/components/ProductData";
import ProductImage from "@/components/ProductImage";

const ProductCard: React.FC<ProductCardProps> = (props: ProductCardProps) => {
    const { productImage, productData } = useProductCard(props);

    return (
        <Card className="overflow-hidden rounded-3xl mb-8" variant="outline">
            <CardBody className="p-0">
                <Grid templateColumns={["1fr", null, null, "repeat(2, 1fr)"]} autoRows={"auto"}>
                    <GridItem>
                        <ProductImage {...productImage} />
                    </GridItem>
                    <GridItem>
                        <ProductData {...productData} />
                    </GridItem>
                </Grid>
            </CardBody>
        </Card>
    );
};

export default ProductCard;

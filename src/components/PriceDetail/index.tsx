import { Box, Tag, Text } from "@chakra-ui/react";
import React from "react";

import { type PriceDetailProps } from "@/components/PriceDetail/PriceDetail.ts";

const PriceDetail: React.FC<PriceDetailProps> = ({ pricingPercentage, oldPrice, fromPrice, pricePerNight }: PriceDetailProps) => {
    return (
        <Box className="flex gap-2" flexDirection={["row", "column"]} alignItems={["center", "end"]} justifyContent={["start", "center"]}>
            <Tag className="rounded-full bg-amber-300 px-2 py-2 h-fit w-fit font-normal">-{pricingPercentage}%</Tag>
            <Box className="flex flex-col items-start sm:items-end justify-start sm:justify-center">
                <Text className="text-xs font-normal text-gray-500">
                    From <del>{oldPrice}</del>
                </Text>
                <Text className="text-lg font-bold leading-6">{fromPrice}</Text>
                <Text className="text-xs font-normal text-gray-500">Per night: {pricePerNight}</Text>
            </Box>
        </Box>
    );
};

export default PriceDetail;

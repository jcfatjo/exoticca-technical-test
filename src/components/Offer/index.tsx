import { Box, Tag, Text } from "@chakra-ui/react";
import React from "react";

import { type OfferProps, useOffer } from "@/components/Offer/Offer.ts";

const Offer: React.FC<OfferProps> = (props: OfferProps) => {
    const { formattedOriginalPrice, formattedPrice, formattedPricePerNight } = useOffer(props);

    return (
        <Box className="flex flex-row sm:flex-col items-center sm:items-end justify-start sm:justify-center gap-2">
            <Tag className="rounded-full bg-amber-300 px-2 py-2 h-fit w-fit font-normal">{props.discountPct}%</Tag>
            <Box className="flex flex-col items-start sm:items-end justify-start sm:justify-center">
                <Text className="text-xs font-normal text-gray-500">
                    From <del>${formattedOriginalPrice}</del>
                </Text>
                <Text className="text-lg font-bold leading-6">${formattedPrice}</Text>
                <Text className="text-xs font-normal text-gray-500">Per night: ${formattedPricePerNight}</Text>
            </Box>
        </Box>
    );
};

export default Offer;

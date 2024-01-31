import { Flex, Tag, TagLabel, TagLeftIcon, Tooltip } from "@chakra-ui/react";
import React from "react";

import PersonIcon from "@/components/Icons/PersonIcon";
import { GROUP_TOURS_TOOLTIP_LABEL_TEXT, SOLO_TRAVELER_TOOLTIP_LABEL_TEXT } from "@/components/ProductTags/ProductTags.constants.ts";
import { type ProductTagsProps } from "@/components/ProductTags/ProductTags.ts";
import { type ProductTag } from "@/types/product.types.ts";

const ProductTags: React.FC<ProductTagsProps> = ({ isGroupTours, isSoloTraveller, tags }: ProductTagsProps) => {
    return (
        <Flex className="h-full items-end">
            <Flex className="flex-wrap items-end justify-start gap-1 overflow-hidden w-full h-[52px]">
                {isGroupTours && (
                    <Tooltip hasArrow label={GROUP_TOURS_TOOLTIP_LABEL_TEXT} bg={"gray.200"} color={"black"}>
                        <Tag className="rounded-full w-fit h-fit uppercase hover:cursor-default" variant="outline">
                            <TagLabel>Group tours</TagLabel>
                        </Tag>
                    </Tooltip>
                )}
                {isSoloTraveller && (
                    <Tooltip hasArrow label={SOLO_TRAVELER_TOOLTIP_LABEL_TEXT} bg={"gray.200"} color={"black"}>
                        <Tag className="rounded-full w-fit h-fit uppercase hover:cursor-default" variant="outline">
                            <TagLeftIcon boxSize="12px" as={PersonIcon} />
                            <TagLabel>Solo traveller</TagLabel>
                        </Tag>
                    </Tooltip>
                )}
                {tags.map((tag: ProductTag, index: number) => (
                    <Tooltip key={`tag-${index}`} hasArrow label={tag.description} bg={"gray.200"} color={"black"}>
                        <Tag className="rounded-full w-fit h-fit hover:cursor-default">
                            <TagLabel>{tag.name}</TagLabel>
                        </Tag>
                    </Tooltip>
                ))}
            </Flex>
        </Flex>
    );
};

export default ProductTags;

import {
    type DestinationHighlight,
    type DestinationPriceDetail,
    type MarketDestination,
    type SearchResultDestination
} from "@/models/search-result.model.ts";
import {
    type Product,
    type ProductExtra,
    type ProductGroups,
    type ProductHighlight,
    type ProductPriceDetail
} from "@/types/product.types.ts";

export const useProducts = () => {
    const getProductGroups = (destinations: SearchResultDestination): ProductGroups => {
        const { featuredMonoMarket, featuredMultiMarket, monoMarket, multiMarket } = destinations;

        return {
            featuredMono: getProductList(featuredMonoMarket),
            featuredMulti: getProductList(featuredMultiMarket),
            mono: getProductList(monoMarket),
            multi: getProductList(multiMarket)
        };
    };

    const getProductList = (destinations: MarketDestination[]): Product[] => {
        return destinations.map((marketDestination: MarketDestination): Product => {
            const {
                title,
                destination,
                images,
                days,
                url,
                map,
                highlights: destinationHighlights,
                includes,
                priceDetail: destinationPriceDetail,
                hasPrivateTour,
                hasSoloTraveller,
                tags
            } = marketDestination;

            const image = images.length > 0 ? images[0].desktop : "";
            const mapImage = map.image.horizontal ?? "";
            const highlights = getProductHighlights(destinationHighlights);
            const priceDetail = getProductPriceDetail(destinationPriceDetail);
            const extras = includes as ProductExtra[];

            return {
                title,
                url,
                destination,
                days,
                image,
                mapImage,
                highlights,
                priceDetail,
                extras,
                isGroupTours: !hasPrivateTour,
                isSoloTraveller: hasSoloTraveller,
                tags
            };
        });
    };

    const getProductHighlights = (destinationHighlights: DestinationHighlight[]): ProductHighlight[] => {
        return destinationHighlights.map((destinationHighlight: DestinationHighlight): ProductHighlight => {
            const { title, url } = destinationHighlight;

            return {
                title,
                image: url
            };
        });
    };

    const getProductPriceDetail = (destinationPriceDetail: DestinationPriceDetail): ProductPriceDetail => {
        const { fromPriceBeautify, oldPriceBeautify, pricingPercentage, pricePerNight } = destinationPriceDetail;

        return {
            fromPrice: fromPriceBeautify,
            oldPrice: oldPriceBeautify,
            pricingPercentage,
            pricePerNight
        };
    };

    return {
        getProductGroups
    };
};

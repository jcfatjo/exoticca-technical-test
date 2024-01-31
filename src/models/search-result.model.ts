export type DestinationImage = {
    desktop: string;
    horizontal?: string;
};

export type DestinationMap = {
    image: DestinationImage;
};

export type DestinationHighlight = {
    title: string;
    url: string;
};

export type DestinationPriceDetail = {
    fromPriceBeautify: string;
    oldPriceBeautify: string;
    pricingPercentage: number;
    pricePerNight: string;
};

export type DestinationTag = {
    name: string;
    description: string;
};

export type MarketDestination = {
    title: string;
    destination: string;
    images: DestinationImage[];
    days: number;
    url: string;
    map: DestinationMap;
    highlights: DestinationHighlight[];
    includes: string[];
    priceDetail: DestinationPriceDetail;
    hasPrivateTour: boolean;
    hasSoloTraveller: boolean;
    tags: DestinationTag[];
};

export type SearchResultDestination = {
    featuredMonoMarket: MarketDestination[];
    featuredMultiMarket: MarketDestination[];
    monoMarket: MarketDestination[];
    multiMarket: MarketDestination[];
};

export type SearchResultModel = {
    destinations: SearchResultDestination;
};

import AccommodationIcon from "@/components/Icons/AccommodationIcon";
import ActivitiesIcon from "@/components/Icons/ActivitiesIcon";
import AllFlightsIcon from "@/components/Icons/AllFlightsIcon";
import AllTransfersIcon from "@/components/Icons/AllTransfersIcon";
import SomeMealsIcon from "@/components/Icons/SomeMealsIcon";
import { type ProductExtra, ProductExtraType } from "@/types/product.types.ts";

export type ProductExtrasProps = {
    extras: ProductExtra[];
};

export const useProductExtras = () => {
    const getIcon = (extra: ProductExtra) => {
        switch (extra) {
            case ProductExtraType.ACCOMMODATION:
                return AccommodationIcon;
            case ProductExtraType.ALL_FLIGHTS:
                return AllFlightsIcon;
            case ProductExtraType.ALL_TRANSFERS:
                return AllTransfersIcon;
            case ProductExtraType.SOME_MEALS:
                return SomeMealsIcon;
            case ProductExtraType.ACTIVITIES:
                return ActivitiesIcon;
        }
    };

    const getText = (extra: ProductExtra) => {
        return extra.toLowerCase().split("_").join(" ");
    };

    return {
        getIcon,
        getText
    };
};

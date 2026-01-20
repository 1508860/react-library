import type { CSSProperties } from "react";

import { NAVIGATION_RAIL_PROPERTY_MAP } from "../../../constants/navigation-rail-property-map.const";

/**
 * Navigation rail item collection container style
 */
export const NAVIGATION_RAIL_ITEM_COLLECTION_CONTAINER_STYLE: CSSProperties = {
	flexGrow: 1,
	overflowY: "auto",
	paddingBottom: NAVIGATION_RAIL_PROPERTY_MAP.itemCollectionPaddingVertical,
	paddingTop: NAVIGATION_RAIL_PROPERTY_MAP.itemCollectionPaddingVertical,
	scrollbarWidth: "none"
};

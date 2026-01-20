import type { CSSProperties } from "react";

import { NAVIGATION_RAIL_PROPERTY_MAP } from "../../../constants/navigation-rail-property-map.const";

/**
 * Navigation rail menu style
 */
export const NAVIGATION_RAIL_MENU_STYLE: CSSProperties = {
	boxSizing: "border-box",
	display: "flex",
	flexDirection: "column",
	height: "100%",
	paddingLeft: NAVIGATION_RAIL_PROPERTY_MAP.menuPaddingHorizontal,
	paddingRight: NAVIGATION_RAIL_PROPERTY_MAP.menuPaddingHorizontal,
	width: "100%"
};

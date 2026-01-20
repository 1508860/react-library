import type { CSSProperties } from "react";

import { NAVIGATION_RAIL_PROPERTY_MAP } from "../../../constants/navigation-rail-property-map.const";

/**
 * Navigation rail immersive menu style
 */
export const NAVIGATION_RAIL_IMMERSIVE_MENU_STYLE: CSSProperties = {
	boxSizing: "border-box",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	left: 0,
	paddingLeft: NAVIGATION_RAIL_PROPERTY_MAP.immersiveMenuPaddingLeft,
	position: "absolute",
	top: 0,
	zIndex: 1
};

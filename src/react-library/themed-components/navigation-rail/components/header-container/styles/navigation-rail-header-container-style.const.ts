import type { CSSProperties } from "react";

import { NAVIGATION_RAIL_PROPERTY_MAP } from "../../../constants/navigation-rail-property-map.const";

/**
 * Navigation rail header container menu style
 */
export const NAVIGATION_RAIL_HEADER_CONTAINER_MENU_STYLE: CSSProperties = {
	boxSizing: "border-box",
	display: "block",
	flexShrink: 0,
	overflow: "hidden",
	position: "relative",
	width: NAVIGATION_RAIL_PROPERTY_MAP.headerContainerWidth
};

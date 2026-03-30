import type { CSSProperties } from "react";

import { NAVIGATION_RAIL_PROPERTY_MAP } from "../../../constants/navigation-rail-property-map.const";

/**
 * Resolve navigation rail menu icon container style based on parameters
 * @param isHovered
 */
export function navigationRailMenuIconContainerStyle(isHovered: boolean): CSSProperties {
	return {
		cursor: isHovered ? "pointer" : undefined,
		paddingBottom: NAVIGATION_RAIL_PROPERTY_MAP.menuIconPaddingVertical,
		paddingLeft: NAVIGATION_RAIL_PROPERTY_MAP.menuIconPaddingHorizontal,
		paddingRight: NAVIGATION_RAIL_PROPERTY_MAP.menuIconPaddingHorizontal,
		paddingTop: NAVIGATION_RAIL_PROPERTY_MAP.menuIconPaddingVertical,
		width: NAVIGATION_RAIL_PROPERTY_MAP.menuIconSize
	};
}

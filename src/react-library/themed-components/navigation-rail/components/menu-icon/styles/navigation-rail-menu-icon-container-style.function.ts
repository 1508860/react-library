import type { CSSProperties } from "react";

import { NAVIGATION_RAIL_PROPERTY_MAP } from "../../../constants/navigation-rail-property-map.const";

/**
 * Resolve navigation rail menu icon container style based on parameters
 * @param isExpanded
 * @param isHovered
 */
export function navigationRailMenuIconContainerStyle(
	isExpanded: boolean,
	isHovered: boolean
): CSSProperties {
	return {
		cursor: isHovered ? "pointer" : undefined,
		paddingBottom: NAVIGATION_RAIL_PROPERTY_MAP.menuIconPaddingVertical,
		paddingLeft: NAVIGATION_RAIL_PROPERTY_MAP.menuIconPaddingHorizontal,
		paddingRight: NAVIGATION_RAIL_PROPERTY_MAP.menuIconPaddingHorizontal,
		paddingTop: NAVIGATION_RAIL_PROPERTY_MAP.menuIconPaddingVertical,
		transform: NAVIGATION_RAIL_PROPERTY_MAP.expanded[`${isExpanded}`].menuIconTransform.toStyleTransformCollectionString(),
		transitionDuration: `${NAVIGATION_RAIL_PROPERTY_MAP.menuTransitionDurationMs}ms`,
		transitionProperty: "transform",
		transitionTimingFunction: "ease-in-out",
		width: NAVIGATION_RAIL_PROPERTY_MAP.menuIconSize
	};
}

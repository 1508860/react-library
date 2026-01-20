import type { CSSProperties } from "react";

import type { SizePx } from "@react-library/common";

import { NAVIGATION_RAIL_PROPERTY_MAP } from "../../../constants/navigation-rail-property-map.const";
import type { NavigationRailMenuStyle } from "../../../enums/navigation-rail-menu-style.type";
import {
	resolveNavigationRailMenuContainerTransitionDuration
} from "../../../functions/resolve-navigation-rail-menu-container-transition-duration.function";

/**
 * Resolve navigation rail menu icon container style based on parameters
 * @param expandedMenuWidth
 * @param isExpanded
 * @param navigationRailMenuStyle
 * @param isHovered
 */
export function navigationRailMenuIconContainerStyle(
	expandedMenuWidth: SizePx,
	isExpanded: boolean,
	navigationRailMenuStyle: NavigationRailMenuStyle,
	isHovered: boolean
): CSSProperties {

	// Derive transition duration
	const collapsedMenuWidth: SizePx = NAVIGATION_RAIL_PROPERTY_MAP.menuStyle[navigationRailMenuStyle].menuCollapsedWidth;
	const transitionDurationMs: number = resolveNavigationRailMenuContainerTransitionDuration(expandedMenuWidth, collapsedMenuWidth);

	return {
		cursor: isHovered ? "pointer" : undefined,
		paddingBottom: NAVIGATION_RAIL_PROPERTY_MAP.menuIconPaddingVertical,
		paddingLeft: NAVIGATION_RAIL_PROPERTY_MAP.menuIconPaddingHorizontal,
		paddingRight: NAVIGATION_RAIL_PROPERTY_MAP.menuIconPaddingHorizontal,
		paddingTop: NAVIGATION_RAIL_PROPERTY_MAP.menuIconPaddingVertical,
		transform: NAVIGATION_RAIL_PROPERTY_MAP.expanded[`${isExpanded}`].menuIconTransform.toStyleTransformCollectionString(),
		transitionDuration: `${transitionDurationMs}ms`,
		transitionProperty: "transform",
		transitionTimingFunction: "ease-in-out",
		width: NAVIGATION_RAIL_PROPERTY_MAP.menuIconSize
	};
}

import type { CSSProperties } from "react";

import { ColourSchemeContainerLevel, type ColourScheme, type SizePx } from "@react-library/common";

import { NAVIGATION_RAIL_PROPERTY_MAP } from "../../../constants/navigation-rail-property-map.const";
import { NavigationRailMenuStyle } from "../../../enums/navigation-rail-menu-style.type";
import {
	resolveNavigationRailMenuContainerTransitionDuration
} from "../../../functions/resolve-navigation-rail-menu-container-transition-duration.function";

/**
 * Resolve navigation rail menu container style based on parameters
 * @param expandedMenuWidth
 * @param isExpanded
 * @param navigationRailMenuStyle
 * @param colourScheme
 */
export function navigationRailMenuContainerStyle(
	expandedMenuWidth: SizePx,
	isExpanded: boolean,
	navigationRailMenuStyle: NavigationRailMenuStyle,
	colourScheme: ColourScheme
): CSSProperties {

	// Derive transition duration
	const collapsedMenuWidth: SizePx = NAVIGATION_RAIL_PROPERTY_MAP.menuStyle[navigationRailMenuStyle].menuCollapsedWidth;
	const transitionDurationMs: number = resolveNavigationRailMenuContainerTransitionDuration(expandedMenuWidth, collapsedMenuWidth);

	return {
		backgroundColor: colourScheme.surface.container[ColourSchemeContainerLevel.Medium].toColourString(),
		borderBottomRightRadius: NAVIGATION_RAIL_PROPERTY_MAP.menuStyle[navigationRailMenuStyle].menuBorderBottomRightRadius,
		borderTopRightRadius: NAVIGATION_RAIL_PROPERTY_MAP.menuStyle[navigationRailMenuStyle].menuBorderTopRightRadius,
		boxSizing: "border-box",
		height: "100%",
		overflowX: "hidden",
		position: navigationRailMenuStyle === NavigationRailMenuStyle.ImmersiveModal ? "absolute" : undefined,
		transitionDuration: `${transitionDurationMs}ms`,
		transitionProperty: "width",
		transitionTimingFunction: "ease-in-out",
		width: isExpanded ? expandedMenuWidth : collapsedMenuWidth,
		zIndex: 1
	};
}

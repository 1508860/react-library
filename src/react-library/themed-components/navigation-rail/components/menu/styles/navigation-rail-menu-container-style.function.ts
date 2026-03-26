import type { CSSProperties } from "react";

import { ColourSchemeContainerLevel, type ColourScheme } from "@react-library/common";

import { NAVIGATION_RAIL_PROPERTY_MAP } from "../../../constants/navigation-rail-property-map.const";
import { NavigationRailMenuStyle } from "../../../enums/navigation-rail-menu-style.type";

/**
 * Resolve navigation rail menu container style based on parameters
 * @param navigationRailMenuStyle
 * @param colourScheme
 */
export function navigationRailMenuContainerStyle(
	navigationRailMenuStyle: NavigationRailMenuStyle,
	colourScheme: ColourScheme
): CSSProperties {
	return {
		backgroundColor: colourScheme.surface.container[ColourSchemeContainerLevel.Medium].toColourString(),
		borderBottomRightRadius: NAVIGATION_RAIL_PROPERTY_MAP.menuStyle[navigationRailMenuStyle].menuBorderBottomRightRadius,
		borderTopRightRadius: NAVIGATION_RAIL_PROPERTY_MAP.menuStyle[navigationRailMenuStyle].menuBorderTopRightRadius,
		boxSizing: "border-box",
		height: "100%",
		overflowX: "hidden",
		position: navigationRailMenuStyle === NavigationRailMenuStyle.ImmersiveModal ? "absolute" : undefined,
		zIndex: 1
	};
}

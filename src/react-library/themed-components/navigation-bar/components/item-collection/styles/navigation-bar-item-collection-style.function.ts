import type { CSSProperties } from "react";

import { ColourSchemeContainerLevel, ColourSchemeElevationLevel, type ColourScheme, type Font } from "@react-library/common";

import { NAVIGATION_BAR_PROPERTY_MAP } from "../../../constants/navigation-bar-property-map.const";

/**
 * Resolve navigation bar item collection style based on parameters
 * @param colourScheme
 * @param font
 */
export function navigationBarItemCollectionStyle(colourScheme: ColourScheme, font: Font): CSSProperties {
	return {
		alignItems: "center",
		backgroundColor: colourScheme.surface.container[ColourSchemeContainerLevel.Medium].toColourString(),
		boxShadow: colourScheme.elevation.boxShadow[ColourSchemeElevationLevel.Level2],
		display: "flex",
		flexDirection: "row",
		flexShrink: 0,
		fontFamily: font.fontFamily,
		fontSize: NAVIGATION_BAR_PROPERTY_MAP.fontSize,
		height: NAVIGATION_BAR_PROPERTY_MAP.barHeight,
		justifyContent: "center"
	};
}

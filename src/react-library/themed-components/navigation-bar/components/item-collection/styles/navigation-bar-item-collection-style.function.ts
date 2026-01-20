import type { CSSProperties } from "react";

import type { IColourScheme, IFont } from "@react-library/common";

import { NAVIGATION_BAR_PROPERTY_MAP } from "../../../constants/navigation-bar-property-map.const";

/**
 * Resolve navigation bar item collection style based on parameters
 * @param colourScheme
 * @param font
 */
export function navigationBarItemCollectionStyle(colourScheme: IColourScheme, font: IFont): CSSProperties {
	return {
		alignItems: "center",
		backgroundColor: colourScheme.surface.container.default.toColourString(),
		boxShadow: colourScheme.elevation.level2.boxShadow,
		display: "flex",
		flexDirection: "row",
		flexShrink: 0,
		fontFamily: font.fontFamily,
		fontSize: NAVIGATION_BAR_PROPERTY_MAP.fontSize,
		height: NAVIGATION_BAR_PROPERTY_MAP.barHeight,
		justifyContent: "center"
	};
}

import type { CSSProperties } from "react";

import { Orientation, type Colour, type ColourScheme } from "@react-library/common";

import { NAVIGATION_RAIL_PROPERTY_MAP } from "../../../constants/navigation-rail-property-map.const";

/**
 * Resolve navigation rail item style based on parameters
 * @param orientation
 * @param colourScheme
 * @param isActive
 */
export function navigationRailItemStyle(orientation: Orientation, colourScheme: ColourScheme, isActive: boolean): CSSProperties {

	const backgroundColour: Colour | undefined = isActive ? colourScheme.secondary.container.colour : undefined
	const colour: Colour = isActive ? colourScheme.secondary.default.colour : colourScheme.surface.variant.onColour;

	return {
		alignItems: "center",
		backgroundColor: backgroundColour?.toColourString(),
		boxSizing: "border-box",
		borderRadius: NAVIGATION_RAIL_PROPERTY_MAP.orientation[orientation].borderRadius,
		color: colour.toColourString(),
		display: "inline-flex",
		flexDirection: orientation === Orientation.Horizontal ? "row" : "column",
		flexShrink: 0,
		gap: NAVIGATION_RAIL_PROPERTY_MAP.itemContentGap,
		height: NAVIGATION_RAIL_PROPERTY_MAP.orientation[orientation].height,
		justifyContent: "center",
		paddingLeft: NAVIGATION_RAIL_PROPERTY_MAP.itemPaddingHorizontal,
		paddingRight: NAVIGATION_RAIL_PROPERTY_MAP.itemPaddingHorizontal,
		position: "relative"
	};
}

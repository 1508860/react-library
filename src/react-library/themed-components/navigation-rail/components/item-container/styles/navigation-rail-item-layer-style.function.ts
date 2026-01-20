import type { CSSProperties } from "react";

import { Orientation, type Colour, type StyleOpacity } from "@react-library/common";

import { NAVIGATION_RAIL_PROPERTY_MAP } from "../../../constants/navigation-rail-property-map.const";

/**
 * Resolve navigation rail item layer style based on parameters
 * @param orientation
 * @param colour
 * @param styleOpacity
 */
export function navigationRailItemLayerStyle(orientation: Orientation, colour: Colour, styleOpacity: StyleOpacity): CSSProperties {
	return {
		backgroundColor: colour.toColourString(),
		borderRadius: NAVIGATION_RAIL_PROPERTY_MAP.orientation[orientation].borderRadius,
		inset: 0,
		opacity: styleOpacity,
		position: "absolute"
	};
}

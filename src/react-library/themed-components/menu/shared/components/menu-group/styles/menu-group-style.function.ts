import type { CSSProperties } from "react";

import {
	ColourSchemeElevationLevel,
	type Colour,
	type ColourScheme
} from "@react-library/common";

import { MENU_PROPERTY_MAP } from "../../../constants/menu-property-map.const";
import { MenuStyle } from "../../../enums/menu-style.type";

/**
 * Resolve menu group style based on parameters
 * @param style
 * @param colourScheme
 */
export function menuGroupStyle(style: MenuStyle, colourScheme: ColourScheme): CSSProperties {

	const backgroundColor: Colour = style === MenuStyle.Vibrant ? colourScheme.tertiary.container.colour : colourScheme.surface.container.low;

	return {
		alignItems: "stretch",
		backgroundColor: backgroundColor.toColourString(),
		borderRadius: MENU_PROPERTY_MAP.group.borderRadius,
		boxShadow: colourScheme.elevation.boxShadow[ColourSchemeElevationLevel.Level2],
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "column",
		flexShrink: 0,
		paddingBottom: MENU_PROPERTY_MAP.group.paddingVertical,
		paddingLeft: MENU_PROPERTY_MAP.group.paddingHorizontal,
		paddingRight: MENU_PROPERTY_MAP.group.paddingHorizontal,
		paddingTop: MENU_PROPERTY_MAP.group.paddingVertical
	};
}

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
 * @param groupIndex
 * @param colourScheme
 * @param groupCount
 * @param style
 */
export function menuGroupStyle(groupIndex: number, colourScheme: ColourScheme, groupCount: number, style: MenuStyle): CSSProperties {

	const backgroundColor: Colour = style === MenuStyle.Vibrant ? colourScheme.tertiary.container.colour : colourScheme.surface.container.low;

	const isFirstGroup: boolean = groupIndex === 0;
	const isLastGroup: boolean = groupIndex === (groupCount - 1);

	return {
		alignItems: "stretch",
		backgroundColor: backgroundColor.toColourString(),
		borderBottomLeftRadius: isLastGroup ? MENU_PROPERTY_MAP.container.borderRadius : MENU_PROPERTY_MAP.group.borderRadius,
		borderBottomRightRadius: isLastGroup ? MENU_PROPERTY_MAP.container.borderRadius : MENU_PROPERTY_MAP.group.borderRadius,
		borderTopLeftRadius: isFirstGroup ? MENU_PROPERTY_MAP.container.borderRadius : MENU_PROPERTY_MAP.group.borderRadius,
		borderTopRightRadius: isFirstGroup ? MENU_PROPERTY_MAP.container.borderRadius : MENU_PROPERTY_MAP.group.borderRadius,
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

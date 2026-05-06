import type { CSSProperties } from "react";

import type { Font } from "@react-library/common";

import { MENU_PROPERTY_MAP } from "../../../constants/menu-property-map.const";
import type { MenuItemColourState } from "../../../types/menu-item-colour-state.type";

/**
 * Resolve menu supporting text style based on parameters
 * @param font
 * @param colourState
 */
export function menuSupportingTextStyle(font: Font, colourState: MenuItemColourState): CSSProperties {
	return {
		color: colourState.supportingText.toColourString(),
		fontFamily: font.fontFamily,
		fontSize: MENU_PROPERTY_MAP.item.supportingText.fontSize,
		lineHeight: MENU_PROPERTY_MAP.item.supportingText.lineHeight
	};
}

import type { CSSProperties } from "react";

import type { Font } from "@react-library/common";

import { MENU_PROPERTY_MAP } from "../../../constants/menu-property-map.const";
import type { MenuItemColourState } from "../../../types/menu-item-colour-state.type";

/**
 * Resolve menu text style based on parameters
 * @param font
 * @param colourState
 */
export function menuTextStyle(font: Font, colourState: MenuItemColourState): CSSProperties {
	return {
		color: colourState.text.toColourString(),
		fontFamily: font.fontFamily,
		fontSize: MENU_PROPERTY_MAP.item.text.fontSize,
		lineHeight: MENU_PROPERTY_MAP.item.text.lineHeight
	};
}

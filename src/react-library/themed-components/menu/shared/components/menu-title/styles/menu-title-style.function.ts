import type { CSSProperties } from "react";

import type { Font } from "@react-library/common";

import { MENU_PROPERTY_MAP } from "../../../constants/menu-property-map.const";
import type { MenuItemColourState } from "../../../types/menu-item-colour-state.type";

/**
 * Resolve menu title style based on parameters
 * @param font
 * @param colourState
 */
export function menuTitleStyle(font: Font, colourState: MenuItemColourState): CSSProperties {
	return {
		color: colourState.title.toColourString(),
		fontFamily: font.fontFamily,
		fontSize: MENU_PROPERTY_MAP.item.text.fontSize,
		lineHeight: MENU_PROPERTY_MAP.item.text.lineHeight
	};
}

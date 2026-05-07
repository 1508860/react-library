import type { CSSProperties } from "react";

import { MENU_PROPERTY_MAP } from "../../../constants/menu-property-map.const";
import type { MenuItemColourState } from "../../../types/menu-item-colour-state.type";

/**
 * Resolve menu item style based on parameters
 * @param colourState
 */
export function menuItemStyle(colourState: MenuItemColourState): CSSProperties {
	return {
		alignItems: "center",
		backgroundColor: colourState.background?.toColourString(),
		borderRadius: MENU_PROPERTY_MAP.item.borderRadius,
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "row",
		flexShrink: 0,
		gap: MENU_PROPERTY_MAP.item.gap,
		height: MENU_PROPERTY_MAP.item.contentHeight,
		overflow: "hidden",
		paddingLeft: MENU_PROPERTY_MAP.item.paddingHorizontal,
		paddingRight: MENU_PROPERTY_MAP.item.paddingHorizontal,
		marginTop: MENU_PROPERTY_MAP.item.marginVertical,
		marginBottom: MENU_PROPERTY_MAP.item.marginVertical,
		position: "relative"
	};
}

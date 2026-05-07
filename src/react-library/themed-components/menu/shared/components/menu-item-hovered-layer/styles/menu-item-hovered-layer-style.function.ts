import type { CSSProperties } from "react";

import type { MenuItemColourState } from "../../../types/menu-item-colour-state.type";

/**
 * Resolve menu item hovered layer style based on parameters
 * @param colourState
 */
export function menuItemHoveredLayerStyle(colourState: MenuItemColourState): CSSProperties {
	return {
		backgroundColor: colourState.hover.toColourString(),
		cursor: "pointer",
		inset: 0,
		position: "absolute"
	};
}

import type { CSSProperties } from "react";

import type { SwitchColourState } from "../../../types/switch-colour-state.type";

/**
 * Resolve switch hovered layer style based on parameters
 * @param colourState
 */
export function switchHoveredLayerStyle(colourState: SwitchColourState): CSSProperties {
	return {
		backgroundColor: colourState.hoverColour.toColourString(),
		cursor: "pointer",
		inset: 0,
		position: "absolute"
	};
}

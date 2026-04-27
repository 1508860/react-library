import type { CSSProperties } from "react";

import type { CheckboxColourState } from "../../../types/checkbox-colour-state.type";

/**
 * Resolve checkbox hovered layer style based on parameters
 * @param checkboxColourState
 */
export function checkboxHoveredLayerStyle(checkboxColourState: CheckboxColourState): CSSProperties {
	return {
		backgroundColor: checkboxColourState.hoverColour.toColourString(),
		cursor: "pointer",
		inset: 0,
		position: "absolute"
	};
}

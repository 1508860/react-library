import type { CSSProperties } from "react";

import type { RadioButtonColourState } from "../../../types/radio-button-colour-state.type";

/**
 * Resolve radio button hovered layer style based on parameters
 * @param radioButtonColourState
 */
export function radioButtonHoveredLayerStyle(radioButtonColourState: RadioButtonColourState): CSSProperties {
	return {
		backgroundColor: radioButtonColourState.hoverColour.toColourString(),
		cursor: "pointer",
		inset: 0,
		position: "absolute"
	};
}

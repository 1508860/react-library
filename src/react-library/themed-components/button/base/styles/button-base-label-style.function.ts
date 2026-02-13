import type { CSSProperties } from "react";

import type { Font } from "@react-library/common";

import type { ButtonColourState } from "../../shared/types/button-colour-state.type";

/**
 * Resolve button base label style based on parameters
 * @param buttonColourState
 * @param font
 */
export function buttonBaseLabelStyle(buttonColourState: ButtonColourState, font: Font): CSSProperties {
	return {
		color: buttonColourState.onColour?.toColourString(),
		fontFamily: font.fontFamily,
		fontSize: "inherit",
		whiteSpace: "nowrap"
	};
}

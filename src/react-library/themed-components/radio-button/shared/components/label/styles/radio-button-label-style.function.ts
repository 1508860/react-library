import type { CSSProperties } from "react";

import type { Font } from "@react-library/common";

import { RADIO_BUTTON_SIZE_LABEL_FONT } from "../../../constants/radio-button-size.const";
import type { RadioButtonColourState } from "../../../types/radio-button-colour-state.type";

/**
 * Resolve radio button label style based on parameters
 * @param font
 * @param radioButtonColourState
 */
export function radioButtonLabelStyle(font: Font, radioButtonColourState: RadioButtonColourState): CSSProperties {
	return {
		color: radioButtonColourState.labelColour.toColourString(),
		flexShrink: 0,
		fontFamily: font.fontFamily,
		fontSize: RADIO_BUTTON_SIZE_LABEL_FONT
	};
}

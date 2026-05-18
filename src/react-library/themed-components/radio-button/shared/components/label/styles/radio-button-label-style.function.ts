import type { CSSProperties } from "react";

import type { Font } from "@react-library/common";

import {
	RADIO_BUTTON_SIZE_CONTAINER_GAP,
	RADIO_BUTTON_SIZE_LABEL_FONT,
	RADIO_BUTTON_SIZE_LABEL_LINE_HEIGHT
} from "../../../constants/radio-button-size.const";
import type { RadioButtonColourState } from "../../../types/radio-button-colour-state.type";

/**
 * Resolve radio button label style based on parameters
 * @param isDisabled
 * @param font
 * @param radioButtonColourState
 */
export function radioButtonLabelStyle(
	isDisabled: boolean | undefined,
	font: Font,
	radioButtonColourState: RadioButtonColourState
): CSSProperties {
	return {
		color: radioButtonColourState.labelColour.toColourString(),
		cursor: !isDisabled ? "pointer" : undefined,
		flexShrink: 0,
		fontFamily: font.fontFamily,
		fontSize: RADIO_BUTTON_SIZE_LABEL_FONT,
		lineHeight: RADIO_BUTTON_SIZE_LABEL_LINE_HEIGHT,
		paddingLeft: RADIO_BUTTON_SIZE_CONTAINER_GAP
	};
}

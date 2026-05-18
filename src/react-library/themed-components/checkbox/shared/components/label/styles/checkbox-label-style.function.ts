import type { CSSProperties } from "react";

import type { Font } from "@react-library/common";

import {
	CHECKBOX_SIZE_CONTAINER_GAP,
	CHECKBOX_SIZE_LABEL_FONT,
	CHECKBOX_SIZE_LABEL_LINE_HEIGHT
} from "../../../constants/checkbox-size.const";
import type { CheckboxColourState } from "../../../types/checkbox-colour-state.type";

/**
 * Resolve checkbox label style based on parameters
 * @param isDisabled
 * @param font
 * @param checkboxColourState
 */
export function checkboxLabelStyle(
	isDisabled: boolean | undefined,
	font: Font,
	checkboxColourState: CheckboxColourState
): CSSProperties {
	return {
		color: checkboxColourState.labelColour.toColourString(),
		cursor: !isDisabled ? "pointer" : undefined,
		flexShrink: 0,
		fontFamily: font.fontFamily,
		fontSize: CHECKBOX_SIZE_LABEL_FONT,
		lineHeight: CHECKBOX_SIZE_LABEL_LINE_HEIGHT,
		paddingLeft: CHECKBOX_SIZE_CONTAINER_GAP
	};
}

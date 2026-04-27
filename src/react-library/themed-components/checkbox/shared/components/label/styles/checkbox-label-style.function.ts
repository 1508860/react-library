import type { CSSProperties } from "react";

import type { Font } from "@react-library/common";

import { CHECKBOX_SIZE_LABEL_FONT } from "../../../constants/checkbox-size.const";
import type { CheckboxColourState } from "../../../types/checkbox-colour-state.type";

/**
 * Resolve checkbox label style based on parameters
 * @param font
 * @param checkboxColourState
 */
export function checkboxLabelStyle(font: Font, checkboxColourState: CheckboxColourState): CSSProperties {
	return {
		color: checkboxColourState.labelColour.toColourString(),
		flexShrink: 0,
		fontFamily: font.fontFamily,
		fontSize: CHECKBOX_SIZE_LABEL_FONT
	};
}

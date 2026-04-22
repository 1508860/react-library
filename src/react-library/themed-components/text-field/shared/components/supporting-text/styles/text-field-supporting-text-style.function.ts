import type { CSSProperties } from "react";

import { TEXT_FIELD_PROPERTY_MAP } from "../../../constants/text-field-property-map.const";
import type { TextFieldStyle } from "../../../enums/text-field-style.type";
import type { TextFieldColourState } from "../../../types/text-field-colour-state.type";

/**
 * Resolve text field supporting text style based on parameters
 * @param isErrored
 * @param style
 * @param colourState
 */
export function textFieldSupportingTextStyle(
	isErrored: boolean,
	style: TextFieldStyle,
	colourState: TextFieldColourState
): CSSProperties {

	const styleMap = TEXT_FIELD_PROPERTY_MAP.style[style];

	return {
		color: colourState.supportingText.isErrored[`${isErrored}`].toColourString(),
		flexShrink: 0,
		fontSize: styleMap.supportingText.fontSize,
		fontWeight: styleMap.supportingText.fontWeight,
		lineHeight: styleMap.supportingText.lineHeight
	};
}

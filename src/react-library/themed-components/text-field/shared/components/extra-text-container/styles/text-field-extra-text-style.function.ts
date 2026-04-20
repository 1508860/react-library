import type { CSSProperties } from "react";

import { TEXT_FIELD_PROPERTY_MAP } from "../../../constants/text-field-property-map.const";
import type { TextFieldStyle } from "../../../enums/text-field-style.type";
import type { TextFieldColourState } from "../../../types/text-field-colour-state.type";

/**
 * Resolve text field extra text style based on parameters
 * @param style
 * @param colourState
 */
export function textFieldInputExtraTextStyle(
	style: TextFieldStyle,
	colourState: TextFieldColourState
): CSSProperties {

	const styleMap = TEXT_FIELD_PROPERTY_MAP.style[style];

	return {
		boxSizing: "border-box",
		color: colourState.text.toColourString(),
		flexShrink: 0,
		fontSize: styleMap.text.fontSize,
		fontWeight: styleMap.text.fontWeight
	};
}

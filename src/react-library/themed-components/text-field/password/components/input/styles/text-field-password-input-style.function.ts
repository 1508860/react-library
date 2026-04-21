import type { CSSProperties } from "react";

import { TEXT_FIELD_PROPERTY_MAP } from "../../../../shared/constants/text-field-property-map.const";
import type { TextFieldStyle } from "../../../../shared/enums/text-field-style.type";
import type { TextFieldColourState } from "../../../../shared/types/text-field-colour-state.type";

/**
 * Resolve text field text password style based on parameters
 * @param style
 * @param colourState
 */
export function textFieldTextPasswordStyle(
	style: TextFieldStyle,
	colourState: TextFieldColourState
): CSSProperties {
	const styleMap = TEXT_FIELD_PROPERTY_MAP.style[style];

	return {
		backgroundColor: "transparent",
		borderStyle: "none",
		caretColor: colourState.style.caret?.toColourString(),
		color: colourState.style.inputText.toColourString(),
		fontSize: styleMap.text.fontSize,
		fontWeight: styleMap.text.fontWeight,
		lineHeight: styleMap.text.lineHeight,
		outline: "none",
		padding: 0
	};
}

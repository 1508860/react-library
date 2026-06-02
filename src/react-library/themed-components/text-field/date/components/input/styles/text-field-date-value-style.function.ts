import type { CSSProperties } from "react";

import { TEXT_FIELD_PROPERTY_MAP } from "../../../../shared/constants/text-field-property-map.const";
import type { TextFieldStyle } from "../../../../shared/enums/text-field-style.type";
import type { TextFieldColourState } from "../../../../shared/types/text-field-colour-state.type";

/**
 * Resolve text field date value style based on parameters
 * @param style
 * @param colourState
 */
export function textFieldDateValueStyle(style: TextFieldStyle, colourState: TextFieldColourState): CSSProperties {
	const styleMap = TEXT_FIELD_PROPERTY_MAP.style[style];

	return {
		backgroundColor: "transparent",
		color: colourState.style.inputText.toColourString(),
		cursor: "pointer",
		fontSize: styleMap.text.fontSize,
		fontWeight: styleMap.text.fontWeight,
		lineHeight: styleMap.text.lineHeight,
		width: "100%"
	};
}

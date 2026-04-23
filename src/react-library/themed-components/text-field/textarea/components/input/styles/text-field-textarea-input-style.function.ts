import type { Size } from "@react-library/common";

import type { ScrollTextareaStyle } from "../../../../../shared";

import { TEXT_FIELD_PROPERTY_MAP } from "../../../../shared/constants/text-field-property-map.const";
import type { TextFieldStyle } from "../../../../shared/enums/text-field-style.type";
import type { TextFieldColourState } from "../../../../shared/types/text-field-colour-state.type";

/**
 * Resolve text field textarea input style based on parameters
 * @param height
 * @param maxHeight
 * @param minHeight
 * @param style
 * @param colourState
 */
export function textFieldTextareaInputStyle(
	height: Size | undefined,
	maxHeight: Size | undefined,
	minHeight: Size | undefined,
	style: TextFieldStyle,
	colourState: TextFieldColourState
): ScrollTextareaStyle {
	const styleMap = TEXT_FIELD_PROPERTY_MAP.style[style];

	return {
		borderStyle: "none",
		caretColor: colourState.style.caret?.toColourString(),
		color: colourState.style.inputText.toColourString(),
		fontFamily: "inherit",
		fontSize: styleMap.text.fontSize,
		fontWeight: styleMap.text.fontWeight,
		height: height,
		lineHeight: styleMap.text.lineHeight,
		marginTop: styleMap.textarea.marginTop,
		maxHeight: maxHeight,
		minHeight: minHeight,
		outline: "none",
		padding: 0,
		resize: "vertical",
		width: "100%"
	};
}

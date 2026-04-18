import type { CSSProperties } from "react";

import { TEXT_FIELD_PROPERTY_MAP } from "../../../constants/text-field-property-map.const";
import type { TextFieldContent } from "../../../enums/text-field-content.type";
import type { TextFieldExtraTextPosition } from "../../../enums/text-field-extra-text-position.type";
import type { TextFieldStyle } from "../../../enums/text-field-style.type";
import type { TextFieldColourState } from "../../../types/text-field-colour-state.type";

/**
 * Resolve text field input text style based on parameters
 * @param content
 * @param extraTextPosition
 * @param style
 * @param colourState
 */
export function textFieldInputTextStyle(
	content: TextFieldContent,
	extraTextPosition: TextFieldExtraTextPosition,
	style: TextFieldStyle,
	colourState: TextFieldColourState
): CSSProperties {
	const contentMap = TEXT_FIELD_PROPERTY_MAP.content[content];
	const styleMap = TEXT_FIELD_PROPERTY_MAP.style[style];

	return {
		backgroundColor: "transparent",
		borderStyle: "none",
		caretColor: colourState.caret?.toColourString(),
		color: colourState.inputText.toColourString(),
		fontSize: styleMap.text.fontSize,
		fontWeight: styleMap.text.fontWeight,
		lineHeight: styleMap.text.lineHeight,
		outline: "none",
		padding: 0,
		textAlign: contentMap?.extraTextPosition[extraTextPosition]?.textAlign
	};
}

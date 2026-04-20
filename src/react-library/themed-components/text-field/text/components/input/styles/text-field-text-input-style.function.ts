import type { CSSProperties } from "react";

import { TEXT_FIELD_PROPERTY_MAP } from "../../../../shared/constants/text-field-property-map.const";
import { TextFieldExtraTextPosition } from "../../../../shared/enums/text-field-extra-text-position.type";
import type { TextFieldStyle } from "../../../../shared/enums/text-field-style.type";
import type { TextFieldColourState } from "../../../../shared/types/text-field-colour-state.type";

/**
 * Resolve text field text style based on parameters
 * @param content
 * @param extraTextPosition
 * @param style
 * @param colourState
 */
export function textFieldTextInputStyle(
	extraTextPosition: TextFieldExtraTextPosition,
	style: TextFieldStyle,
	colourState: TextFieldColourState
): CSSProperties {
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
		textAlign: extraTextPosition === TextFieldExtraTextPosition.End ? "end" : "start"
	};
}

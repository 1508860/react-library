import type { CSSProperties } from "react";

import { TEXT_FIELD_PROPERTY_MAP } from "../../../../shared/constants/text-field-property-map.const";
import { TextFieldExtraTextPosition } from "../../../../shared/enums/text-field-extra-text-position.type";
import type { TextFieldStyle } from "../../../../shared/enums/text-field-style.type";
import type { TextFieldColourState } from "../../../../shared/types/text-field-colour-state.type";

/**
 * Resolve text field select value style based on parameters
 * @param extraTextPosition
 * @param style
 * @param colourState
 */
export function textFieldSelectValueStyle(
	extraTextPosition: TextFieldExtraTextPosition,
	style: TextFieldStyle,
	colourState: TextFieldColourState
): CSSProperties {
	const styleMap = TEXT_FIELD_PROPERTY_MAP.style[style];

	return {
		backgroundColor: "transparent",
		caretColor: colourState.style.caret?.toColourString(),
		color: colourState.style.inputText.toColourString(),
		cursor: "pointer",
		fontSize: styleMap.text.fontSize,
		fontWeight: styleMap.text.fontWeight,
		lineHeight: styleMap.text.lineHeight,
		textAlign: extraTextPosition === TextFieldExtraTextPosition.End ? "end" : "start",
		width: "100%"
	};
}

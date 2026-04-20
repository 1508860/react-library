import type { CSSProperties } from "react";

import { TEXT_FIELD_PROPERTY_MAP } from "../../../constants/text-field-property-map.const";
import type { TextFieldStyle } from "../../../enums/text-field-style.type";
import type { TextFieldColourState } from "../../../types/text-field-colour-state.type";

/**
 * Resolve text field supporting text style based on parameters
 * @param isErrored
 * @param style
 * @param colourState
 * @param isLeft
 */
export function textFieldSupportingTextStyle(
	isErrored: boolean,
	style: TextFieldStyle,
	colourState: TextFieldColourState,
	isLeft: boolean
): CSSProperties {

	const styleMap = TEXT_FIELD_PROPERTY_MAP.style[style];

	return {
		color: colourState.supportingText.isErrored[`${isErrored}`].toColourString(),
		flexGrow: isLeft ? 1 : undefined,
		flexShrink: 0,
		fontSize: styleMap.supportingText.fontSize,
		fontWeight: styleMap.supportingText.fontWeight,
		lineHeight: styleMap.supportingText.lineHeight
	};
}

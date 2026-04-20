import type { CSSProperties } from "react";

import { TEXT_FIELD_PROPERTY_MAP } from "../../../constants/text-field-property-map.const";
import type { TextFieldStyle } from "../../../enums/text-field-style.type";
import type { TextFieldColourState } from "../../../types/text-field-colour-state.type";

/**
 * Resolve text field input label style based on parameters
 * @param style
 * @param colourState
 * @param isPopulated
 */
export function textFieldInputLabelStyle(
	style: TextFieldStyle,
	colourState: TextFieldColourState,
	isPopulated: boolean
): CSSProperties {

	const styleMap = TEXT_FIELD_PROPERTY_MAP.style[style];

	return {
		backgroundColor: "inherit",
		boxSizing: "border-box",
		color: colourState.label.toColourString(),
		flexShrink: 0,
		fontSize: styleMap.label.populated[`${isPopulated}`].fontSize,
		fontWeight: styleMap.label.populated[`${isPopulated}`].fontWeight,
		left: styleMap.label.populated[`${isPopulated}`].left,
		paddingLeft: styleMap.label.populated[`${isPopulated}`].paddingHorizontal,
		paddingRight: styleMap.label.populated[`${isPopulated}`].paddingHorizontal,
		position: "absolute",
		top: styleMap.label.populated[`${isPopulated}`].top
	};
}

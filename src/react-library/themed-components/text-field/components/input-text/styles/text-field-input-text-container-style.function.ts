import type { CSSProperties } from "react";

import { TEXT_FIELD_PROPERTY_MAP } from "../../../constants/text-field-property-map.const";
import { TextFieldStyle } from "../../../enums/text-field-style.type";

/**
 * Resolve text field input text container style based on parameters
 * @param style
 */
export function textFieldInputTextContainerStyle(style: TextFieldStyle): CSSProperties {

	const styleMap = TEXT_FIELD_PROPERTY_MAP.style[style];

	return {
		alignItems: "start",
		backgroundColor: styleMap.text.backgroundColour,
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		flexShrink: 0,
		justifyContent: "center"
	};
}

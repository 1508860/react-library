import type { CSSProperties } from "react";

import { TEXT_FIELD_PROPERTY_MAP } from "../../../constants/text-field-property-map.const";
import type { TextFieldStyle } from "../../../enums/text-field-style.type";

/**
 * Resolve text field supporting text container style based on parameters
 * @param style
 */
export function textFieldSupportingTextContainerStyle(style: TextFieldStyle): CSSProperties {

	const styleMap = TEXT_FIELD_PROPERTY_MAP.style[style];

	return {
		alignItems: "center",
		boxSizing: "border-box",
		display: "flex",
		flexDirection: "row",
		gap: styleMap.supportingText.gap,
		justifyContent: "center",
		paddingBottom: styleMap.supportingText.paddingBottom,
		paddingLeft: styleMap.supportingText.paddingHorizontal,
		paddingRight: styleMap.supportingText.paddingHorizontal,
		paddingTop: styleMap.supportingText.paddingTop,
		width: "100%"
	};
}

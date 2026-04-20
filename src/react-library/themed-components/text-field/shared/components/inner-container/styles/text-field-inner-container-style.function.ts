import type { CSSProperties } from "react";

import type { Font } from "@react-library/common";

import { TEXT_FIELD_PROPERTY_MAP } from "../../../constants/text-field-property-map.const";
import type { TextFieldStyleState } from "../../../enums/text-field-style-state.type";
import type { TextFieldColourState } from "../../../types/text-field-colour-state.type";
import type { TextFieldCommonProps } from "../../../types/text-field-common-props.type";

/**
 * Resolve text field inner container style based on parameters
 * @param commonProps
 * @param font
 * @param colourState
 * @param styleState
 */
export function textFieldInnerContainerStyle(
	commonProps: TextFieldCommonProps,
	font: Font,
	colourState: TextFieldColourState,
	styleState: TextFieldStyleState
): CSSProperties {

	const styleMap = TEXT_FIELD_PROPERTY_MAP.style[commonProps.style];

	return {
		alignItems: "center",
		backgroundColor: colourState.background?.toColourString() ?? "inherit",
		borderBottomLeftRadius: styleMap.borderRadius.bottomLeft,
		borderBottomRightRadius: styleMap.borderRadius.bottomRight,
		borderBottomStyle: styleMap.styleState[styleState].border.bottom?.style,
		borderBottomWidth: styleMap.styleState[styleState].border.bottom?.width,
		borderColor: colourState.border.toColourString(),
		borderLeftStyle: styleMap.styleState[styleState].border.left?.style,
		borderLeftWidth: styleMap.styleState[styleState].border.left?.width,
		borderRightStyle: styleMap.styleState[styleState].border.right?.style,
		borderRightWidth: styleMap.styleState[styleState].border.right?.width,
		borderTopLeftRadius: styleMap.borderRadius.topLeft,
		borderTopRightRadius: styleMap.borderRadius.topRight,
		borderTopStyle: styleMap.styleState[styleState].border.top?.style,
		borderTopWidth: styleMap.styleState[styleState].border.top?.width,
		boxSizing: "border-box",
		display: "inline-flex",
		flexDirection: "row",
		fontFamily: font.fontFamily,
		gap: styleMap.gap,
		maxWidth: commonProps.maxWidth,
		minHeight: styleMap.minHeight,
		minWidth: commonProps.minWidth,
		paddingBottom: styleMap.styleState[styleState].paddingBottom,
		paddingLeft: styleMap.styleState[styleState].paddingLeft,
		paddingRight: styleMap.styleState[styleState].paddingRight,
		paddingTop: styleMap.styleState[styleState].paddingTop,
		width: commonProps.width
	};
}

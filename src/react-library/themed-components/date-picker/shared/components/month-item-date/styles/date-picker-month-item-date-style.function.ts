import type { CSSProperties } from "react";

import type { Font } from "@react-library/common";

import { DATE_PICKER_PROPERTY_MAP } from "../../../constants/date-picker-property-map.const";
import type { DatePickerDateColourState } from "../../../types/date-picker-date-colour-state.type";

/**
 * Resolve date picker month item date style
 * @param font
 * @param colourState
 */
export function datePickerMonthItemDateStyle(
	font: Font,
	colourState: DatePickerDateColourState
): CSSProperties {
	return {
		alignItems: "center",
		backgroundColor: colourState.background?.toColourString(),
		borderColor: colourState.borderColour?.toColourString() ?? "#00000000",
		borderRadius: "50%",
		borderStyle: "solid",
		borderWidth: DATE_PICKER_PROPERTY_MAP.monthItem.date.borderWidth,
		boxSizing: "border-box",
		color: colourState.font.toColourString(),
		display: "inline-flex",
		flexShrink: 0,
		fontFamily: font.fontFamily,
		fontSize: DATE_PICKER_PROPERTY_MAP.monthItem.date.fontSize,
		fontWeight: DATE_PICKER_PROPERTY_MAP.monthItem.date.fontWeight,
		height: DATE_PICKER_PROPERTY_MAP.monthItem.date.size,
		justifyContent: "center",
		overflow: "hidden",
		position: "relative",
		width: DATE_PICKER_PROPERTY_MAP.monthItem.date.size
	};
}

import type { CSSProperties } from "react";

import type { Font } from "@react-library/common";

import { DATE_PICKER_PROPERTY_MAP } from "../../../constants/date-picker-property-map.const";
import type { DatePickerColourState } from "../../../types/date-picker-colour-state.type";

/**
 * Resolve date picker month item title style
 * @param font
 * @param colourState
 */
export function datePickerMonthItemTitleStyle(
	font: Font,
	colourState: DatePickerColourState
): CSSProperties {
	return {
		alignItems: "center",
		color: colourState.title.font.toColourString(),
		display: "inline-flex",
		flexDirection: "row",
		flexShrink: 0,
		fontFamily: font.fontFamily,
		fontSize: DATE_PICKER_PROPERTY_MAP.monthItem.title.fontSize,
		fontWeight: DATE_PICKER_PROPERTY_MAP.monthItem.title.fontWeight,
		height: DATE_PICKER_PROPERTY_MAP.monthItem.title.height
	};
}

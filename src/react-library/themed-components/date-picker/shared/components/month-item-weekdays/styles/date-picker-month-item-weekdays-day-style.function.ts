import type { CSSProperties } from "react";

import type { Font } from "@react-library/common";

import { DATE_PICKER_PROPERTY_MAP } from "../../../constants/date-picker-property-map.const";
import type { DatePickerColourState } from "../../../types/date-picker-colour-state.type";

/**
 * Resolve date picker month item weekdays day style
 * @param font
 * @param colourState
 */
export function datePickerMonthItemWeekdaysDayStyle(
	font: Font,
	colourState: DatePickerColourState
): CSSProperties {
	return {
		alignItems: "center",
		color: colourState.weekday.font.toColourString(),
		display: "inline-flex",
		flexShrink: 0,
		fontFamily: font.fontFamily,
		fontSize: DATE_PICKER_PROPERTY_MAP.monthItem.weekday.fontSize,
		fontWeight: DATE_PICKER_PROPERTY_MAP.monthItem.weekday.fontWeight,
		justifyContent: "center",
		width: DATE_PICKER_PROPERTY_MAP.monthItem.weekday.width
	};
}

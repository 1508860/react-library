import { useCallback } from "react";

import {
	DateDisplayStyle,
	DateTimeDisplayLength,
	useDateDisplayState,
	useFontContext,
	useResolveState,
	type Callback
} from "@react-library/common";

import { useDatePickerColourStateContext } from "../../hooks/date-picker-colour-state-context.hook";

import { datePickerMonthItemTitleStyle } from "./styles/date-picker-month-item-title-style.function";
import type { DatePickerMonthItemTitleProps } from "./types/date-picker-month-item-title-props.type";

/**
 * Date picker month item title
 */
export function DatePickerMonthItemTitle(props: DatePickerMonthItemTitleProps) {

	// Contexts
	const font = useFontContext();

	// Local contexts
	const colourState = useDatePickerColourStateContext();

	// Resolve date
	const resolveDate = useCallback<Callback<Date>>(
		() => new Date(Date.UTC(props.year, props.month)),
		[props.month, props.year]
	);
	const date = useResolveState(resolveDate);

	// Display text
	const title = useDateDisplayState(date, DateDisplayStyle.Month, DateTimeDisplayLength.Long);

	return (
		<div style={datePickerMonthItemTitleStyle(font, colourState)}>
			{title}
		</div>
	);
}

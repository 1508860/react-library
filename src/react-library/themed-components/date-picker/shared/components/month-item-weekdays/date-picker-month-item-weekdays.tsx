import { useState } from "react";

import {
	DATE_WEEKDAY_ALL,
	DateTimeDisplayLength,
	DateWeekday,
	useFontContext,
	useWeekdayMapDisplayState,
	type DateWeekdays,
	type IWeekday
} from "@react-library/common";

import { useDatePickerColourStateContext } from "../../hooks/date-picker-colour-state-context.hook";

import { datePickerMonthItemWeekdaysDayStyle } from "./styles/date-picker-month-item-weekdays-day-style.function";
import { DATE_PICKER_MONTH_ITEM_WEEKDAYS_STYLE } from "./styles/date-picker-month-item-weekdays-style.const";

/**
 * Date picker month item weekdays
 */
export function DatePickerMonthItemWeekdays() {

	const [weekdays] = useState<DateWeekdays>(() => DATE_WEEKDAY_ALL)

	return (
		<div style={DATE_PICKER_MONTH_ITEM_WEEKDAYS_STYLE}>
			{weekdays.map(weekday => (
				<DatePickerMonthItemWeekdaysDay
					key={weekday}
					weekday={weekday}
				/>
			))}
		</div>
	);
}

function DatePickerMonthItemWeekdaysDay(props: IWeekday<DateWeekday>) {

	// Contexts
	const font = useFontContext();

	// Local contexts
	const colourState = useDatePickerColourStateContext();

	// Display text
	const displayText = useWeekdayMapDisplayState(props.weekday, DateTimeDisplayLength.Short);

	return (
		<div style={datePickerMonthItemWeekdaysDayStyle(font, colourState)}>
			{displayText}
		</div>
	);
}

import { HoverLayer, TransitionPulse, TransitionTiming } from "@react-library/components";

import { DATE_PICKER_TRANSITION_MS } from "../../constants/date-picker-transition.const";

import { DatePickerMonthItemDate } from "../month-item-date";
import { DatePickerMonthItemDatePlaceholder } from "../month-item-date-placeholder";
import { DatePickerMonthItemDateProvider } from "../month-item-date-provider";
import { DatePickerMonthItemTitle } from "../month-item-title";
import { DatePickerMonthItemWeekdays } from "../month-item-weekdays";

import { useDatePickerMonthItemDatesState } from "./hooks/date-picker-month-item-dates-state.hook";
import { DATE_PICKER_MONTH_ITEM_STYLE } from "./styles/date-picker-month-item-style.const";
import { DATE_PICKER_MONTH_ITEM_WEEK_STYLE } from "./styles/date-picker-month-item-week-style.const ";
import type { DatePickerMonthItemProps } from "./types/date-picker-month-item-props.type";

/**
 * Date picker month item
 */
export function DatePickerMonthItem(props: DatePickerMonthItemProps) {

	const datesState = useDatePickerMonthItemDatesState(props.firstDate, props.weekCount);

	return (
		<div style={DATE_PICKER_MONTH_ITEM_STYLE}>
			<DatePickerMonthItemTitle
				key="title"
				month={props.month}
				year={props.year}
			/>
			<DatePickerMonthItemWeekdays key="weekdays" />
			{datesState.map(week => (
				<div
					key={week.weekNumber}
					style={DATE_PICKER_MONTH_ITEM_WEEK_STYLE}
				>
					{week.dates.map(date => (
						date.day !== undefined ?
							<DatePickerMonthItemDateProvider
								day={date.day}
								key={date.weekday}
								month={props.month}
								weekday={date.weekday}
								year={props.year}
							>
								<DatePickerMonthItemDate
									day={date.day}
									month={props.month}
									year={props.year}
								>
									<TransitionPulse
										durationMs={DATE_PICKER_TRANSITION_MS}
										key="pulse-layer"
										timing={TransitionTiming.EaseInOut}
									/>
									<HoverLayer key="hover-layer" />
								</DatePickerMonthItemDate>
							</DatePickerMonthItemDateProvider> :
							<DatePickerMonthItemDatePlaceholder key={`placeholder-${date.weekday}`} />
					))}
				</div>
			))}
		</div>
	);
}

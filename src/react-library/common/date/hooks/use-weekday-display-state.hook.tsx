import { useEffect, useState } from "react";

import type { DateTimeDisplayLength } from "../enums/date-time-display-length.type";
import type { DateTimeDisplayState } from "../types/date-time-display-state.type";
import type { DateTimeValue } from "../types/date-time-value.type";
import { useDateTimeDisplayFormatterState } from "./use-date-time-display-formatter-state.hook";

/**
 * Custom hook for a weekday be formatted to a display date for a given {@link DateTimeDisplayLength}
 * @param value
 * @param length
 */
export function useWeekdayDisplayState(value: DateTimeValue, length: DateTimeDisplayLength): [DateTimeDisplayState] {

	const [state, setState] = useState<DateTimeDisplayState>(() => "");

	const [dateTimeDisplayFormatter] = useDateTimeDisplayFormatterState(undefined, undefined, true, length);

	useEffect(
		() => setState(value ? dateTimeDisplayFormatter.format(value) : ""),
		[value, dateTimeDisplayFormatter]
	);

	return [state];
}

import { useEffect, useState } from "react";

import type { DateDisplayStyle } from "../enums/date-display-style.type";
import type { DateTimeDisplayLength } from "../enums/date-time-display-length.type";
import type { DateTimeDisplayState } from "../types/date-time-display-state.type";
import type { DateTimeValue } from "../types/date-time-value.type";
import { useDateTimeDisplayFormatterState } from "./use-date-time-display-formatter-state.hook";

/**
 * Custom hook for a date be formatted to a display date for a given {@link DateDisplayStyle} and {@link DateTimeDisplayLength}
 * @param value
 * @param dateStyle
 * @param length
 */
export function useDateDisplayState(value: DateTimeValue, dateStyle: DateDisplayStyle, length: DateTimeDisplayLength): [DateTimeDisplayState] {

	const [state, setState] = useState<DateTimeDisplayState>(() => "");

	const [dateTimeDisplayFormatter] = useDateTimeDisplayFormatterState(dateStyle, undefined, length);

	useEffect(
		() => setState(value ? dateTimeDisplayFormatter.format(value) : ""),
		[value, dateTimeDisplayFormatter]
	);

	return [state];
}

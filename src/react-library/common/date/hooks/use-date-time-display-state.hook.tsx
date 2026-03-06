import { useEffect, useState } from "react";

import type { DateDisplayStyle } from "../enums/date-display-style.type";
import type { TimeDisplayStyle } from "../enums/time-display-style.type";
import type { DateTimeDisplayState } from "../types/date-time-display-state.type";
import type { DateTimeValue } from "../types/date-time-value.type";
import { useDateTimeDisplayFormatterState } from "./use-date-time-display-formatter-state.hook";

/**
 * Custom hook for a date-time be formatted to a display date for a given {@link DateDisplayStyle} and {@link TimeDisplayStyle}
 * @param value
 * @param dateStyle
 * @param timeStyle
 */
export function useDateTimeDisplayState(value: DateTimeValue, dateStyle: DateDisplayStyle, timeStyle: TimeDisplayStyle): [DateTimeDisplayState] {

	const [state, setState] = useState<DateTimeDisplayState>(() => "");

	const [dateTimeDisplayFormatter] = useDateTimeDisplayFormatterState(dateStyle, timeStyle);

	useEffect(
		() => setState((value && dateTimeDisplayFormatter) ? dateTimeDisplayFormatter.format(value) : ""),
		[value, dateTimeDisplayFormatter]
	);

	return [state];
}

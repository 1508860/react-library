import { useEffect, useState } from "react";

import { DateDisplayStyle } from "../enums/date-display-style.type";
import type { DateTimeDisplayLength } from "../enums/date-time-display-length.type";
import type { TimeDisplayStyle } from "../enums/time-display-style.type";
import type { DateTimeDisplayState } from "../types/date-time-display-state.type";
import type { DateTimeValue } from "../types/date-time-value.type";
import { useDateTimeDisplayFormatterState } from "./use-date-time-display-formatter-state.hook";

/**
 * Custom hook for a date-time be formatted to a display date for a given {@link TimeDisplayStyle} and {@link DateTimeDisplayLength}
 * The date style is assumed to be {@link DateDisplayStyle.Day} as a full date time requires a full date
 * @param value
 * @param timeStyle
 * @param length
 */
export function useDateTimeDisplayState(value: DateTimeValue, timeStyle: TimeDisplayStyle, length: DateTimeDisplayLength): [DateTimeDisplayState] {

	const [state, setState] = useState<DateTimeDisplayState>(() => "");

	const [dateTimeDisplayFormatter] = useDateTimeDisplayFormatterState(DateDisplayStyle.Day, timeStyle, length);

	useEffect(
		() => setState(value ? dateTimeDisplayFormatter.format(value) : ""),
		[value, dateTimeDisplayFormatter]
	);

	return [state];
}

import { useEffect, useState } from "react";

import type { DateTimeDisplayLength } from "../enums/date-time-display-length.type";
import type { TimeDisplayStyle } from "../enums/time-display-style.type";
import type { DateTimeDisplayState } from "../types/date-time-display-state.type";
import type { DateTimeValue } from "../types/date-time-value.type";
import { useDateTimeDisplayFormatterState } from "./use-date-time-display-formatter-state.hook";

/**
 * Custom hook for a time be formatted to a display date for a given {@link TimeDisplayStyle} and {@link DateTimeDisplayLength}
 * @param value
 * @param timeStyle
 * @param length
 */
export function useTimeDisplayState(value: DateTimeValue, timeStyle: TimeDisplayStyle, length: DateTimeDisplayLength): [DateTimeDisplayState] {

	const [state, setState] = useState<DateTimeDisplayState>(() => "");

	const [dateTimeDisplayFormatter] = useDateTimeDisplayFormatterState(undefined, timeStyle, false, length);

	useEffect(
		() => setState(value ? dateTimeDisplayFormatter.format(value) : ""),
		[value, dateTimeDisplayFormatter]
	);

	return [state];
}

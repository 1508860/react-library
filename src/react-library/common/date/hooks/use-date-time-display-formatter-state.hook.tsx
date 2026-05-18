import { useCallback } from "react";

import { useResolveState } from "../../hooks";
import { useLanguageCodeContext } from "../../iso";
import type { Callback } from "../../types";

import { DateDisplayStyle } from "../enums/date-display-style.type";
import type { DateTimeDisplayLength } from "../enums/date-time-display-length.type";
import type { TimeDisplayStyle } from "../enums/time-display-style.type";
import { resolveDateTimeDisplayFormatterDateOptions } from "../functions/resolve-date-time-display-formatter-date-options.function";
import { resolveDateTimeDisplayFormatterTimeOptions } from "../functions/resolve-date-time-display-formatter-time-options.function";
import { resolveDateTimeDisplayFormatterWeekdayOptions } from "../functions/resolve-date-time-display-formatter-weekday-options.function";
import type { DateTimeDisplayFormatterOptions } from "../types/date-time-display-formatter-options.type";

/**
 * Custom hook for resolving a date time formatter
 * @param dateStyle
 * @param timeStyle
 * @param weekday
 * @param length
 */
export function useDateTimeDisplayFormatterState(
	dateStyle: DateDisplayStyle | undefined,
	timeStyle: TimeDisplayStyle | undefined,
	weekday: boolean,
	length: DateTimeDisplayLength
): [Intl.DateTimeFormat] {

	const languageCode = useLanguageCodeContext();

	const resolveState = useCallback<Callback<Intl.DateTimeFormat>>(
		() => {
			const options: DateTimeDisplayFormatterOptions = {};

			if (dateStyle !== undefined) resolveDateTimeDisplayFormatterDateOptions(options, dateStyle, length);
			if (timeStyle !== undefined) resolveDateTimeDisplayFormatterTimeOptions(options, timeStyle, length);
			if (weekday) resolveDateTimeDisplayFormatterWeekdayOptions(options, length);

			return new Intl.DateTimeFormat(languageCode, options);
		},
		[dateStyle, timeStyle, weekday, length, languageCode]
	);

	const state = useResolveState<Intl.DateTimeFormat>(resolveState);

	return [state];
}

import { useCallback, useEffect, useState } from "react";

import { useLanguageCodeContext } from "../../iso";
import { DateDisplayStyle } from "../enums/date-display-style.type";
import type { DateTimeDisplayLength } from "../enums/date-time-display-length.type";
import type { TimeDisplayStyle } from "../enums/time-display-style.type";
import { resolveDateTimeDisplayFormatterDateOptions } from "../functions/resolve-date-time-display-formatter-date-options.function";
import { resolveDateTimeDisplayFormatterTimeOptions } from "../functions/resolve-date-time-display-formatter-time-options.function";
import type { DateTimeDisplayFormatterOptions } from "../types/date-time-display-formatter-options.type";

/**
 * Custom hook for resolving a date time formatter
 * @param dateStyle
 * @param timeStyle
 * @param length
 */
export function useDateTimeDisplayFormatterState(
	dateStyle: DateDisplayStyle | undefined,
	timeStyle: TimeDisplayStyle | undefined,
	length: DateTimeDisplayLength
): [Intl.DateTimeFormat] {

	const languageCode = useLanguageCodeContext();

	const resolveState = useCallback<() => Intl.DateTimeFormat>(
		() => {
			const options: DateTimeDisplayFormatterOptions = {};

			if (dateStyle !== undefined) resolveDateTimeDisplayFormatterDateOptions(options, dateStyle, length);
			if (timeStyle !== undefined) resolveDateTimeDisplayFormatterTimeOptions(options, timeStyle, length);

			return new Intl.DateTimeFormat(languageCode, options);
		},
		[dateStyle, timeStyle, length, languageCode]
	);

	const [state, setState] = useState<Intl.DateTimeFormat>(() => resolveState());

	useEffect(
		() => setState(resolveState()),
		[resolveState]
	);

	return [state];
}

import { useCallback, useEffect, useState } from "react";

import { useLanguageCodeContext } from "../../iso";
import { DateDisplayStyle } from "../enums/date-display-style.type";
import type { TimeDisplayStyle } from "../enums/time-display-style.type";
import { resolveDateTimeDisplayFormatterDateOptions } from "../functions/resolve-date-time-display-formatter-date-options.function";
import { resolveDateTimeDisplayFormatterTimeOptions } from "../functions/resolve-date-time-display-formatter-time-options.function";
import type { DateTimeDisplayFormatterOptions } from "../types/date-time-display-formatter-options.type";

/**
 * Custom hook for resolving a date time formatter
 * @param dateStyle
 * @param timeStyle
 */
export function useDateTimeDisplayFormatterState(dateStyle?: DateDisplayStyle, timeStyle?: TimeDisplayStyle): [Intl.DateTimeFormat] {

	const languageCode = useLanguageCodeContext();

	const resolveState = useCallback<() => Intl.DateTimeFormat>(
		() => {
			const options: DateTimeDisplayFormatterOptions = {};

			resolveDateTimeDisplayFormatterDateOptions(options, dateStyle);
			resolveDateTimeDisplayFormatterTimeOptions(options, timeStyle);

			return new Intl.DateTimeFormat(languageCode, options);
		},
		[dateStyle, timeStyle, languageCode]
	);

	const [state, setState] = useState<Intl.DateTimeFormat>(() => resolveState());

	useEffect(
		() => setState(resolveState()),
		[resolveState]
	);

	return [state];
}

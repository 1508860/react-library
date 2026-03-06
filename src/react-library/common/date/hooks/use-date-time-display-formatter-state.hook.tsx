import { useEffect, useState } from "react";

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
export function useDateTimeDisplayFormatterState(dateStyle?: DateDisplayStyle, timeStyle?: TimeDisplayStyle): [Intl.DateTimeFormat | null] {

	const languageCode = useLanguageCodeContext();

	const [state, setState] = useState<Intl.DateTimeFormat | null>(null);

	useEffect(
		() => {

			const options: DateTimeDisplayFormatterOptions = {};

			resolveDateTimeDisplayFormatterDateOptions(options, dateStyle);
			resolveDateTimeDisplayFormatterTimeOptions(options, timeStyle);

			setState(new Intl.DateTimeFormat(languageCode, options));
		},
		[dateStyle, timeStyle, languageCode]
	);

	return [state];
}

import { useCallback } from "react";

import { useResolveState } from "../../../hooks";
import { useLanguageCodeContext } from "../../../iso";
import type { Callback } from "../../../types";

import { resolveDateTimeDisplayFormatterDayOptions } from "../../functions/display-formatter-options/resolve-date-time-display-formatter-day-options.function";
import { resolveDateTimeDisplayFormatterMonthOptions } from "../../functions/display-formatter-options/resolve-date-time-display-formatter-month-options.function";
import { resolveDateTimeDisplayFormatterTimeOptions } from "../../functions/display-formatter-options/resolve-date-time-display-formatter-time-options.function";
import { resolveDateTimeDisplayFormatterWeekdayOptions } from "../../functions/display-formatter-options/resolve-date-time-display-formatter-weekday-options.function";
import { resolveDateTimeDisplayFormatterYearOptions } from "../../functions/display-formatter-options/resolve-date-time-display-formatter-year-options.function";
import type { DateTimeDisplayFormatterConfig } from "../../types/date-time-display-formatter-config.type";
import type { DateTimeDisplayFormatterOptions } from "../../types/date-time-display-formatter-options.type";

/**
 * Custom hook for resolving a date time formatter
 * @param config
 */
export function useDateTimeDisplayFormatterState(config: DateTimeDisplayFormatterConfig): [Intl.DateTimeFormat] {

	const languageCode = useLanguageCodeContext();

	const resolveState = useCallback<Callback<Intl.DateTimeFormat>>(
		() => {
			const options: DateTimeDisplayFormatterOptions = {};

			if (config.year) resolveDateTimeDisplayFormatterYearOptions(options, config.length);
			if (config.month) resolveDateTimeDisplayFormatterMonthOptions(options, config.length);
			if (config.day) resolveDateTimeDisplayFormatterDayOptions(options, config.length);
			if (config.timeDisplayStyle !== undefined) resolveDateTimeDisplayFormatterTimeOptions(options, config.timeDisplayStyle, config.length);
			if (config.weekday) resolveDateTimeDisplayFormatterWeekdayOptions(options, config.length);

			return new Intl.DateTimeFormat(languageCode, options);
		},
		[config.day, config.length, config.month, config.timeDisplayStyle, config.weekday, config.year, languageCode]
	);

	const state = useResolveState<Intl.DateTimeFormat>(resolveState);

	return [state];
}

import { DateTimeDisplayLength } from "../enums/date-time-display-length.type";
import type { DateTimeDisplayFormatterOptions } from "../types/date-time-display-formatter-options.type";

/**
 * Resolve the weekday options for the date display formatter.
 * Based on {@link DateTimeDisplayLength}.
 * Add to {@link options}
 * @param options
 * @param length
 */
export function resolveDateTimeDisplayFormatterWeekdayOptions(
	options: DateTimeDisplayFormatterOptions,
	length: DateTimeDisplayLength
): DateTimeDisplayFormatterOptions {

	switch (length) {
		case DateTimeDisplayLength.Short: {
			options.weekday = "narrow";
			return options;
		}
		case DateTimeDisplayLength.Medium: {
			options.weekday = "short";
			return options;
		}
		case DateTimeDisplayLength.Long: {
			options.weekday = "long";
			return options;
		}
	}
}

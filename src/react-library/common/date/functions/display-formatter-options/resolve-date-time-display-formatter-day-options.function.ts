import { DateTimeDisplayLength } from "../../enums/date-time-display-length.type";
import type { DateTimeDisplayFormatterOptions } from "../../types/date-time-display-formatter-options.type";

/**
 * Resolve the day options for the date display formatter.
 * Based on {@link DateTimeDisplayLength}.
 * Add to {@link options}
 * @param options
 * @param length
 */
export function resolveDateTimeDisplayFormatterDayOptions(
	options: DateTimeDisplayFormatterOptions,
	length: DateTimeDisplayLength
): DateTimeDisplayFormatterOptions {

	switch (length) {
		case DateTimeDisplayLength.Short: {
			options.day = "numeric";
			return options;
		}
		case DateTimeDisplayLength.Medium: {
			options.day = "2-digit";
			return options;
		}
		case DateTimeDisplayLength.Long: {
			options.day = "2-digit";
			return options;
		}
	}
}

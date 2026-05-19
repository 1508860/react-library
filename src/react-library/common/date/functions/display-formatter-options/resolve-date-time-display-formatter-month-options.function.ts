import { DateTimeDisplayLength } from "../../enums/date-time-display-length.type";
import type { DateTimeDisplayFormatterOptions } from "../../types/date-time-display-formatter-options.type";

/**
 * Resolve the month options for the date display formatter.
 * Based on {@link DateTimeDisplayLength}.
 * Add to {@link options}
 * @param options
 * @param length
 */
export function resolveDateTimeDisplayFormatterMonthOptions(
	options: DateTimeDisplayFormatterOptions,
	length: DateTimeDisplayLength
): DateTimeDisplayFormatterOptions {

	switch (length) {
		case DateTimeDisplayLength.Short: {
			options.month = "numeric";
			return options;
		}
		case DateTimeDisplayLength.Medium: {
			options.month = "short";
			return options;
		}
		case DateTimeDisplayLength.Long: {
			options.month = "long";
			return options;
		}
	}
}

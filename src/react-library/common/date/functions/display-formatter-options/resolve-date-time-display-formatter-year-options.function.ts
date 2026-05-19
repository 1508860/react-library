import { DateTimeDisplayLength } from "../../enums/date-time-display-length.type";
import type { DateTimeDisplayFormatterOptions } from "../../types/date-time-display-formatter-options.type";

/**
 * Resolve the year options for the date display formatter.
 * Based on {@link DateTimeDisplayLength}.
 * Add to {@link options}
 * @param options
 * @param length
 */
export function resolveDateTimeDisplayFormatterYearOptions(
	options: DateTimeDisplayFormatterOptions,
	length: DateTimeDisplayLength
): DateTimeDisplayFormatterOptions {

	switch (length) {
		case DateTimeDisplayLength.Short: {
			options.year = "2-digit";
			return options;
		}
		case DateTimeDisplayLength.Medium: {
			options.year = "2-digit";
			return options;
		}
		case DateTimeDisplayLength.Long: {
			options.year = "numeric";
			return options;
		}
	}
}

import { DateDisplayStyle } from "../enums/date-display-style.type";
import { DateTimeDisplayLength } from "../enums/date-time-display-length.type";
import type { DateTimeDisplayFormatterOptions } from "../types/date-time-display-formatter-options.type";

/**
 * Resolve the date options for the date display formatter.
 * Based on {@link TimeDisplayStyle} and {@link DateTimeDisplayLength}.
 * Add to {@link options}
 * @param options
 * @param dateStyle
 * @param length
 */
export function resolveDateTimeDisplayFormatterDateOptions(
	options: DateTimeDisplayFormatterOptions,
	dateStyle: DateDisplayStyle,
	length: DateTimeDisplayLength
): DateTimeDisplayFormatterOptions {

	switch (length) {
		case DateTimeDisplayLength.Short: {
			switch (dateStyle) {
				case DateDisplayStyle.Year:
					options.year = "2-digit";
					break;
				case DateDisplayStyle.Month:
					options.year = "2-digit";
					options.month = "numeric"
					break;
				case DateDisplayStyle.Day:
					options.year = "2-digit";
					options.month = "numeric"
					options.day = "numeric";
					break;
			}
			return options;
		}
		case DateTimeDisplayLength.Medium: {
			switch (dateStyle) {
				case DateDisplayStyle.Year:
					options.year = "2-digit";
					break;
				case DateDisplayStyle.Month:
					options.year = "2-digit";
					options.month = "short";
					break;
				case DateDisplayStyle.Day:
					options.year = "2-digit";
					options.month = "short";
					options.day = "2-digit";
					break;
			}
			return options;
		}
		case DateTimeDisplayLength.Long: {
			switch (dateStyle) {
				case DateDisplayStyle.Year:
					options.year = "numeric";
					break;
				case DateDisplayStyle.Month:
					options.year = "numeric";
					options.month = "long";
					break;
				case DateDisplayStyle.Day:
					options.year = "numeric";
					options.month = "long";
					options.day = "2-digit";
					break;
			}
			return options;
		}
	}
}

import { DateTimeDisplayLength } from "../../enums/date-time-display-length.type";
import { TimeDisplayStyle } from "../../enums/time-display-style.type";
import type { DateTimeDisplayFormatterOptions } from "../../types/date-time-display-formatter-options.type";

/**
 * Resolve the time options for the date display formatter.
 * Based on {@link TimeDisplayStyle} and {@link DateTimeDisplayLength}.
 * Add to {@link options}
 * @param options
 * @param timeStyle
 * @param length
 */
export function resolveDateTimeDisplayFormatterTimeOptions(
	options: DateTimeDisplayFormatterOptions,
	timeStyle: TimeDisplayStyle,
	length: DateTimeDisplayLength
): DateTimeDisplayFormatterOptions {

	switch (length) {
		case DateTimeDisplayLength.Short: {
			switch (timeStyle) {
				case TimeDisplayStyle.Hour:
					options.hour = "numeric";
					break;
				case TimeDisplayStyle.Minute:
					options.hour = "numeric";
					options.minute = "numeric";
					break;
				case TimeDisplayStyle.Second:
					options.hour = "numeric";
					options.minute = "numeric";
					options.second = "numeric";
					break;
				case TimeDisplayStyle.Decisecond:
					options.hour = "numeric";
					options.minute = "numeric";
					options.second = "numeric";
					options.fractionalSecondDigits = 1;
					break;
				case TimeDisplayStyle.Centisecond:
					options.hour = "numeric";
					options.minute = "numeric";
					options.second = "numeric";
					options.fractionalSecondDigits = 2;
					break;
				case TimeDisplayStyle.Millisecond:
					options.hour = "numeric";
					options.minute = "numeric";
					options.second = "numeric";
					options.fractionalSecondDigits = 3;
					break;
			}
			return options;
		}
		case DateTimeDisplayLength.Medium: {
			switch (timeStyle) {
				case TimeDisplayStyle.Hour:
					options.hour = "2-digit";
					break;
				case TimeDisplayStyle.Minute:
					options.hour = "2-digit";
					options.minute = "2-digit";
					break;
				case TimeDisplayStyle.Second:
					options.hour = "2-digit";
					options.minute = "2-digit";
					options.second = "2-digit";
					break;
				case TimeDisplayStyle.Decisecond:
					options.hour = "2-digit";
					options.minute = "2-digit";
					options.second = "2-digit";
					options.fractionalSecondDigits = 1;
					break;
				case TimeDisplayStyle.Centisecond:
					options.hour = "2-digit";
					options.minute = "2-digit";
					options.second = "2-digit";
					options.fractionalSecondDigits = 2;
					break;
				case TimeDisplayStyle.Millisecond:
					options.hour = "2-digit";
					options.minute = "2-digit";
					options.second = "2-digit";
					options.fractionalSecondDigits = 3;
					break;
			}
			return options;
		}
		case DateTimeDisplayLength.Long: {
			switch (timeStyle) {
				case TimeDisplayStyle.Hour:
					options.hour = "2-digit";
					break;
				case TimeDisplayStyle.Minute:
					options.hour = "2-digit";
					options.minute = "2-digit";
					break;
				case TimeDisplayStyle.Second:
					options.hour = "2-digit";
					options.minute = "2-digit";
					options.second = "2-digit";
					break;
				case TimeDisplayStyle.Decisecond:
					options.hour = "2-digit";
					options.minute = "2-digit";
					options.second = "2-digit";
					options.fractionalSecondDigits = 1;
					break;
				case TimeDisplayStyle.Centisecond:
					options.hour = "2-digit";
					options.minute = "2-digit";
					options.second = "2-digit";
					options.fractionalSecondDigits = 2;
					break;
				case TimeDisplayStyle.Millisecond:
					options.hour = "2-digit";
					options.minute = "2-digit";
					options.second = "2-digit";
					options.fractionalSecondDigits = 3;
					break;
			}
			return options;
		}
	}
}

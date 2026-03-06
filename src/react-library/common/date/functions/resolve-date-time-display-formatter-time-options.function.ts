import { TimeDisplayStyle } from "../enums/time-display-style.type";
import type { DateTimeDisplayFormatterOptions } from "../types/date-time-display-formatter-options.type";

/**
 * Resolve the time options for the date display formatter based on {@link TimeDisplayStyle} and add to {@link options}
 * @param options
 * @param style
 */
export function resolveDateTimeDisplayFormatterTimeOptions(
	options: DateTimeDisplayFormatterOptions,
	timeStyle?: TimeDisplayStyle
): DateTimeDisplayFormatterOptions {

	if (timeStyle !== undefined) {
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
	}

	return options;
}

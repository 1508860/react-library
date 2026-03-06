import { DateDisplayStyle } from "../enums/date-display-style.type";
import type { DateTimeDisplayFormatterOptions } from "../types/date-time-display-formatter-options.type";

/**
 * Resolve the date options for the date display formatter based on {@link DateDisplayStyle} and add to {@link options}
 * @param options
 * @param style
 */
export function resolveDateTimeDisplayFormatterDateOptions(
	options: DateTimeDisplayFormatterOptions,
	dateStyle?: DateDisplayStyle
): DateTimeDisplayFormatterOptions {

	if (dateStyle !== undefined) {
		switch (dateStyle) {
			case DateDisplayStyle.Short:
				options.year = "numeric";
				options.month = "numeric";
				options.day = "numeric";
				break;
			case DateDisplayStyle.Medium:
				options.year = "2-digit";
				options.month = "short";
				options.day = "2-digit";
				break;
			case DateDisplayStyle.Long:
				options.year = "2-digit";
				options.month = "long";
				options.day = "2-digit";
				break;
		}
	}

	return options;
}

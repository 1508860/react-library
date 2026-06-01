import type { DateTimeDisplayFormatterConfig } from "../../types/date-time-display-formatter-config.type";

/**
 * Compare two objects of type {@link DateTimeDisplayFormatterConfig} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isDateTimeDisplayFormatterConfigEqual(value1: DateTimeDisplayFormatterConfig, value2: DateTimeDisplayFormatterConfig): boolean {
	return (
		value1.day === value2.day &&
		value1.length === value2.length &&
		value1.month === value2.month &&
		value1.timeDisplayStyle === value2.timeDisplayStyle &&
		value1.weekday === value2.weekday &&
		value1.year === value2.year
	);
}

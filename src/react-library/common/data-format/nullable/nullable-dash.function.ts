/**
 * Function to determine if value is null or undefined.
 * Return a dash if so, otherwise returns the original value
 * Typically only used for display purposes in a component render template
 */
export function nullableDash<TValue>(value: TValue): TValue | string {
	if (value === undefined || value === null) return "-";

	return value;
}
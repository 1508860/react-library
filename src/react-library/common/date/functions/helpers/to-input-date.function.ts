/**
 * Function to map a {@link Date} to a formatted string for date inputs (exludes time)
 * @param date
 */
export function toInputDate(date: Date): string {
	return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

/**
 * Function to map a {@link Date} to a formatted string for date inputs (exludes time) in UTC format
 * @param date
 */
export function toInputUTCDate(date: Date): string {
	return `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()}`;
}

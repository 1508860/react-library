/**
 * Function to add a number of days to an existing date
 * - A negative value subtracts days
 * - Mutates date parameter
 * @param date
 * @param days
 */
export function dateAddDays(date: Date, days: number): Date {
	date.setUTCDate(date.getUTCDate() + days);
	return date;
}

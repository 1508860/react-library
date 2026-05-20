/**
 * Function to add a number of months to an existing date
 * - A negative value subtracts months
 * - Mutates date parameter
 * @param date
 * @param months
 */
export function dateAddMonths(date: Date, months: number): Date {
	const currentMonth = date.getUTCMonth();
	date.setUTCMonth(currentMonth + months);
	return date;
}

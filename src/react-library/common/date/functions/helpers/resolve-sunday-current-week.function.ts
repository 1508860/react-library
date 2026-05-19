/**
 * Function to resolve Sunday's date for the current week
 */
export function resolveSundayCurrentWeek(): Date {
	const date = new Date();
	const day = date.getUTCDay();
	date.setUTCDate(date.getUTCDate() - day);
	return date;
}

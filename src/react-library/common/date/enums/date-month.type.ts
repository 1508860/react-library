/**
 * Date month
 * Note: Value maps to days of week from {@link Date.prototype.getMonth} and {@link Date.prototype.getUTCMonth}
 */
export const DateMonth = {
	January: 0,
	February: 1,
	March: 2,
	April: 3,
	May: 4,
	June: 5,
	July: 6,
	August: 7,
	September: 8,
	October: 9,
	November: 10,
	December: 11
} as const satisfies Record<string, number>;

/**
 * Type for {@link DateMonth}
 */
export type DateMonth = (typeof DateMonth)[keyof typeof DateMonth];

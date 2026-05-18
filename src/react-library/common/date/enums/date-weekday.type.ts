/**
 * Date weekday
 * Note: Value maps to days of week from {@link Date.prototype.getDay} and {@link Date.prototype.getUTCDay}
 */
export const DateWeekday = {
	Sunday: 0,
	Monday: 1,
	Tuesday: 2,
	Wednesday: 3,
	Thursday: 4,
	Friday: 5,
	Saturday: 6
} as const satisfies Record<string, number>;

/**
 * Type for {@link DateWeekday}
 */
export type DateWeekday = (typeof DateWeekday)[keyof typeof DateWeekday];

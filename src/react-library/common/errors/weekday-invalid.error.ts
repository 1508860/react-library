/**
 * Error to be used when a date weekday is invalid
 */
export class WeekdayInvalidError extends Error {
	constructor() {
		super("The weekday is invalid")
		this.name = "WeekdayInvalidError";
		Object.setPrototypeOf(this, WeekdayInvalidError.prototype);
	}
}

/**
 * Error to be used when a date month is invalid
 */
export class MonthInvalidError extends Error {
	constructor() {
		super("The month is invalid")
		this.name = "MonthInvalidError";
		Object.setPrototypeOf(this, MonthInvalidError.prototype);
	}
}

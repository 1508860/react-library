/**
 * Error to be used when a React Context value can be null but should not be null when accessed
 */
export class NullContextError extends Error {
	constructor() {
		super("The context is incorrectly set as null")
		this.name = "NullContextError";
		Object.setPrototypeOf(this, NullContextError.prototype);
	}
}

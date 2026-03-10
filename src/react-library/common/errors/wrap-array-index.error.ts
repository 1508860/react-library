/**
 * Error to be used when an array index needs to be wrapped
 */
export class WrapArrayIndexError extends Error {
	constructor() {
		super("The wrap array index operation is invalid")
		this.name = "WrapArrayIndexError";
		Object.setPrototypeOf(this, WrapArrayIndexError.prototype);
	}
}

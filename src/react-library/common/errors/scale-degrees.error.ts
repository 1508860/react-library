/**
 * Error to be used when a scale degrees value is invalid
 */
export class ScaleDegreesError extends Error {
	constructor() {
		super("The scale degrees value is invalid")
		this.name = "ScaleDegreesError";
		Object.setPrototypeOf(this, ScaleDegreesError.prototype);
	}
}

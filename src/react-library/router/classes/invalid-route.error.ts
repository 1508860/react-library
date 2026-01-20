/**
 * Error to be used when a router route is invalid
 */
export class InvalidRouteError extends Error {
	constructor() {
		super("The current route is invalid")
		this.name = "InvalidRouteError";
		Object.setPrototypeOf(this, InvalidRouteError.prototype);
	}
}

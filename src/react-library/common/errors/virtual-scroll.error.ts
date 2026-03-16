/**
 * Error to be used when a virtual scroll experiences an error when rendering items
 */
export class VirtualScrollError extends Error {
	constructor() {
		super("The virtual scroll has failed to resolve items to render")
		this.name = "VirtualScrollError";
		Object.setPrototypeOf(this, VirtualScrollError.prototype);
	}
}

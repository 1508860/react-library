import type { Guid } from "./guid.type";

/**
 * Generate and return a GUID
 * @returns new {@link Guid}
 */
export function generateGuid(): Guid {
	return crypto.randomUUID();
}

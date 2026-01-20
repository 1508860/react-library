import type { SizeWithUnits } from "../../units";

/**
 * Function for resolving the CSS function statement necessary for getting the maximum value of an element
 * @param values
 */
export function styleMax<TSize extends SizeWithUnits>(values: [TSize, TSize, ...Array<TSize>]): string {
	return `max(${values.reduce((a, b, i) => `${a}${i === 0 ? "" : ", "}${b}`, "")})`;
}

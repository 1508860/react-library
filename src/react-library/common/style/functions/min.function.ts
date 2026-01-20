import type { SizeWithUnits } from "../../units";

/**
 * Function for resolving the CSS function statement necessary for getting the minimum value of an element
 * @param values
 */
export function styleMin<TSize extends SizeWithUnits>(values: [TSize, TSize, ...Array<TSize>]): string {
	return `min(${values.reduce((a, b, i) => `${a}${i === 0 ? "" : ", "}${b}`, "")})`;
}

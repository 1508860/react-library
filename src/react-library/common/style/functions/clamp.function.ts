import type { SizeWithUnits } from "../../units";

/**
 * Function for resolving the CSS function statement necessary for getting the clamped value of an element
 * @param values
 */
export function styleClamp<
	TMin extends SizeWithUnits,
	TValue extends SizeWithUnits,
	TMax extends SizeWithUnits
>(
	min: TMin,
	value: TValue,
	max: TMax
): string {
	return `clamp(${min}, ${value}, ${max})`;
}

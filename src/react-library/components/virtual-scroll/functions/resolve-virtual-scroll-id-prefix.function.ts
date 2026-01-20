/**
 * Function to resolve the virtual scroll string id prefix from an array of ids
 * @param values
 */
export function resolveVirtualScrollIdPrefix(values: [(number | string), ...Array<number | string>]): string {
	return values.reduce<string>((a, b, i) => `${a}${i === 0 ? "" : "-"}${b}`, "");
}

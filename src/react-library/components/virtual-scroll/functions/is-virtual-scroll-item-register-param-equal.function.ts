import type { VirtualScrollItemRegisterParam } from "../types/virtual-scroll-item-register.type";

/**
 * Compare two objects of type {@link VirtualScrollItemRegisterParam} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isVirtualScrollItemRegisterParamEqual(value1: VirtualScrollItemRegisterParam, value2: VirtualScrollItemRegisterParam): boolean {
	return (
		value1.id === value2.id &&
		value1.index === value2.index &&
		value1.size === value2.size
	);
}

import type { VirtualScrollContainerProps } from "../types/virtual-scroll-container-props.type";

/**
 * Compare two objects of type {@link VirtualScrollContainerProps} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isVirtualScrollContainerPropsEqual(value1: VirtualScrollContainerProps, value2: VirtualScrollContainerProps): boolean {
	return (
		value1.onScroll === value2.onScroll &&
		value1.orientation === value2.orientation &&
		value1.ref === value2.ref
	);
}

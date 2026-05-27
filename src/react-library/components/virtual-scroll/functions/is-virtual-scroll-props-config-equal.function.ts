import type { VirtualScrollPropsConfig } from "../types/virtual-scroll-props-config.type";

/**
 * Compare two objects of type {@link VirtualScrollPropsConfig} and check if all values are equal
 * @param value1
 * @param value2
 */
export function isVirtualScrollPropsConfigEqual(value1: VirtualScrollPropsConfig, value2: VirtualScrollPropsConfig): boolean {
	return (
		value1.itemBufferCount === value2.itemBufferCount &&
		value1.itemSize === value2.itemSize &&
		value1.orientation === value2.orientation &&
		value1.contentWidth === value2.contentWidth
	);
}

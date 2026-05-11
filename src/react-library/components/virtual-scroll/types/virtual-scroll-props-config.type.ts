import type { IItemBufferCount, IItemSize, IOrientation } from "@react-library/common";

import type { VirtualScrollItemSize } from "./virtual-scroll-item-size.type";
import type { VirtualScrollOrientation } from "./virtual-scroll-orientation.type";

/**
 * Props for virtual scroll component config
 */
export type VirtualScrollPropsConfig = (
	/**
	 * Buffer for number of items that should be rendered before and after the visible viewport
	 * Note: applies to one direction so the number of extra rows will be up to double this
	 */
	IItemBufferCount<number> &
	IItemSize<VirtualScrollItemSize> &
	IOrientation<VirtualScrollOrientation>
);

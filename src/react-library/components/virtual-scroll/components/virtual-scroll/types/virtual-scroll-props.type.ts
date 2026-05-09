
import type { IChild, IItemBufferCount, IItemSize, IOrientation } from "@react-library/common";

import type { VirtualScrollContainer } from "../../../types/virtual-scroll-container.type";
import type { VirtualScrollItemSize } from "../../../types/virtual-scroll-item-size.type";
import type { VirtualScrollOrientation } from "../../../types/virtual-scroll-orientation.type";

/**
 * Props for virtual scroll component
 */
export type VirtualScrollProps = (
	IChild<VirtualScrollContainer> &
	VirtualScrollPropsConfig
);

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

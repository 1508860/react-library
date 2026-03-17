
import type {
	IChild,
	IItemBufferCount,
	IItemSize,
	IOrientation,
	IScrollbar
} from "@react-library/common";

import type { VirtualScrollChild } from "../../../types/virtual-scroll-child.type";
import type { VirtualScrollItemSize } from "../../../types/virtual-scroll-item-size.type";
import type { VirtualScrollOrientation } from "../../../types/virtual-scroll-orientation.type";
import type { VirtualScrollBarConfig } from "../../../types/virtual-scrollbar-config.type";

/**
 * Props for virtual scroll component
 */
export type VirtualScrollProps = (
	IChild<Array<VirtualScrollChild>> &
	/**
	 * Buffer for number of items that should be rendered before and after the visible viewport
	 * Note: applies to one direction so the number of extra rows will be up to double this
	 */
	IItemBufferCount<number> &
	IItemSize<VirtualScrollItemSize> &
	IOrientation<VirtualScrollOrientation> &
	Partial<IScrollbar<VirtualScrollBarConfig>>
);

import type { IItem, IItemSize } from "@react-library/common";

import type { VirtualScrollItemSize } from "../../../types/virtual-scroll-item-size.type";
import type { VirtualScrollItem } from "../../../types/virtual-scroll-item.type";

/**
 * Props for virtual scroll item render component
 */
export type VirtualScrollItemRenderProps<TChildProps> = (
	IItem<VirtualScrollItem<TChildProps>> &
	IItemSize<VirtualScrollItemSize>
);

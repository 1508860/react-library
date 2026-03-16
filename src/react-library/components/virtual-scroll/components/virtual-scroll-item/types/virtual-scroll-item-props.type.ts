import type { IChild, IId, ISize, ISortOrder } from "@react-library/common";

import type { VirtualScrollItemChild } from "../../../types/virtual-scroll-item-child.type";
import type { VirtualScrollItemId } from "../../../types/virtual-scroll-item-id.type";
import type { VirtualScrollItemSize } from "../../../types/virtual-scroll-item-size.type";
import type { VirtualScrollItemSortOrder } from "../../../types/virtual-scroll-item-sort-order.type";

/**
 * Props for virtual scroll item component
 */
export type VirtualScrollItemProps = (
	IId<VirtualScrollItemId> &
	IChild<VirtualScrollItemChild> &
	Partial<ISize<VirtualScrollItemSize>> &
	ISortOrder<VirtualScrollItemSortOrder>
);

import type { ISize, ISortOrder } from "@react-library/common";

import type { VirtualScrollItemId } from "../../../types/virtual-scroll-item-id.type";
import type { VirtualScrollItemSize } from "../../../types/virtual-scroll-item-size.type";
import type { VirtualScrollItemSortOrder } from "../../../types/virtual-scroll-item-sort-order.type";

/**
 * Virtual scroll items in view map with {@link VirtualScrollItemMapValue} against a {@link VirtualScrollItemId}
 */
export type VirtualScrollItemMap = Map<VirtualScrollItemId, VirtualScrollItemMapValue>;

/**
 * Virtual scroll item map value type
 */
export type VirtualScrollItemMapValue = (
	ISize<VirtualScrollItemSize> &
	ISortOrder<VirtualScrollItemSortOrder>
);

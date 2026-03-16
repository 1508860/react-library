import type { CallbackWithParameter, IId, ISize, ISortOrder } from "@react-library/common";

import type { VirtualScrollItemId } from "./virtual-scroll-item-id.type";
import type { VirtualScrollItemSize } from "./virtual-scroll-item-size.type";
import type { VirtualScrollItemSortOrder } from "./virtual-scroll-item-sort-order.type";

/**
 * Virtual scroll item register callback
 */
export type VirtualScrollItemRegister = CallbackWithParameter<VirtualScrollItemRegisterParam, void>;

/**
 * Virtual scroll item register callback parameter
 */
export type VirtualScrollItemRegisterParam = (
	IId<VirtualScrollItemId> &
	ISize<VirtualScrollItemSize> &
	ISortOrder<VirtualScrollItemSortOrder>
);

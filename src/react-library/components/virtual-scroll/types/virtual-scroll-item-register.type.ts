import type { CallbackWithParameter, IId, IIndex, ISize } from "@react-library/common";

import type { VirtualScrollItemId } from "./virtual-scroll-item-id.type";
import type { VirtualScrollItemIndex } from "./virtual-scroll-item-index.type";
import type { VirtualScrollItemSize } from "./virtual-scroll-item-size.type";

/**
 * Virtual scroll item register callback
 */
export type VirtualScrollItemRegister = CallbackWithParameter<VirtualScrollItemRegisterParam, void>;

/**
 * Virtual scroll item register callback parameter
 */
export type VirtualScrollItemRegisterParam = (
	IId<VirtualScrollItemId> &
	IIndex<VirtualScrollItemIndex> &
	ISize<VirtualScrollItemSize>
);

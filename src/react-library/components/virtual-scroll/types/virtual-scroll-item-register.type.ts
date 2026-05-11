import type {
	CallbackWithParameter,
	IId,
	IIndex,
	IItemRegister,
	IItemUnregister,
	ISize
} from "@react-library/common";

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

/**
 * Virtual scroll item unregister callback
 */
export type VirtualScrollItemUnregister = CallbackWithParameter<VirtualScrollItemUnregisterParam, void>;

/**
 * Virtual scroll item unregister callback parameter
 */
export type VirtualScrollItemUnregisterParam = (
	IId<VirtualScrollItemId>
);

/**
 * Virtual scroll item register callback props
 */
export type VirtualScrollItemRegisterCallbacks = (
	IItemRegister<VirtualScrollItemRegister> &
	IItemUnregister<VirtualScrollItemUnregister>
);

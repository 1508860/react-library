import type { CallbackWithParameter, IId } from "@react-library/common";

import type { VirtualScrollItemId } from "./virtual-scroll-item-id.type";

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

import type { ReactElement } from "react";

import type {
	CallbackWithParameter,
	IElement,
	IId,
	IItemRegister,
	IItemUnregister
} from "@react-library/common";

import type { VirtualScrollItemId } from "./virtual-scroll-item-id.type";

/**
 * Virtual scroll item register element callback
 */
export type VirtualScrollItemRegisterElement = CallbackWithParameter<VirtualScrollItemRegisterElementParam, void>;

/**
 * Virtual scroll item register element callback parameter
 */
export type VirtualScrollItemRegisterElementParam = (
	IElement<ReactElement> &
	IId<VirtualScrollItemId>
);

/**
 * Virtual scroll item unregister element callback
 */
export type VirtualScrollItemUnregisterElement = CallbackWithParameter<VirtualScrollItemUnregisterElementParam, void>;

/**
 * Virtual scroll item unregister element callback parameter
 */
export type VirtualScrollItemUnregisterElementParam = (
	IId<VirtualScrollItemId>
);

/**
 * Virtual scroll item register callback props
 */
export type VirtualScrollItemRegisterElementCallbacks = (
	IItemRegister<VirtualScrollItemRegisterElement> &
	IItemUnregister<VirtualScrollItemUnregisterElement>
);

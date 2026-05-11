import { type Context, createContext } from "react";

import type { VirtualScrollItemRegisterElementCallbacks } from "../types/virtual-scroll-item-register-element.type";

/**
 * Context to provide virtual scroll item register element callbacks
 */
export const VIRTUAL_SCROLL_ITEM_REGISTER_ELEMENT_CALLBACKS_CONTEXT: Context<VirtualScrollItemRegisterElementCallbacks | null> =
	createContext<VirtualScrollItemRegisterElementCallbacks | null>(null);

import { type Context, createContext } from "react";

import type { VirtualScrollItemRegisterCallbacks } from "../types/virtual-scroll-item-register.type";

/**
 * Context to provide virtual scroll item register callbacks
 */
export const VIRTUAL_SCROLL_ITEM_REGISTER_CALLBACKS_CONTEXT: Context<VirtualScrollItemRegisterCallbacks | null> =
	createContext<VirtualScrollItemRegisterCallbacks | null>(null);

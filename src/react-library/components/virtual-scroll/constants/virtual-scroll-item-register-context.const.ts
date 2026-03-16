import { type Context, createContext } from "react";

import type { VirtualScrollItemRegister } from "../types/virtual-scroll-item-register.type";

/**
 * Context to provide virtual scroll item register callback
 */
export const VIRTUAL_SCROLL_ITEM_REGISTER_CONTEXT: Context<VirtualScrollItemRegister | null> = createContext<VirtualScrollItemRegister | null>(null);

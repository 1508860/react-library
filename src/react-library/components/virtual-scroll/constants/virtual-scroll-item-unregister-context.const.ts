import { type Context, createContext } from "react";

import type { VirtualScrollItemUnregister } from "../types/virtual-scroll-item-unregister.type";

/**
 * Context to provide virtual scroll item register callback
 */
export const VIRTUAL_SCROLL_ITEM_UNREGISTER_CONTEXT: Context<VirtualScrollItemUnregister | null> = createContext<VirtualScrollItemUnregister | null>(null);

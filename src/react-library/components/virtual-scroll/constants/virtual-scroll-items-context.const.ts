import { type Context, createContext } from "react";

import type { VirtualScrollItemMap } from "../types/virtual-scroll-item-map.type";

/**
 * Context to provide virtual scroll items
 */
export const VIRTUAL_SCROLL_ITEMS_CONTEXT: Context<VirtualScrollItemMap | null> = createContext<VirtualScrollItemMap | null>(null);

import { type Context, createContext } from "react";

import type { VirtualScrollItemsInView } from "../types/virtual-scroll-items-in-view.type";

/**
 * Context to provide virtual scroll items in view
 */
export const VIRTUAL_SCROLL_ITEMS_IN_VIEW_CONTEXT: Context<VirtualScrollItemsInView | null> = createContext<VirtualScrollItemsInView | null>(null);

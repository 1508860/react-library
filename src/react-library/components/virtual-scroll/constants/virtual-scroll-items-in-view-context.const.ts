import { type Context, createContext } from "react";

import type { VirtualScrollItems } from "../types/virtual-scroll-item.type";

/**
 * Context to provide virtual scroll items in view
 */
export const VIRTUAL_SCROLL_ITEMS_IN_VIEW_CONTEXT: Context<VirtualScrollItems<unknown> | null> =
	createContext<VirtualScrollItems<unknown> | null>(null);

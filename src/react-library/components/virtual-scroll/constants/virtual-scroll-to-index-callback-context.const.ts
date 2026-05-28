import { type Context, createContext } from "react";

import type { VirtualScrollToIndexCallback } from "../types/virtual-scroll-to-index-callback.type";

/**
 * Context to provide virtual scroll scroll to index callback
 */
export const VIRTUAL_SCROLL_TO_INDEX_CALLBACK_CONTEXT: Context<VirtualScrollToIndexCallback | null> =
	createContext<VirtualScrollToIndexCallback | null>(null);

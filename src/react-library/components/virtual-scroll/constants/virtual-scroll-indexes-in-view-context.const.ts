import { type Context, createContext } from "react";

import type { VirtualScrollIndexesInView } from "../types/virtual-scroll-index-in-view.type";

/**
 * Context to provide virtual scroll indexes in view
 */
export const VIRTUAL_SCROLL_INDEXES_IN_VIEW_CONTEXT: Context<VirtualScrollIndexesInView | null> =
	createContext<VirtualScrollIndexesInView | null>(null);

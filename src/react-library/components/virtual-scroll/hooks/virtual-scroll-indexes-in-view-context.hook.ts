import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { VIRTUAL_SCROLL_INDEXES_IN_VIEW_CONTEXT } from "../constants/virtual-scroll-indexes-in-view-context.const";
import type { VirtualScrollIndexesInView } from "../types/virtual-scroll-index-in-view.type";

/**
 * Returns context for {@link VIRTUAL_SCROLL_INDEXES_IN_VIEW_CONTEXT} and ensures a non-null value
 */
export function useVirtualScrollIndexesInViewContext(): VirtualScrollIndexesInView {
	const result = useContext(VIRTUAL_SCROLL_INDEXES_IN_VIEW_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};

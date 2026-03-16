import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { VIRTUAL_SCROLL_ITEMS_IN_VIEW_CONTEXT } from "../constants/virtual-scroll-items-in-view-context.const";
import type { VirtualScrollItemsInView } from "../types/virtual-scroll-items-in-view.type";

/**
 * Returns context for {@link VIRTUAL_SCROLL_ITEMS_IN_VIEW_CONTEXT} and ensures a non-null value
 */
export function useVirtualScrollItemsInViewContext(): VirtualScrollItemsInView {
	const result = useContext(VIRTUAL_SCROLL_ITEMS_IN_VIEW_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};

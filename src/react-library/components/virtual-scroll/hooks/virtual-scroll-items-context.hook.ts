import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { VIRTUAL_SCROLL_ITEMS_CONTEXT } from "../constants/virtual-scroll-items-context.const";
import type { VirtualScrollItemMap } from "../types/virtual-scroll-item-map.type";

/**
 * Returns context for {@link VIRTUAL_SCROLL_ITEMS_CONTEXT} and ensures a non-null value
 */
export function useVirtualScrollItemsContext(): VirtualScrollItemMap {
	const result = useContext(VIRTUAL_SCROLL_ITEMS_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};

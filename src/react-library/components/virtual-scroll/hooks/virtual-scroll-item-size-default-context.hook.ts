import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { VIRTUAL_SCROLL_ITEM_SIZE_DEFAULT_CONTEXT } from "../constants/virtual-scroll-item-size-default-context.const";
import type { VirtualScrollItemSize } from "../types/virtual-scroll-item-size.type";

/**
 * Returns context for {@link VIRTUAL_SCROLL_ITEM_SIZE_DEFAULT_CONTEXT} and ensures a non-null value
 */
export function useVirtualScrollItemSizeDefaultContext(): VirtualScrollItemSize {
	const result = useContext(VIRTUAL_SCROLL_ITEM_SIZE_DEFAULT_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};

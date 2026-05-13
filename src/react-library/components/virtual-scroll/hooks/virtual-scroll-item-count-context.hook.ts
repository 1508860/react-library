import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { VIRTUAL_SCROLL_ITEM_COUNT_CONTEXT } from "../constants/virtual-scroll-item-count-context.const";

/**
 * Returns context for {@link VIRTUAL_SCROLL_ITEM_COUNT_CONTEXT} and ensures a non-null value
 */
export function useVirtualScrollItemCountContext(): number {
	const result = useContext(VIRTUAL_SCROLL_ITEM_COUNT_CONTEXT);
	if (result === null) throw new NullContextError();
	return result;
};

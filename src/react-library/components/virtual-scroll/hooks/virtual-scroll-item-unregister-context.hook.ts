import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { VIRTUAL_SCROLL_ITEM_UNREGISTER_CONTEXT } from "../constants/virtual-scroll-item-unregister-context.const";
import type { VirtualScrollItemUnregister } from "../types/virtual-scroll-item-unregister.type";

/**
 * Returns context for {@link VIRTUAL_SCROLL_ITEM_UNREGISTER_CONTEXT} and ensures a non-null value
 */
export function useVirtualScrollItemUnregisterContext(): VirtualScrollItemUnregister {
	const result = useContext(VIRTUAL_SCROLL_ITEM_UNREGISTER_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};

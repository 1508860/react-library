import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { VIRTUAL_SCROLL_TO_INDEX_CALLBACK_CONTEXT } from "../constants/virtual-scroll-to-index-callback-context.const";
import type { VirtualScrollToIndexCallback } from "../types/virtual-scroll-to-index-callback.type";

/**
 * Returns context for {@link VIRTUAL_SCROLL_TO_INDEX_CALLBACK_CONTEXT} and ensures a non-null value
 */
export function useVirtualScrollToIndexCallbackContext(): VirtualScrollToIndexCallback {
	const result = useContext(VIRTUAL_SCROLL_TO_INDEX_CALLBACK_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};

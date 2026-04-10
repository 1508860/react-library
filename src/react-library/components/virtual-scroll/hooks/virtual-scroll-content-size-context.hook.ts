import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { VIRTUAL_SCROLL_CONTENT_SIZE_CONTEXT } from "../constants/virtual-scroll-content-size-context.const";
import type { VirtualScrollContentSize } from "../types/virtual-scroll-content-size.type";

/**
 * Returns context for {@link VIRTUAL_SCROLL_CONTENT_SIZE_CONTEXT} and ensures a non-null value
 */
export function useVirtualScrollContentSizeContext(): VirtualScrollContentSize {
	const result = useContext(VIRTUAL_SCROLL_CONTENT_SIZE_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};

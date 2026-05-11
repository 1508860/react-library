import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { VIRTUAL_SCROLL_ELEMENTS_IN_VIEW_CONTEXT } from "../constants/virtual-scroll-elements-in-view-context.const";
import type { VirtualScrollElementsInView } from "../types/virtual-scroll-elements-in-view.type";

/**
 * Returns context for {@link VIRTUAL_SCROLL_ELEMENTS_IN_VIEW_CONTEXT} and ensures a non-null value
 */
export function useVirtualScrollElementsInViewContext(): VirtualScrollElementsInView {
	const result = useContext(VIRTUAL_SCROLL_ELEMENTS_IN_VIEW_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};

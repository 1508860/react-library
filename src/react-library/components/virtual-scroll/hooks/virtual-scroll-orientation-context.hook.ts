import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { VIRTUAL_SCROLL_ORIENTATION_CONTEXT } from "../constants/virtual-scroll-orientation-context.const";
import type { VirtualScrollOrientation } from "../types/virtual-scroll-orientation.type";

/**
 * Returns context for {@link VIRTUAL_SCROLL_ORIENTATION_CONTEXT} and ensures a non-null value
 */
export function useVirtualScrollOrientationContext(): VirtualScrollOrientation {
	const result = useContext(VIRTUAL_SCROLL_ORIENTATION_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};

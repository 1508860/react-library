import type { SizePx, IElementSize, IElementBufferCount } from "@react-library/common";

/**
 * Describes configuration for a virtual scroll view
 */
export type VirtualScrollConfig = (
	/**
	 * Buffer for number of elements that should be rendered before and after the visible viewport
	 * Note: applies to one direction so the number of extra rows will be up to double this
	 */
	IElementBufferCount<number> &
	IElementSize<SizePx>
)

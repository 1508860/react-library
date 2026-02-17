import type { IElement, IId, Size, IElementSize } from "@react-library/common";

/**
 * Describes render data for a specific element in a virtual scroll
 */
export type VirtualScrollRenderElementResult<TElement> = (
	IElement<TElement> &
	IElementSize<Size> &
	IId<string>
);

import type { IElement, IId, PrefixKeys, ISize, Size } from "@react-library/common";

/**
 * Describes render data for a specific element in a virtual scroll
 */
export type VirtualScrollRenderElementResult<TElement> = (
	IElement<TElement> &
	IId<string> &
	PrefixKeys<ISize<Size>, "element">
);

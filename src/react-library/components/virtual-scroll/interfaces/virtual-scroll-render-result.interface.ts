import type { PrefixKeys, ISize, Size, SizePx } from "@react-library/common";

import type { VirtualScrollRenderElementResult } from "../types/virtual-scroll-render-element-result.type";

/**
 * Describes render data for use when trying to render elements data virtually
 */
export interface IVirtualScrollRenderResult<TElement> extends PrefixKeys<ISize<Size>, "children"> {
	/**
	 * Elements to actually render
	 */
	children: Array<VirtualScrollRenderElementResult<TElement>>;

	/**
	 * Size of padding at the start of the elements container to offset elements not being rendered, in pixels
	 */
	paddingStart: SizePx;

	/**
	 * Size of padding at the end of the elements container to offset elements not being rendered, in pixels
	 */
	paddingEnd: SizePx;
}

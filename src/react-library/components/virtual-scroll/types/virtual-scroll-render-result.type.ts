import type { Size, SizePx, IChildrenSize, IChild, IPaddingEnd, IPaddingStart } from "@react-library/common";

import type { VirtualScrollRenderElementResult } from "../types/virtual-scroll-render-element-result.type";

/**
 * Describes render data for use when trying to render elements data virtually
 */
export type VirtualScrollRenderResult<TElement> = (
	/**
	 * Elements to actually render
	 */
	IChild<Array<VirtualScrollRenderElementResult<TElement>>> &
	IChildrenSize<Size> &
	/**
	 * Size of padding at the end of the elements container to offset elements not being rendered, in pixels
	 */
	IPaddingEnd<SizePx> &
	/**
	 * Size of padding at the start of the elements container to offset elements not being rendered, in pixels
	 */
	IPaddingStart<SizePx>
);

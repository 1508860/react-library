import type { IVirtualScrollRenderResult } from "../interfaces/virtual-scroll-render-result.interface";

/**
 * Default values for {@link IResizeObserverState} for vertical orientation
 */
export function virtualScrollRenderResultDefault<TElement>(): IVirtualScrollRenderResult<TElement> {
	return {
		children: [],
		childrenSize: 0,
		paddingStart: 0,
		paddingEnd: 0
	};
}

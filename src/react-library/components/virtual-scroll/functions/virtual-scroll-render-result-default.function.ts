import type { VirtualScrollRenderResult } from "../types/virtual-scroll-render-result.type";

/**
 * Default values for {@link IResizeObserverState} for vertical orientation
 */
export function virtualScrollRenderResultDefault<TElement>(): VirtualScrollRenderResult<TElement> {
	return {
		children: [],
		childrenSize: 0,
		paddingStart: 0,
		paddingEnd: 0
	};
}

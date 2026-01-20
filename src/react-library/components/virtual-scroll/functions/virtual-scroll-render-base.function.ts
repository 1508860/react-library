import type { IVirtualScrollConfig } from "../interfaces/virtual-scroll-config.interface";
import type { IVirtualScrollRenderResult } from "../interfaces/virtual-scroll-render-result.interface";
import type { VirtualScrollContainerState } from "../types/virtual-scroll-container-state.type";
import type { VirtualScrollRenderElementData } from "../types/virtual-scroll-render-element-data.type";
import type { VirtualScrollRowStandard } from "../types/virtual-scroll-row.type";
import { virtualScrollRenderData } from "./virtual-scroll-render.function";

/**
 * Function for resolving elements to render in a visible viewport
 * This is to improve app performance, especially in the case of a large number of elements
 * Wraps {@link virtualScrollRenderData} to flatten out parent & element structure
 * @param virtualScrollConfig describes static values used when calculating {@link elements} to render
 * @param elements source elements that will be filtered down to actual render elements
 */
export function virtualScrollRenderBase<TElement extends VirtualScrollRowStandard>(
	virtualScrollConfig: IVirtualScrollConfig,
	virtualScrollContainerState: VirtualScrollContainerState,
	elements: TElement | Array<TElement>
): IVirtualScrollRenderResult<TElement> {

	return virtualScrollRenderData(
		virtualScrollConfig,
		virtualScrollContainerState,
		(Array.isArray(elements) ? elements : [elements]).map<VirtualScrollRenderElementData<TElement>>(element => ({ row: element }))
	);
}

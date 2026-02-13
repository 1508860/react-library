import type { VirtualScrollConfig } from "../types/virtual-scroll-config.type";
import type { VirtualScrollContainerState } from "../types/virtual-scroll-container-state.type";
import type { VirtualScrollRenderElementData } from "../types/virtual-scroll-render-element-data.type";
import type { VirtualScrollRenderResult } from "../types/virtual-scroll-render-result.type";
import type { VirtualScrollRowParent, VirtualScrollRowStandard } from "../types/virtual-scroll-row.type";
import { resolveVirtualScrollIdPrefix } from "./resolve-virtual-scroll-id-prefix.function";
import { virtualScrollRenderData } from "./virtual-scroll-render.function";

/**
 * Function for resolving elements to render in a visible viewport
 * This is to improve app performance, especially in the case of a large number of elements
 * Wraps {@link virtualScrollRenderData} to flatten out parent & element structure
 * @param virtualScrollConfig describes static values used when calculating {@link parentElements} to render
 * @param virtualScrollContainerState state of the {@link parentElements} container
 * @param parentElements source elements that will be filtered down to actual render elements
 */
export function virtualScrollRenderAccordionParent<
	TElement extends VirtualScrollRowStandard,
	TParentElement extends VirtualScrollRowParent<TElement>
>(
	virtualScrollConfig: VirtualScrollConfig,
	virtualScrollContainerState: VirtualScrollContainerState,
	parentElements: TParentElement | Array<TParentElement>
): VirtualScrollRenderResult<TParentElement | TElement> {

	const virtualScrollRows: Array<VirtualScrollRenderElementData<TParentElement | TElement>> = [];

	// Parent elements
	(Array.isArray(parentElements) ? parentElements : [parentElements])
		.forEach(parentElement => {
			virtualScrollRows.push({
				row: parentElement
			});
			if (!parentElement.virtualScrollCanShowChildren) return;

			// Elements
			const elements = parentElement.virtualScrollChildren;
			(Array.isArray(elements) ? elements : [elements])
				.forEach(element => virtualScrollRows.push({
					virtualScrollRowIdPrefix: resolveVirtualScrollIdPrefix([
						parentElement.virtualScrollRowId
					]),
					row: element
				}));
		});

	return virtualScrollRenderData(virtualScrollConfig, virtualScrollContainerState, virtualScrollRows);
}

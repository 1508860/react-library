import type { VirtualScrollConfig } from "../types/virtual-scroll-config.type";
import type { VirtualScrollContainerState } from "../types/virtual-scroll-container-state.type";
import type { VirtualScrollRenderElementData } from "../types/virtual-scroll-render-element-data.type";
import type { VirtualScrollRenderResult } from "../types/virtual-scroll-render-result.type";
import type { VirtualScrollRowParent, VirtualScrollRowGrandParent, VirtualScrollRowStandard } from "../types/virtual-scroll-row.type";
import { resolveVirtualScrollIdPrefix } from "./resolve-virtual-scroll-id-prefix.function";
import { virtualScrollRenderData } from "./virtual-scroll-render.function";

/**
 * Function for resolving elements to render in a visible viewport
 * This is to improve app performance, especially in the case of a large number of elements
 * Wraps {@link virtualScrollRenderData} to flatten out grand parent, parent & element structure
 * @param virtualScrollConfig describes static values used when calculating {@link grandParentElements} to render
 * @param virtualScrollContainerState state of the {@link grandParentElements} container
 * @param grandParentElements source elements that will be filtered down to actual render elements
 */
export function virtualScrollRenderAccordionGrandParent<
	TElement extends VirtualScrollRowStandard,
	TParentElement extends VirtualScrollRowParent<TElement>,
	TGrandParentElement extends VirtualScrollRowGrandParent<TParentElement>
>(
	virtualScrollConfig: VirtualScrollConfig,
	virtualScrollContainerState: VirtualScrollContainerState,
	grandParentElements: TGrandParentElement | Array<TGrandParentElement>
): VirtualScrollRenderResult<TGrandParentElement | TParentElement | TElement> {

	const virtualScrollRows: Array<VirtualScrollRenderElementData<TGrandParentElement | TParentElement | TElement>> = [];

	// Grand parent elements
	(Array.isArray(grandParentElements) ? grandParentElements : [grandParentElements])
		.forEach(grandParentElement => {
			virtualScrollRows.push({
				row: grandParentElement
			});
			if (!grandParentElement.virtualScrollCanShowChildren) return;

			// Parent elements
			const parentElements = grandParentElement.virtualScrollChildren;
			(Array.isArray(parentElements) ? parentElements : [parentElements])
				.forEach(parentElement => {
					virtualScrollRows.push({
						virtualScrollRowIdPrefix: resolveVirtualScrollIdPrefix([
							grandParentElement.virtualScrollRowId
						]),
						row: parentElement
					});
					if (!parentElement.virtualScrollCanShowChildren) return;

					// Elements
					const elements = parentElement.virtualScrollChildren;
					(Array.isArray(elements) ? elements : [elements])
						.forEach(element => virtualScrollRows.push({
							virtualScrollRowIdPrefix: resolveVirtualScrollIdPrefix([
								grandParentElement.virtualScrollRowId,
								parentElement.virtualScrollRowId
							]),
							row: element
						}))
				});
		});

	return virtualScrollRenderData(virtualScrollConfig, virtualScrollContainerState, virtualScrollRows);
}

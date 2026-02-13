import type { VirtualScrollConfig } from "../types/virtual-scroll-config.type";
import type { VirtualScrollContainerState } from "../types/virtual-scroll-container-state.type";
import type { VirtualScrollRenderElementData } from "../types/virtual-scroll-render-element-data.type";
import type { VirtualScrollRenderResult } from "../types/virtual-scroll-render-result.type";
import type {
	VirtualScrollRowParent,
	VirtualScrollRowGrandParent,
	VirtualScrollRowGreatGrandParent,
	VirtualScrollRowStandard
} from "../types/virtual-scroll-row.type";
import { resolveVirtualScrollIdPrefix } from "./resolve-virtual-scroll-id-prefix.function";
import { virtualScrollRenderData } from "./virtual-scroll-render.function";

/**
 * Function for resolving elements to render in a visible viewport
 * This is to improve app performance, especially in the case of a large number of elements
 * Wraps {@link virtualScrollRenderData} to flatten out great grand parent, grand parent, parent & element structure
 * @param virtualScrollConfig describes static values used when calculating {@link greatGrandParentElements} to render
 * @param virtualScrollContainerState state of the {@link greatGrandParentElements} container
 * @param greatGrandParentElements source elements that will be filtered down to actual render elements
 */
export function virtualScrollRenderAccordionGreatGrandParent<
	TElement extends VirtualScrollRowStandard,
	TParentElement extends VirtualScrollRowParent<TElement>,
	TGrandParentElement extends VirtualScrollRowGrandParent<TParentElement>,
	TGreatGrandParentElement extends VirtualScrollRowGreatGrandParent<TGrandParentElement>
>(
	virtualScrollConfig: VirtualScrollConfig,
	virtualScrollContainerState: VirtualScrollContainerState,
	greatGrandParentElements: TGreatGrandParentElement | Array<TGreatGrandParentElement>
): VirtualScrollRenderResult<TGreatGrandParentElement | TGrandParentElement | TParentElement | TElement> {

	const virtualScrollRows: Array<VirtualScrollRenderElementData<TGreatGrandParentElement | TGrandParentElement | TParentElement | TElement>> = [];

	// Great grand parent elements
	(Array.isArray(greatGrandParentElements) ? greatGrandParentElements : [greatGrandParentElements]).forEach(greatGrandParentElement => {
		virtualScrollRows.push({
			row: greatGrandParentElement
		});
		if (!greatGrandParentElement.virtualScrollCanShowChildren) return;

		// Grand parent elements
		const grandParentElements = greatGrandParentElement.virtualScrollChildren;
		(Array.isArray(grandParentElements) ? grandParentElements : [grandParentElements])
			.forEach(grandParentElement => {
				virtualScrollRows.push({
					virtualScrollRowIdPrefix: resolveVirtualScrollIdPrefix([
						greatGrandParentElement.virtualScrollRowId
					]),
					row: grandParentElement
				});
				if (!grandParentElement.virtualScrollCanShowChildren) return;

				// Parent elements
				const parentElements = grandParentElement.virtualScrollChildren;
				(Array.isArray(parentElements) ? parentElements : [parentElements])
					.forEach(parentElement => {
						virtualScrollRows.push({
							virtualScrollRowIdPrefix: resolveVirtualScrollIdPrefix([
								greatGrandParentElement.virtualScrollRowId,
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
									greatGrandParentElement.virtualScrollRowId,
									grandParentElement.virtualScrollRowId,
									parentElement.virtualScrollRowId
								]),
								row: element
							}))
					});
			});
	});

	return virtualScrollRenderData(virtualScrollConfig, virtualScrollContainerState, virtualScrollRows);
}

import type { SizePx } from "@react-library/common";

import { VirtualScrollRenderElement } from "../enums/virtual-scroll-render-element.type";
import type { VirtualScrollRow } from "../enums/virtual-scroll-row.type";
import type { VirtualScrollConfig } from "../types/virtual-scroll-config.type";
import type { VirtualScrollContainerState } from "../types/virtual-scroll-container-state.type";
import type { VirtualScrollRenderElementData } from "../types/virtual-scroll-render-element-data.type";
import type { VirtualScrollRenderElementResult } from "../types/virtual-scroll-render-element-result.type";
import type { VirtualScrollRenderResult } from "../types/virtual-scroll-render-result.type";
import type { VirtualScrollRowComparable } from "../types/virtual-scroll-row.type";

/**
 * Function for resolving elements to render in a visible viewport
 * This is to improve app performance, especially in the case of a large number of elements
 * @param virtualScrollConfig describes static values used when calculating {@link elements} to render
 * @param virtualScrollContainerState state of the {@link elements} container
 * @param elements source elements that will be filtered down to actual render elements
 */
export function virtualScrollRenderData<TElement extends VirtualScrollRowComparable<VirtualScrollRow>>(
	virtualScrollConfig: VirtualScrollConfig,
	virtualScrollContainerState: VirtualScrollContainerState,
	elements: Array<VirtualScrollRenderElementData<TElement>>
): VirtualScrollRenderResult<TElement> {

	// Validate parameters

	const elementBufferCount: number = (virtualScrollConfig.elementBufferCount < 0 ? 0 : virtualScrollConfig.elementBufferCount);
	const defaultElementSize: SizePx = (virtualScrollConfig.elementSize < 0 ? 0 : virtualScrollConfig.elementSize);

	const scrollStart: SizePx = (virtualScrollContainerState.scrollStart < 0 ? 0 : virtualScrollContainerState.scrollStart);
	const scrollToEndOfViewport: SizePx = (scrollStart + (virtualScrollContainerState.viewportSize < 0 ? 0 : virtualScrollContainerState.viewportSize));

	// Result
	let paddingStart: SizePx = 0;
	const elementsInStartBuffer: Array<VirtualScrollRenderElementResult<TElement>> = [];
	const elementsInViewport: Array<VirtualScrollRenderElementResult<TElement>> = [];
	const elementsInEndBuffer: Array<VirtualScrollRenderElementResult<TElement>> = [];
	let childrenSize: SizePx = 0;
	let paddingEnd: SizePx = 0;

	// State of loop through elements
	let isFirstElementInViewportSet: boolean = false;
	let firstElementInViewportIndex: number = 0;
	let elementSizeSoFar: SizePx = 0;
	let currentEndBufferElementCount: number = 0;

	for (let currentElementIndex = 0; currentElementIndex < elements.length; currentElementIndex++) {

		const currentElement: VirtualScrollRenderElementData<TElement> = elements[currentElementIndex];
		const currentElementSize: SizePx = (currentElement.row.virtualScrollRowSize ?? defaultElementSize);

		// We're either adding to padding start, start buffer elements, elements in view port, end buffer elements, padding end
		if (elementSizeSoFar >= scrollToEndOfViewport) {
			// Handle end buffer elements & padding end
			if (currentEndBufferElementCount < elementBufferCount) {
				elementsInEndBuffer.push({
					element: currentElement.row,
					elementSize: currentElementSize,
					id: resolveVirtualScrollRenderElementResultId(currentElement, VirtualScrollRenderElement.EndBuffer)
				});
				childrenSize += currentElementSize;
				currentEndBufferElementCount += 1;
			} else paddingEnd += currentElementSize;
		}
		else if (elementSizeSoFar >= scrollStart) {
			elementsInViewport.push({
				element: currentElement.row,
				elementSize: currentElementSize,
				id: resolveVirtualScrollRenderElementResultId(currentElement, VirtualScrollRenderElement.InView)
			});
			childrenSize += currentElementSize;
			if (!isFirstElementInViewportSet) {
				firstElementInViewportIndex = currentElementIndex;
				isFirstElementInViewportSet = true;
			}
		}
		else paddingStart += currentElementSize;

		// Note: we're adding padding of the current element after our checks for what to do next
		elementSizeSoFar += currentElementSize;
	}

	// Resolve start buffer elements (now that we have resolved start index of view port elements
	let currentElementInStartBufferIndex = (firstElementInViewportIndex - elementBufferCount) < 0 ? 0 : (firstElementInViewportIndex - elementBufferCount);

	for (; currentElementInStartBufferIndex < firstElementInViewportIndex; currentElementInStartBufferIndex++) {
		// Add element to start buffer array and remove start padding
		const currentElement: VirtualScrollRenderElementData<TElement> = elements[currentElementInStartBufferIndex];
		const currentElementSize: SizePx = (currentElement.row.virtualScrollRowSize ?? defaultElementSize);
		elementsInStartBuffer.push({
			element: currentElement.row,
			elementSize: currentElementSize,
			id: resolveVirtualScrollRenderElementResultId(currentElement, VirtualScrollRenderElement.StartBuffer)
		});
		paddingStart -= currentElementSize;
		childrenSize += currentElementSize;
	}

	const result: VirtualScrollRenderResult<TElement> = {
		children: [...elementsInStartBuffer, ...elementsInViewport, ...elementsInEndBuffer],
		childrenSize: childrenSize,
		paddingStart: paddingStart,
		paddingEnd: paddingEnd
	};

	return result;
}

/**
 * Function to resolve the string id for a virtual scroll row
 */
function resolveVirtualScrollRenderElementResultId<TElement extends VirtualScrollRowComparable<VirtualScrollRow>>(
	element: VirtualScrollRenderElementData<TElement>,
	virtualScrollRenderElement: VirtualScrollRenderElement
): string {
	const validPrefix: string = element.virtualScrollRowIdPrefix ? `${element.virtualScrollRowIdPrefix}-` : "";
	return `${validPrefix}${element.row.virtualScrollRowId}-${element.row.virtualScrollRowType ?? "standard"}-${virtualScrollRenderElement}`;
}

import {
	Orientation,
	VirtualScrollError,
	type DimensionsPx,
	type ScrollObserverState,
	type SizePx
} from "@react-library/common";

import type { VirtualScrollContentSize } from "../types/virtual-scroll-content-size.type";
import type { VirtualScrollItemId } from "../types/virtual-scroll-item-id.type";
import type { VirtualScrollItemMap, VirtualScrollItemMapValue } from "../types/virtual-scroll-item-map.type";
import type { VirtualScrollOrientation } from "../types/virtual-scroll-orientation.type";
import type { VirtualScrollRenderState } from "../types/virtual-scroll-render-state.type";

import { virtualScrollSort } from "./virtual-scroll-sort.function";

/**
 * Function for resolving items to render in a visible viewport as well as the size of the content to render
 * This is to improve app performance, especially in the case of a large number of items
 * @param itemBufferCount
 * @param orientation
 * @param containerSize
 * @param containerScrollState
 * @param itemMap
 */
export function virtualScrollRender(
	itemBufferCount: number,
	orientation: VirtualScrollOrientation,
	containerSize: DimensionsPx,
	containerScrollState: ScrollObserverState,
	itemMap: VirtualScrollItemMap
): VirtualScrollRenderState {

	// Validate parameters
	const validItemBufferCount: number = (itemBufferCount < 0 ? 0 : itemBufferCount);
	const scrollStart: SizePx = (orientation === Orientation.Horizontal ? containerScrollState.scrollStartHorizontal : containerScrollState.scrollStartVertical);
	const scrollToEndOfViewport: SizePx = (scrollStart + (orientation === Orientation.Horizontal ? containerSize.width : containerSize.height));
	const orderedItems: Array<VirtualScrollItemId> = virtualScrollSort(itemMap);

	const getValidatedItem = (id: VirtualScrollItemId): VirtualScrollItemMapValue => {
		const item: VirtualScrollItemMapValue | undefined = itemMap.get(id);
		if (!item) throw new VirtualScrollError();
		return item;
	};

	// Result
	let paddingStart: SizePx = 0;
	const itemsInViewSet: Set<VirtualScrollItemId> = new Set<VirtualScrollItemId>();
	let childrenSize: SizePx = 0;
	let paddingEnd: SizePx = 0;

	// State of loop through items
	let isFirstItemInViewportSet: boolean = false;
	let firstItemInViewportIndex: number = 0;
	let itemtSizeSoFar: SizePx = 0;
	let currentEndBufferItemCount: number = 0;

	let itemInViewportCount: number = 0;
	const addToItemsInView = (id: VirtualScrollItemId) => {
		itemInViewportCount++;
		itemsInViewSet.add(id);
	};

	for (let currentItemIndex = 0; currentItemIndex < orderedItems.length; currentItemIndex++) {

		const currentItemId: VirtualScrollItemId = orderedItems[currentItemIndex];
		const currentItemSize: SizePx = getValidatedItem(currentItemId).size;

		// We're either adding to padding start, start buffer items, items in view port, end buffer items, padding end
		if (itemtSizeSoFar >= scrollToEndOfViewport) {
			// Handle end buffer items & padding end
			if (currentEndBufferItemCount < validItemBufferCount) {
				addToItemsInView(currentItemId);
				childrenSize += currentItemSize;
				currentEndBufferItemCount += 1;
			} else paddingEnd += currentItemSize;
		}
		else if (itemtSizeSoFar >= scrollStart) {
			addToItemsInView(currentItemId);
			childrenSize += currentItemSize;
			if (!isFirstItemInViewportSet) {
				firstItemInViewportIndex = currentItemIndex;
				isFirstItemInViewportSet = true;
			}
		}
		else paddingStart += currentItemSize;

		// Note: we're adding padding of the current item after our checks for what to do next
		itemtSizeSoFar += currentItemSize;
	}

	// Resolve start buffer items (now that we have resolved start index of view port items
	let currentItemInStartBufferIndex = (firstItemInViewportIndex - validItemBufferCount) < 0 ? 0 : (firstItemInViewportIndex - validItemBufferCount);

	for (; currentItemInStartBufferIndex < firstItemInViewportIndex; currentItemInStartBufferIndex++) {
		// Add item to start buffer array and remove start padding
		const currentItemId: VirtualScrollItemId = orderedItems[currentItemInStartBufferIndex];
		const currentItemSize: SizePx = getValidatedItem(currentItemId).size;
		addToItemsInView(currentItemId);
		paddingStart -= currentItemSize;
		childrenSize += currentItemSize;
	}

	// Validate that items in view match the count (i.e. no duplicate ids)
	if (itemsInViewSet.size !== itemInViewportCount) throw new VirtualScrollError();

	const size: VirtualScrollContentSize = {
		childrenSize: childrenSize,
		paddingEnd: paddingEnd,
		paddingStart: paddingStart
	};

	const itemsInView = orderedItems.filter(x => itemsInViewSet.has(x));

	return {
		itemsInView: itemsInView,
		size: size
	};
}

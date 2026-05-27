import {
	Orientation,
	VirtualScrollError,
	type DimensionsPx,
	type ScrollObserverState,
	type SizePx
} from "@react-library/common";

import type { VirtualScrollContentSize } from "../types/virtual-scroll-content-size.type";
import type { VirtualScrollItemId } from "../types/virtual-scroll-item-id.type";
import type { VirtualScrollItemSize } from "../types/virtual-scroll-item-size.type";
import type { VirtualScrollItem } from "../types/virtual-scroll-item.type";
import type { VirtualScrollOrientation } from "../types/virtual-scroll-orientation.type";
import type { VirtualScrollRenderState } from "../types/virtual-scroll-render-state.type";

/**
 * Function for resolving items to render in a visible viewport as well as the size of the content to render
 * This is to improve app performance, especially in the case of a large number of items
 * @param itemBufferCount
 * @param items
 * @param itemSize
 * @param orientation
 * @param containerSize
 * @param containerScrollState
 */
export function virtualScrollRender<TChildProps>(
	itemBufferCount: number,
	items: Array<VirtualScrollItem<TChildProps>>,
	itemSize: VirtualScrollItemSize,
	orientation: VirtualScrollOrientation,
	containerSize: DimensionsPx,
	containerScrollState: ScrollObserverState
): VirtualScrollRenderState<TChildProps> {

	// Validate parameters
	const validItemBufferCount: number = (itemBufferCount < 0 ? 0 : itemBufferCount);
	const scrollStart: SizePx = (orientation === Orientation.Horizontal ? containerScrollState.scrollStartHorizontal : containerScrollState.scrollStartVertical);
	const scrollToEndOfViewport: SizePx = (scrollStart + (orientation === Orientation.Horizontal ? containerSize.width : containerSize.height));

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

	for (let currentItemIndex = 0; currentItemIndex < items.length; currentItemIndex++) {

		const currentItem = items[currentItemIndex];
		const currentItemId: VirtualScrollItemId = currentItem.id;
		const currentItemSize: SizePx = currentItem.size ?? itemSize;

		// We're either adding to padding start, start buffer items, items in view port, end buffer items, padding end
		if (itemtSizeSoFar >= scrollToEndOfViewport) {
			// Handle end buffer items & padding end
			if (currentEndBufferItemCount < validItemBufferCount) {
				addToItemsInView(currentItemId);
				childrenSize += currentItemSize;
				currentEndBufferItemCount += 1;
			} else paddingEnd += currentItemSize;
		}
		else if (isFirstItemInViewportSet || (itemtSizeSoFar >= (scrollStart - currentItemSize))) {
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
		const currentItem = items[currentItemInStartBufferIndex];
		const currentItemId: VirtualScrollItemId = currentItem.id;
		const currentItemSize: SizePx = currentItem.size ?? itemSize;
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

	const itemsInView = items.filter(x => itemsInViewSet.has(x.id));

	return {
		itemsInView: itemsInView,
		size: size
	};
}

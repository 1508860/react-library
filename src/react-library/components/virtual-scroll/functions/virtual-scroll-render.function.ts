import {
	Orientation,
	ratioToScalePercent,
	ScalePercent,
	type DimensionsPx,
	type ScrollObserverState,
	type SizePx
} from "@react-library/common";

import type { VirtualScrollContentSize } from "../types/virtual-scroll-content-size.type";
import type { VirtualScrollIndexesInView } from "../types/virtual-scroll-index-in-view.type";
import type { VirtualScrollItemSize } from "../types/virtual-scroll-item-size.type";
import type { VirtualScrollItem, VirtualScrollItems } from "../types/virtual-scroll-item.type";
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
	const indexesInStartBuffer: VirtualScrollIndexesInView = [];
	const indexesInView: VirtualScrollIndexesInView = [];
	const itemsInStartBuffer: VirtualScrollItems<TChildProps> = [];
	const itemsInView: VirtualScrollItems<TChildProps> = [];
	let childrenSize: SizePx = 0;
	let paddingEnd: SizePx = 0;

	// State of loop through items
	let isFirstItemInViewportSet: boolean = false;
	let firstItemInViewportIndex: number = 0;
	let itemSizeSoFar: SizePx = 0;
	let currentEndBufferItemCount: number = 0;

	const addToItemsInView = (item: VirtualScrollItem<TChildProps>, index: number, percentVisible: ScalePercent) => {
		indexesInView.push({ index: index, percentVisible: percentVisible });
		itemsInView.push(item);
	};

	const addToItemsInStartBuffer = (item: VirtualScrollItem<TChildProps>, index: number, percentVisible: ScalePercent) => {
		indexesInStartBuffer.push({ index: index, percentVisible: percentVisible });
		itemsInStartBuffer.push(item);
	};

	for (let currentItemIndex = 0; currentItemIndex < items.length; currentItemIndex++) {

		const currentItem = items[currentItemIndex];
		const currentItemSize: SizePx = currentItem.size ?? itemSize;
		const newItemSizeSoFar: SizePx = itemSizeSoFar + currentItemSize;

		// We're either adding to padding start, start buffer items, items in view port, end buffer items, padding end
		if (itemSizeSoFar >= scrollToEndOfViewport) {
			// Handle end buffer items & padding end
			if (currentEndBufferItemCount < validItemBufferCount) {
				addToItemsInView(currentItem, currentItemIndex, ScalePercent[0]);
				childrenSize += currentItemSize;
				currentEndBufferItemCount += 1;
			} else paddingEnd += currentItemSize;
		}
		else if (isFirstItemInViewportSet || (newItemSizeSoFar >= scrollStart)) {
			if (!isFirstItemInViewportSet) {
				const percentVisible: ScalePercent = ratioToScalePercent({
					denominator: currentItemSize,
					numerator: newItemSizeSoFar - scrollStart
				});
				addToItemsInView(currentItem, currentItemIndex, percentVisible);
				firstItemInViewportIndex = currentItemIndex;
				isFirstItemInViewportSet = true;
			} else if (newItemSizeSoFar >= scrollToEndOfViewport) {
				const percentVisible: ScalePercent = ratioToScalePercent({
					denominator: currentItemSize,
					numerator: scrollToEndOfViewport - itemSizeSoFar
				});
				addToItemsInView(currentItem, currentItemIndex, percentVisible);
			} else {
				addToItemsInView(currentItem, currentItemIndex, ScalePercent[100]);
			}
			childrenSize += currentItemSize;
		}
		else paddingStart += currentItemSize;

		itemSizeSoFar = newItemSizeSoFar;
	}

	// Resolve start buffer items (now that we have resolved start index of view port items
	let currentItemInStartBufferIndex = (firstItemInViewportIndex - validItemBufferCount) < 0 ? 0 : (firstItemInViewportIndex - validItemBufferCount);

	for (; currentItemInStartBufferIndex < firstItemInViewportIndex; currentItemInStartBufferIndex++) {
		// Add item to start buffer array and remove start padding
		const currentItem = items[currentItemInStartBufferIndex];
		const currentItemSize: SizePx = currentItem.size ?? itemSize;
		addToItemsInStartBuffer(currentItem, currentItemInStartBufferIndex, ScalePercent[0]);
		paddingStart -= currentItemSize;
		childrenSize += currentItemSize;
	}

	const size: VirtualScrollContentSize = {
		childrenSize: childrenSize,
		paddingEnd: paddingEnd,
		paddingStart: paddingStart
	};

	const indexesInViewResult: VirtualScrollIndexesInView = [...indexesInStartBuffer, ...indexesInView];
	const itemsInViewResult: VirtualScrollItems<TChildProps> = [...itemsInStartBuffer, ...itemsInView];

	return {
		indexesInView: indexesInViewResult,
		itemsInView: itemsInViewResult,
		size: size
	};
}

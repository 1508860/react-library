import { useEffect, useState } from "react";

import {
	type DimensionsPx,
	type ScrollObserverState
} from "@react-library/common";

import { VIRTUAL_SCROLL_CONTENT_SIZE_DEFAULT } from "../constants/virtual-scroll-content-size-default.const";
import { virtualScrollRender } from "../functions/virtual-scroll-render.function";
import type { VirtualScrollContentSize } from "../types/virtual-scroll-content-size.type";
import type { VirtualScrollItemsInViewState } from "../types/virtual-scroll-items-in-view-state.type";
import type { VirtualScrollItemsInView } from "../types/virtual-scroll-items-in-view.type";

import { useVirtualScrollItemsContext } from "./virtual-scroll-items-context.hook";
import { useVirtualScrollConfigContext } from "./virtual-scroll-config-context.hook";

/**
 * Resolves content state for virtual scroll and resolves items in the view to be rendered
 * @param itemBufferCount
 * @param orientation
 * @param containerSize
 * @param containerScrollState
 */
export function useVirtualScrollItemsInViewState(
	containerSize: DimensionsPx,
	containerScrollState: ScrollObserverState
): VirtualScrollItemsInViewState {

	// Local contexts
	const config = useVirtualScrollConfigContext();
	const items = useVirtualScrollItemsContext();

	const [itemsInView, setItemsInView] = useState<VirtualScrollItemsInView>(() => []);
	const [size, setSize] = useState<VirtualScrollContentSize>(() => VIRTUAL_SCROLL_CONTENT_SIZE_DEFAULT);

	// Handle render of items
	useEffect(
		() => {
			const renderState = virtualScrollRender(
				config.itemBufferCount,
				config.orientation,
				containerSize,
				containerScrollState,
				items
			);
			setItemsInView(renderState.itemsInView);
			setSize(renderState.size);
		},
		[containerSize, containerScrollState, config.itemBufferCount, config.orientation, items]
	);

	return {
		itemsInView: itemsInView,
		size: size
	};
};

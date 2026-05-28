import { useCallback } from "react";

import { Orientation, type SizePx } from "@react-library/common";

import type { VirtualScrollContainerElement } from "../types/virtual-scroll-container-element.type";
import type { VirtualScrollItem } from "../types/virtual-scroll-item.type";
import type { VirtualScrollToIndexCallback } from "../types/virtual-scroll-to-index-callback.type";

import { useVirtualScrollConfigContext } from "./virtual-scroll-config-context.hook";

/**
 * Resolves callback for scrolling to a particular index in the {@link items} array
 * @param items
 * @param containerElement
 */
export function useVirtualScrollToIndexCallback<TChildProps>(
	items: Array<VirtualScrollItem<TChildProps>>,
	containerElement: VirtualScrollContainerElement | null
): VirtualScrollToIndexCallback {

	// Local contexts
	const config = useVirtualScrollConfigContext();

	const state = useCallback<VirtualScrollToIndexCallback>(
		(scrollToIndex, behavior) => {
			if (!containerElement) return;

			let currentSize: SizePx = 0;

			const validScrollToIndex: number = Math.max(Math.min(scrollToIndex, (items.length - 1)), 0);

			for (let i = 0; i <= validScrollToIndex; i++) currentSize += (items[i].size ?? config.itemSize);

			containerElement.scrollTo({
				behavior: behavior,
				left: config.orientation === Orientation.Horizontal ? currentSize : undefined,
				top: config.orientation === Orientation.Vertical ? currentSize : undefined
			})
		},
		[items, containerElement, config.itemSize, config.orientation]
	);

	return state;
};

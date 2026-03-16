import { useCallback, useEffect, useRef, useState } from "react";

import { generateGuid, type DimensionsPx, type Guid, type ScrollObserverState } from "@react-library/common";

import type { VirtualScrollItemId } from "../../../types/virtual-scroll-item-id.type";
import type { VirtualScrollItemRegister } from "../../../types/virtual-scroll-item-register.type";
import type { VirtualScrollItemUnregister } from "../../../types/virtual-scroll-item-unregister.type";
import type { VirtualScrollItemsInView } from "../../../types/virtual-scroll-items-in-view.type";
import type { VirtualScrollOrientation } from "../../../types/virtual-scroll-orientation.type";

import { VIRTUAL_SCROLL_CONTENT_SIZE_DEFAULT } from "../constants/virtual-scroll-content-size-default.const";
import { virtualScrollRender } from "../functions/virtual-scroll-render.function";
import type { VirtualScrollContentSize } from "../types/virtual-scroll-content-size.type";
import type { VirtualScrollContentState } from "../types/virtual-scroll-content-state.type";
import type { VirtualScrollItemMap, VirtualScrollItemMapValue } from "../types/virtual-scroll-item-map.type";

/**
 * Resolves content state for virtual scroll and resolves items in the view to be rendered
 * @param itemBufferCount
 * @param orientation
 * @param virtualScrollSize
 * @param scrollState
 */
export function useVirtualScrollContentState(
	itemBufferCount: number,
	orientation: VirtualScrollOrientation,
	virtualScrollSize: DimensionsPx,
	scrollState: ScrollObserverState
): VirtualScrollContentState {

	const [renderId, setRenderId] = useState<Guid>(() => generateGuid());
	const handleSetRenderId = useCallback(() => setRenderId(generateGuid()), []);

	const [itemsInView, setItemsInView] = useState<VirtualScrollItemsInView>(() => new Set<VirtualScrollItemId>());
	const [size, setSize] = useState<VirtualScrollContentSize>(() => VIRTUAL_SCROLL_CONTENT_SIZE_DEFAULT);

	// Handle register of all items
	const itemsRef = useRef<VirtualScrollItemMap>(new Map<VirtualScrollItemId, VirtualScrollItemMapValue>());

	// Register each item
	const itemRegister = useCallback<VirtualScrollItemRegister>(
		(param) => {
			itemsRef.current.set(
				param.id,
				{
					size: param.size,
					sortOrder: param.sortOrder
				}
			);
			handleSetRenderId();
		},
		[handleSetRenderId]
	);

	// Unregister each item
	const itemUnregister = useCallback<VirtualScrollItemUnregister>(
		(param) => {
			itemsRef.current.delete(param.id);
			handleSetRenderId();
		},
		[handleSetRenderId]
	);

	// Handle render of items
	useEffect(
		() => {
			const renderState = virtualScrollRender(
				itemBufferCount,
				orientation,
				virtualScrollSize,
				scrollState,
				itemsRef.current
			);

			console.log(renderState);

			setItemsInView(renderState.itemsInView);
			setSize(renderState.size);
		},
		[itemBufferCount, orientation, virtualScrollSize, scrollState, renderId]
	)

	return {
		itemRegister: itemRegister,
		itemsInView: itemsInView,
		itemUnregister: itemUnregister,
		size: size
	};
};

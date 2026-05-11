import { useCallback, useEffect, useRef, useState } from "react";

import {
	useResolveState,
	type Callback,
	type DimensionsPx,
	type ScrollObserverState
} from "@react-library/common";

import { VIRTUAL_SCROLL_CONTENT_SIZE_DEFAULT } from "../constants/virtual-scroll-content-size-default.const";
import { virtualScrollRender } from "../functions/virtual-scroll-render.function";
import type { VirtualScrollContentSize } from "../types/virtual-scroll-content-size.type";
import type { VirtualScrollContentState } from "../types/virtual-scroll-content-state.type";
import type { VirtualScrollItemId } from "../types/virtual-scroll-item-id.type";
import type {
	VirtualScrollItemMap,
	VirtualScrollItemMapValue
} from "../types/virtual-scroll-item-map.type";
import type {
	VirtualScrollItemRegister,
	VirtualScrollItemUnregister,
	VirtualScrollItemRegisterCallbacks
} from "../types/virtual-scroll-item-register.type";
import type { VirtualScrollItemsInView } from "../types/virtual-scroll-items-in-view.type";
import type { VirtualScrollOrientation } from "../types/virtual-scroll-orientation.type";


/**
 * Resolves content state for virtual scroll and resolves items in the view to be rendered
 * @param itemBufferCount
 * @param orientation
 * @param containerSize
 * @param containerScrollState
 */
export function useVirtualScrollContentState(
	itemBufferCount: number,
	orientation: VirtualScrollOrientation,
	containerSize: DimensionsPx,
	containerScrollState: ScrollObserverState
): VirtualScrollContentState {

	const [items, setItems] = useState<VirtualScrollItemMap>(() => new Map<VirtualScrollItemId, VirtualScrollItemMapValue>());
	const itemsRef = useRef<VirtualScrollItemMap>(items);
	const [itemsInView, setItemsInView] = useState<VirtualScrollItemsInView>(() => []);
	const [size, setSize] = useState<VirtualScrollContentSize>(() => VIRTUAL_SCROLL_CONTENT_SIZE_DEFAULT);

	// Register each item
	const itemRegister = useCallback<VirtualScrollItemRegister>(
		(param) => {
			itemsRef.current.set(
				param.id,
				{
					index: param.index,
					size: param.size
				}
			)
			setItems(new Map(itemsRef.current));
		},
		[]
	);

	// Unregister each item
	const itemUnregister = useCallback<VirtualScrollItemUnregister>(
		(param) => {
			itemsRef.current.delete(param.id);
			setItems(new Map(itemsRef.current));
		},
		[]
	);

	// Callbacks
	const resolveRegisterCallbacks = useCallback<Callback<VirtualScrollItemRegisterCallbacks>>(
		() => ({
			itemRegister: itemRegister,
			itemUnregister: itemUnregister
		}),
		[itemRegister, itemUnregister]
	);
	const registerCallbacks = useResolveState(resolveRegisterCallbacks);

	// Handle render of items
	useEffect(
		() => {
			const renderState = virtualScrollRender(
				itemBufferCount,
				orientation,
				containerSize,
				containerScrollState,
				items
			);
			setItemsInView(renderState.itemsInView);
			setSize(renderState.size);
		},
		[itemBufferCount, orientation, containerSize, containerScrollState, items]
	);

	return {
		itemRegister: registerCallbacks,
		items: items,
		itemsInView: itemsInView,
		size: size
	};
};

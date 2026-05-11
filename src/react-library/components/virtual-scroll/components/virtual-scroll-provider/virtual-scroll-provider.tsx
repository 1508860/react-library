import { useCallback, useState, type RefCallback } from "react";

import {
	type Callback,
	type ScrollObserverState,
	ResizeObserverDebounce,
	resolveScrollObserverState,
	SCROLL_OBSERVER_STATE_DEFAULT,
	targetEvent,
	useResizeObserverState,
	useResolveState
} from "@react-library/common";

import { VIRTUAL_SCROLL_CONTENT_SIZE_CONTEXT } from "../../constants/virtual-scroll-content-size-context.const";
import { VIRTUAL_SCROLL_CONTAINER_PROPS_CONTEXT } from "../../constants/virtual-scroll-container-props-context.const";
import { VIRTUAL_SCROLL_ITEM_REGISTER_CALLBACKS_CONTEXT } from "../../constants/virtual-scroll-item-register-callbacks-context.const";
import { VIRTUAL_SCROLL_ITEM_SIZE_DEFAULT_CONTEXT } from "../../constants/virtual-scroll-item-size-default-context.const";
import { VIRTUAL_SCROLL_ITEMS_IN_VIEW_CONTEXT } from "../../constants/virtual-scroll-items-in-view-context.const";
import { VIRTUAL_SCROLL_ORIENTATION_CONTEXT } from "../../constants/virtual-scroll-orientation-context.const";
import { useVirtualScrollContentState } from "../../hooks/virtual-scroll-content-state.hook";
import type { VirtualScrollContainerElement } from "../../types/virtual-scroll-container-element.type";
import type { VirtualScrollContainerProps } from "../../types/virtual-scroll-container-props.type";

import type { VirtualScrollProviderProps } from "./types/virtual-scroll-provider-props.type";
import { VIRTUAL_SCROLL_ITEMS_CONTEXT } from "../../constants/virtual-scroll-items-context.const";

/**
 * Virtual scroll provider component
 * Used to provide contexts available across all children of the virtual scroll
 * @param props
 */
export function VirtualScrollProvider(props: VirtualScrollProviderProps) {

	// Container element
	const [containerElement, setContainerElement] = useState<VirtualScrollContainerElement | null>(() => null);
	const setContainerElementCallback = useCallback<RefCallback<VirtualScrollContainerElement>>((element) => setContainerElement(element), []);

	// Container resize state
	const [containerSize] = useResizeObserverState(true, true, containerElement, "border-box", ResizeObserverDebounce["100Ms"]);

	// Container scroll state
	const [containerScrollState, setContainerScrollState] = useState<ScrollObserverState>(SCROLL_OBSERVER_STATE_DEFAULT);
	const handleSetContainerScrollState = useCallback(
		(event: React.UIEvent) => targetEvent(event, (callbackEvent) => setContainerScrollState(resolveScrollObserverState(callbackEvent.currentTarget))),
		[]
	);

	// Container props
	const resolveContainerProps = useCallback<Callback<VirtualScrollContainerProps>>(
		() => ({
			onScroll: handleSetContainerScrollState,
			orientation: props.orientation,
			ref: setContainerElementCallback
		}),
		[props.orientation, handleSetContainerScrollState, setContainerElementCallback]
	);
	const containerProps = useResolveState<VirtualScrollContainerProps>(resolveContainerProps);

	// Virtual scroll render state
	const { itemRegister, items, itemsInView, size } = useVirtualScrollContentState(
		props.itemBufferCount,
		props.orientation,
		containerSize,
		containerScrollState
	);

	return (
		<VIRTUAL_SCROLL_ITEM_SIZE_DEFAULT_CONTEXT value={props.itemSize}>
			<VIRTUAL_SCROLL_ORIENTATION_CONTEXT value={props.orientation}>
				<VIRTUAL_SCROLL_CONTAINER_PROPS_CONTEXT value={containerProps}>
					<VIRTUAL_SCROLL_ITEM_REGISTER_CALLBACKS_CONTEXT value={itemRegister}>
						<VIRTUAL_SCROLL_ITEMS_CONTEXT value={items}>
							<VIRTUAL_SCROLL_ITEMS_IN_VIEW_CONTEXT value={itemsInView}>
								<VIRTUAL_SCROLL_CONTENT_SIZE_CONTEXT value={size}>
									{props.children}
								</VIRTUAL_SCROLL_CONTENT_SIZE_CONTEXT>
							</VIRTUAL_SCROLL_ITEMS_IN_VIEW_CONTEXT>
						</VIRTUAL_SCROLL_ITEMS_CONTEXT>
					</VIRTUAL_SCROLL_ITEM_REGISTER_CALLBACKS_CONTEXT>
				</VIRTUAL_SCROLL_CONTAINER_PROPS_CONTEXT>
			</VIRTUAL_SCROLL_ORIENTATION_CONTEXT>
		</VIRTUAL_SCROLL_ITEM_SIZE_DEFAULT_CONTEXT>
	);
}

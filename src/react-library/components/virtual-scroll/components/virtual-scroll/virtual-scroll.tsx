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
import { VIRTUAL_SCROLL_ITEM_REGISTER_CONTEXT } from "../../constants/virtual-scroll-item-register-context.const";
import { VIRTUAL_SCROLL_ITEM_SIZE_DEFAULT_CONTEXT } from "../../constants/virtual-scroll-item-size-default-context.const";
import { VIRTUAL_SCROLL_ITEM_UNREGISTER_CONTEXT } from "../../constants/virtual-scroll-item-unregister-context.const";
import { VIRTUAL_SCROLL_ITEMS_IN_VIEW_CONTEXT } from "../../constants/virtual-scroll-items-in-view-context.const";
import { VIRTUAL_SCROLL_ORIENTATION_CONTEXT } from "../../constants/virtual-scroll-orientation-context.const";
import type { VirtualScrollContainerElement } from "../../types/virtual-scroll-container-element.type";

import type { VirtualScrollContainerProps } from "../../types/virtual-scroll-container-props.type";

import { useVirtualScrollContentState } from "./hooks/virtual-scroll-content-state.hook";
import type { VirtualScrollProps } from "./types/virtual-scroll-props.type";

/**
 * Virtual scroll component
 * Wraps virtual scroll items and handles which items to render
 * @param props
 */
export function VirtualScroll(props: VirtualScrollProps) {

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
	const { itemRegister, itemsInView, itemUnregister, size } = useVirtualScrollContentState(
		props.itemBufferCount,
		props.orientation,
		containerSize,
		containerScrollState
	);

	return (
		<VIRTUAL_SCROLL_CONTAINER_PROPS_CONTEXT value={containerProps}>
			<VIRTUAL_SCROLL_CONTENT_SIZE_CONTEXT value={size}>
				<VIRTUAL_SCROLL_ORIENTATION_CONTEXT value={props.orientation}>
					<VIRTUAL_SCROLL_ITEM_SIZE_DEFAULT_CONTEXT value={props.itemSize}>
						<VIRTUAL_SCROLL_ITEM_REGISTER_CONTEXT value={itemRegister}>
							<VIRTUAL_SCROLL_ITEM_UNREGISTER_CONTEXT value={itemUnregister}>
								<VIRTUAL_SCROLL_ITEMS_IN_VIEW_CONTEXT value={itemsInView}>
									{props.children}
								</VIRTUAL_SCROLL_ITEMS_IN_VIEW_CONTEXT>
							</VIRTUAL_SCROLL_ITEM_UNREGISTER_CONTEXT>
						</VIRTUAL_SCROLL_ITEM_REGISTER_CONTEXT>
					</VIRTUAL_SCROLL_ITEM_SIZE_DEFAULT_CONTEXT>
				</VIRTUAL_SCROLL_ORIENTATION_CONTEXT>
			</VIRTUAL_SCROLL_CONTENT_SIZE_CONTEXT>
		</VIRTUAL_SCROLL_CONTAINER_PROPS_CONTEXT>
	);
}

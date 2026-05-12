import { useCallback, useState, type RefCallback } from "react";

import {
	type Callback,
	type EqualityCallback,
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
import { VIRTUAL_SCROLL_ITEMS_IN_VIEW_CONTEXT } from "../../constants/virtual-scroll-items-in-view-context.const";
import { useVirtualScrollConfigContext } from "../../hooks/virtual-scroll-config-context.hook";
import { useVirtualScrollItemsInViewState } from "../../hooks/virtual-scroll-items-in-view-state.hook";
import type { VirtualScrollContainerElement } from "../../types/virtual-scroll-container-element.type";
import type { VirtualScrollContainerProps } from "../../types/virtual-scroll-container-props.type";

import type { VirtualScrollProviderProps } from "./types/virtual-scroll-provider-props.type";

/**
 * Virtual scroll provider component
 * Used to provide contexts available across all children of the virtual scroll
 * @param props
 */
export function VirtualScrollProvider(props: VirtualScrollProviderProps) {

	// Local contexts
	const config = useVirtualScrollConfigContext();

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
			orientation: config.orientation,
			ref: setContainerElementCallback
		}),
		[config.orientation, handleSetContainerScrollState, setContainerElementCallback]
	);
	const isContainerPropsEqual = useCallback<EqualityCallback<VirtualScrollContainerProps>>(
		(value1, value2) => (
			value1.onScroll === value2.onScroll &&
			value1.orientation === value2.orientation &&
			value1.ref === value2.ref
		),
		[]
	);
	const containerProps = useResolveState<VirtualScrollContainerProps>(resolveContainerProps, isContainerPropsEqual);

	// Virtual scroll render state
	const { itemsInView, size } = useVirtualScrollItemsInViewState(containerSize, containerScrollState);

	return (
		<VIRTUAL_SCROLL_CONTAINER_PROPS_CONTEXT value={containerProps}>
			<VIRTUAL_SCROLL_ITEMS_IN_VIEW_CONTEXT value={itemsInView}>
				<VIRTUAL_SCROLL_CONTENT_SIZE_CONTEXT value={size}>
					{props.children}
				</VIRTUAL_SCROLL_CONTENT_SIZE_CONTEXT>
			</VIRTUAL_SCROLL_ITEMS_IN_VIEW_CONTEXT>
		</VIRTUAL_SCROLL_CONTAINER_PROPS_CONTEXT>
	);
}

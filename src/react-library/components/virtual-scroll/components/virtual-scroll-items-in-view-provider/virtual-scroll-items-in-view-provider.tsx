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
import { VIRTUAL_SCROLL_ITEMS_IN_VIEW_CONTEXT } from "../../constants/virtual-scroll-items-in-view-context.const";
import { isVirtualScrollContainerPropsEqual } from "../../functions/is-virtual-scroll-container-props-equal.function";
import { useVirtualScrollConfigContext } from "../../hooks/virtual-scroll-config-context.hook";
import { useVirtualScrollRenderState } from "../../hooks/virtual-scroll-render-state.hook";
import type { VirtualScrollContainerElement } from "../../types/virtual-scroll-container-element.type";
import type { VirtualScrollContainerProps } from "../../types/virtual-scroll-container-props.type";

import type { VirtualScrollItemsInViewProviderProps } from "./types/virtual-scroll-items-in-view-provider-props.type";
import type { VirtualScrollItems } from "../../types/virtual-scroll-item.type";

/**
 * Virtual scroll items in view provider component
 * Used to provide calculated contexts for content to be rendered
 * @param props
 */
export function VirtualScrollItemsInViewProvider<TChildProps>(props: VirtualScrollItemsInViewProviderProps<TChildProps>) {

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
	const containerProps = useResolveState<VirtualScrollContainerProps>(resolveContainerProps, isVirtualScrollContainerPropsEqual);

	// Virtual scroll render state
	const { itemsInView, size } = useVirtualScrollRenderState<TChildProps>(props.items, containerSize, containerScrollState);

	return (
		<VIRTUAL_SCROLL_CONTAINER_PROPS_CONTEXT value={containerProps}>
			{/* // TODO sort out casting */}
			<VIRTUAL_SCROLL_ITEMS_IN_VIEW_CONTEXT value={itemsInView as VirtualScrollItems<unknown>}>
				<VIRTUAL_SCROLL_CONTENT_SIZE_CONTEXT value={size}>
					{props.children}
				</VIRTUAL_SCROLL_CONTENT_SIZE_CONTEXT>
			</VIRTUAL_SCROLL_ITEMS_IN_VIEW_CONTEXT>
		</VIRTUAL_SCROLL_CONTAINER_PROPS_CONTEXT>
	);
}

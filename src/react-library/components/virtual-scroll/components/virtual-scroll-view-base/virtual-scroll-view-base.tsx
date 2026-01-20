import { useCallback, useEffect, useState, type RefCallback } from "react";

import {
	type ScrollObserverState,
	Orientation,
	ResizeObserverDebounce,
	resolveScrollObserverState,
	SCROLL_OBSERVER_STATE_DEFAULT,
	targetEvent,
	useResizeObserverState
} from "@react-library/common";

import { virtualScrollRenderResultDefault } from "../../functions/virtual-scroll-render-result-default.function";
import type { VirtualScrollRow } from "../../enums/virtual-scroll-row.type";
import type { IVirtualScrollConfig } from "../../interfaces/virtual-scroll-config.interface";
import type { IVirtualScrollRenderResult } from "../../interfaces/virtual-scroll-render-result.interface";
import type { VirtualScrollContainerState } from "../../types/virtual-scroll-container-state.type";
import type { VirtualScrollRowComparable } from "../../types/virtual-scroll-row.type";
import type { VirtualScrollViewProps } from "../../types/virtual-scroll-view-props.type";
import { virtualScrollContainerStyle } from "./styles/virtual-scroll-container-style.function";
import { virtualScrollElementContainerStyle } from "./styles/virtual-scroll-element-container-style.function";
import { virtualScrollElementStyle } from "./styles/virtual-scroll-element-style.function";

/**
 * Base component for rendering elements in a virtual scroll
 * Note: This is not to be used directly, use one of the pre made components that support a basic virtual scroll or accordioned elements etc
 * @param props
 * @param getRenderResult callback function for returning the rendered elements as well as as relevant padding to offset the elements not being rendered
 */
export function VirtualScrollViewBase<TElement extends VirtualScrollRowComparable<VirtualScrollRow>, TRenderElement>(
	props: VirtualScrollViewProps<TElement, TRenderElement>,
	getRenderResult: (
		virtualScrollConfig: IVirtualScrollConfig,
		virtualScrollContainerState: VirtualScrollContainerState,
		elements: TElement | Array<TElement>
	) => IVirtualScrollRenderResult<TRenderElement>
) {
	// Elements
	const [vsContainerElement, setVsContainerElement] = useState<HTMLDivElement | null>(null);
	const setVsContainerElementCallback = useCallback<RefCallback<HTMLDivElement | null>>((element) => setVsContainerElement(element), []);

	// Virtual scroll container resize state
	const [vsContainerDimensions] = useResizeObserverState(true, true, vsContainerElement, "border-box", ResizeObserverDebounce["100Ms"]);

	// Virtual scroll container scroll state
	const [scrollState, setScrollState] = useState<ScrollObserverState>(SCROLL_OBSERVER_STATE_DEFAULT);

	// Virtual scroll render state
	const [renderResult, setRenderResult] = useState<IVirtualScrollRenderResult<TRenderElement>>(virtualScrollRenderResultDefault());
	useEffect(
		() => setRenderResult(getRenderResult(
			{ elementBufferCount: props.elementBufferCount, elementSize: props.elementSize },
			props.orientation === Orientation.Horizontal ?
				{ viewportSize: vsContainerDimensions.width, scrollStart: scrollState.horizontalScrollStart } :
				{ viewportSize: vsContainerDimensions.height, scrollStart: scrollState.verticalScrollStart },
			props.data
		)),
		[getRenderResult, props.data, props.elementBufferCount, props.elementSize, props.orientation, vsContainerDimensions, scrollState]
	);

	return (
		<div
			onScroll={(event) => targetEvent(event, (callbackEvent) => setScrollState(resolveScrollObserverState(callbackEvent.currentTarget)))}
			ref={setVsContainerElementCallback}
			style={virtualScrollContainerStyle(props.orientation)}
		>
			<div style={virtualScrollElementContainerStyle(props.orientation, renderResult.childrenSize, renderResult.paddingStart, renderResult.paddingEnd)}>
				{renderResult.children.map((child) =>
					<div
						id={`vs-rendered-element-${child.id}`}
						key={`vs-rendered-element-${child.id}`}
						style={virtualScrollElementStyle(props.orientation, child.elementSize)}
					>
						{props.children(child.element)}
					</div>
				)}
			</div>
		</div>
	);
}

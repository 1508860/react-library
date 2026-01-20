import { virtualScrollRenderBase } from "../functions/virtual-scroll-render-base.function";
import type { IVirtualScrollConfig } from "../interfaces/virtual-scroll-config.interface";
import type { VirtualScrollContainerState } from "../types/virtual-scroll-container-state.type";
import type { VirtualScrollRowStandard } from "../types/virtual-scroll-row.type";
import type { VirtualScrollViewProps } from "../types/virtual-scroll-view-props.type";
import { VirtualScrollViewBase } from "./virtual-scroll-view-base/virtual-scroll-view-base";

/**
 * Basic component for rendering elements in a virtual scroll
 * @param props
 */
export function VirtualScrollView<TElement extends VirtualScrollRowStandard>(props: VirtualScrollViewProps<TElement, TElement>) {
	return VirtualScrollViewBase<TElement, TElement>(
		props,
		(
			virtualScrollConfig: IVirtualScrollConfig,
			virtualScrollContainerState: VirtualScrollContainerState,
			elements: TElement | Array<TElement>
		) => virtualScrollRenderBase<TElement>(virtualScrollConfig, virtualScrollContainerState, elements)
	);
}

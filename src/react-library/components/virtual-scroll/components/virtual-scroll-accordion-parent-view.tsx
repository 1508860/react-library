import { virtualScrollRenderAccordionParent } from "../functions/virtual-scroll-render-parent-accordion.function";
import type { VirtualScrollRowParent, VirtualScrollRowStandard } from "../types/virtual-scroll-row.type";
import type { VirtualScrollViewProps } from "../types/virtual-scroll-view-props.type";
import { VirtualScrollViewBase } from "./virtual-scroll-view-base/virtual-scroll-view-base";

/**
 * Accordion component for rendering elements in a virtual scroll
 * Supports: parent => base relationship
 * @param props
 */
export function VirtualScrollAccordionParentView<
	TElement extends VirtualScrollRowStandard,
	TParentElement extends VirtualScrollRowParent<TElement>
>(props: VirtualScrollViewProps<TParentElement, (TParentElement | TElement)>) {
	return VirtualScrollViewBase<TParentElement, (TParentElement | TElement)>(
		props,
		virtualScrollRenderAccordionParent<TElement, TParentElement>
	);
}

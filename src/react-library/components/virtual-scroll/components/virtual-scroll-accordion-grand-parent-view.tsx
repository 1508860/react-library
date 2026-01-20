import { virtualScrollRenderAccordionGrandParent } from "../functions/virtual-scroll-render-grand-parent-accordion.function";
import type { VirtualScrollRowGrandParent, VirtualScrollRowParent, VirtualScrollRowStandard } from "../types/virtual-scroll-row.type";
import type { VirtualScrollViewProps } from "../types/virtual-scroll-view-props.type";
import { VirtualScrollViewBase } from "./virtual-scroll-view-base/virtual-scroll-view-base";

/**
 * Accordion component for rendering elements in a virtual scroll
 * Supports: grand parent => parent => base relationship
 * @param props
 */
export function VirtualScrollAccordionGrandParentView<
	TElement extends VirtualScrollRowStandard,
	TParentElement extends VirtualScrollRowParent<TElement>,
	TGrandParentElement extends VirtualScrollRowGrandParent<TParentElement>
>(props: VirtualScrollViewProps<TGrandParentElement, (TGrandParentElement | TParentElement | TElement)>) {
	return VirtualScrollViewBase<TGrandParentElement, (TGrandParentElement | TParentElement | TElement)>(
		props,
		virtualScrollRenderAccordionGrandParent<TElement, TParentElement, TGrandParentElement>
	);
}

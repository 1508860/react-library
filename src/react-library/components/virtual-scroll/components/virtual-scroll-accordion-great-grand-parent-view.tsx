import { virtualScrollRenderAccordionGreatGrandParent } from "../functions/virtual-scroll-render-great-grand-parent-accordion.function";
import type {
	VirtualScrollRowParent,
	VirtualScrollRowGrandParent,
	VirtualScrollRowGreatGrandParent,
	VirtualScrollRowStandard
} from "../types/virtual-scroll-row.type";
import type { VirtualScrollViewProps } from "../types/virtual-scroll-view-props.type";
import { VirtualScrollViewBase } from "./virtual-scroll-view-base/virtual-scroll-view-base";

/**
 * Accordion component for rendering elements in a virtual scroll
 * Supports: great grand parent => grand parent => parent => base relationship
 * @param props
 */
export function VirtualScrollAccordionGreatGrandGrandParentView<
	TElement extends VirtualScrollRowStandard,
	TParentElement extends VirtualScrollRowParent<TElement>,
	TGrandParentElement extends VirtualScrollRowGrandParent<TParentElement>,
	TGreatGrandParentElement extends VirtualScrollRowGreatGrandParent<TGrandParentElement>
>(props: VirtualScrollViewProps<TGreatGrandParentElement, (TGreatGrandParentElement | TGrandParentElement | TParentElement | TElement)>) {
	return VirtualScrollViewBase<TGreatGrandParentElement, (TGreatGrandParentElement | TGrandParentElement | TParentElement | TElement)>(
		props,
		virtualScrollRenderAccordionGreatGrandParent<TElement, TParentElement, TGrandParentElement, TGreatGrandParentElement>
	);
}

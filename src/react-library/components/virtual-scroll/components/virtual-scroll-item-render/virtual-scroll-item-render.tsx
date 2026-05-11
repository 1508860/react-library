import { Fragment, useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import { useVirtualScrollElementsInViewContext } from "../../hooks/virtual-scroll-elements-in-view-context.hook";
import { useVirtualScrollOrientationContext } from "../../hooks/virtual-scroll-orientation-context.hook";
import { useVirtualScrollItemsContext } from "../../hooks/virtual-scroll-items-context.hook";
import type { VirtualScrollItemChildResult } from "../../types/virtual-scroll-item-child.type";
import type { VirtualScrollItemSize } from "../../types/virtual-scroll-item-size.type";

import { virtualScrollItemRenderStyle } from "./styles/virtual-scroll-item-render-style.function";
import type { VirtualScrollItemRenderProps } from "./types/virtual-scroll-item-render-props.type";

/**
 * Virtual scroll item render component
 * @param props
 */
export function VirtualScrollItemRender(props: VirtualScrollItemRenderProps) {

	const orientation = useVirtualScrollOrientationContext();
	const items = useVirtualScrollItemsContext();
	const elementsInView = useVirtualScrollElementsInViewContext();

	// Resolve size
	const resolveSize = useCallback<Callback<VirtualScrollItemSize | undefined>>(
		() => items.get(props.id)?.size,
		[props.id, items]
	);
	const size = useResolveState(resolveSize);

	// Resolve element
	const resolveElement = useCallback<Callback<VirtualScrollItemChildResult | undefined>>(
		() => elementsInView.get(props.id),
		[props.id, elementsInView]
	);
	const element = useResolveState(resolveElement);

	if (!size) return (
		<Fragment key="no-item" />
	);

	return (
		<div
			key={`item-${props.id}`}
			style={virtualScrollItemRenderStyle(orientation, size)}
		>
			{element}
		</div>
	);
}

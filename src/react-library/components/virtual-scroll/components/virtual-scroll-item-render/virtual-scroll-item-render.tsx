import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import { useVirtualScrollConfigContext } from "../../hooks/virtual-scroll-config-context.hook";
import type { VirtualScrollItemSize } from "../../types/virtual-scroll-item-size.type";

import { virtualScrollItemRenderStyle } from "./styles/virtual-scroll-item-render-style.function";
import type { VirtualScrollItemRenderProps } from "./types/virtual-scroll-item-render-props.type";

/**
 * Virtual scroll item render component
 * @param props
 */
export function VirtualScrollItemRender<TChildProps>(props: VirtualScrollItemRenderProps<TChildProps>) {

	const config = useVirtualScrollConfigContext();

	// Resolve size
	const resolveSize = useCallback<Callback<VirtualScrollItemSize>>(
		() => props.item.size ?? props.itemSize,
		[props.item.size, props.itemSize]
	);
	const size = useResolveState(resolveSize);

	return (
		<div
			key={props.item.id}
			style={virtualScrollItemRenderStyle(config.orientation, size)}
		>
			{<props.item.children
				{...props.item.childProps}
				key={props.item.id}
			/>}
		</div>
	);
}

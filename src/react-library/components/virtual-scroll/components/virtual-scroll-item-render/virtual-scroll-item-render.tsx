import { useCallback, useRef, type ReactElement } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import { useVirtualScrollConfigContext } from "../../hooks/virtual-scroll-config-context.hook";
import type { VirtualScrollItemSize } from "../../types/virtual-scroll-item-size.type";
import type { VirtualScrollItem } from "../../types/virtual-scroll-item.type";

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

	// Resolve child element
	const childRef = useRef<ReactElement | undefined>(undefined);
	const item = useRef<VirtualScrollItem<TChildProps>>(props.item);
	const resolveChild = useCallback<Callback<ReactElement | undefined>>(
		() => {
			if (
				childRef.current !== undefined &&
				props.item.children === item.current.children &&
				props.isEqual(props.item.childProps, item.current.childProps)
			) return childRef.current;
			const element: ReactElement = (
				<props.item.children
					{...props.item.childProps}
					key={props.item.id}
				/>
			);
			childRef.current = element;
			item.current = props.item;
			return element;
		},
		[props]
	);
	const child = useResolveState(resolveChild);

	return (
		<div
			key={props.item.id}
			style={virtualScrollItemRenderStyle(config.orientation, size)}
		>
			{child}
		</div>
	);
}

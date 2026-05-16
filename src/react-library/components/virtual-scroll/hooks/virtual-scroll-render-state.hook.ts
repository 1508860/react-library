import { useCallback } from "react";

import {
	useResolveState,
	type Callback,
	type DimensionsPx,
	type ScrollObserverState
} from "@react-library/common";

import { virtualScrollRender } from "../functions/virtual-scroll-render.function";
import type { VirtualScrollItem } from "../types/virtual-scroll-item.type";
import type { VirtualScrollRenderState } from "../types/virtual-scroll-render-state.type";

import { useVirtualScrollConfigContext } from "./virtual-scroll-config-context.hook";

/**
 * Resolves content state for virtual scroll and resolves items in the view to be rendered
 * @param items
 * @param containerSize
 * @param containerScrollState
 */
export function useVirtualScrollRenderState<TChildProps>(
	items: Array<VirtualScrollItem<TChildProps>>,
	containerSize: DimensionsPx,
	containerScrollState: ScrollObserverState
): VirtualScrollRenderState<TChildProps> {

	// Local contexts
	const config = useVirtualScrollConfigContext();

	const resolveState = useCallback<Callback<VirtualScrollRenderState<TChildProps>>>(
		() => virtualScrollRender(
			config.itemBufferCount,
			items,
			config.itemSize,
			config.orientation,
			containerSize,
			containerScrollState
		),
		[items, containerSize, containerScrollState, config.itemBufferCount, config.itemSize, config.orientation]
	);
	const state = useResolveState(resolveState);

	return state;
};

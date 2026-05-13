import { useCallback } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import { VIRTUAL_SCROLL_ITEM_COUNT_CONTEXT } from "../../constants/virtual-scroll-item-count-context.const";

import type { VirtualScrollItemCountProviderProps } from "./types/virtual-scroll-item-count-provider-props.type";

/**
 * Virtual scroll item count provider component
 * Used to provide total count of virtual scroll items to control registering process
 * @param props
 */
export function VirtualScrollItemCountProvider(props: VirtualScrollItemCountProviderProps) {

	const resolveCount = useCallback<Callback<number>>(
		() => Array.isArray(props.items) ? props.items.length : 1,
		[props.items]
	);
	const count = useResolveState(resolveCount);

	return (
		<VIRTUAL_SCROLL_ITEM_COUNT_CONTEXT value={count}>
			{props.children}
		</VIRTUAL_SCROLL_ITEM_COUNT_CONTEXT>
	);
}

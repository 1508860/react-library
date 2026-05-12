import { useCallback, useEffect } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import { isVirtualScrollItemRegisterParamEqual } from "../functions/is-virtual-scroll-item-register-param-equal.function";
import type { VirtualScrollItemId } from "../types/virtual-scroll-item-id.type";
import type { VirtualScrollItemIndex } from "../types/virtual-scroll-item-index.type";
import type { VirtualScrollItemRegisterParam } from "../types/virtual-scroll-item-register.type";
import type { VirtualScrollItemSize } from "../types/virtual-scroll-item-size.type";

import { useVirtualScrollItemRegisterCallbacksContext } from "./virtual-scroll-item-register-callbacks-context.hook";
import { useVirtualScrollConfigContext } from "./virtual-scroll-config-context.hook";

/**
 * Uses {@link useVirtualScrollItemRegisterContext} to register this item with the virtual scroll
 * @param id
 * @param size
 * @param index
 */
export function useVirtualScrollItemRegisterEffect(
	id: VirtualScrollItemId,
	size: VirtualScrollItemSize | undefined,
	index: VirtualScrollItemIndex
): void {

	const config = useVirtualScrollConfigContext();
	const itemRegisterCallbacks = useVirtualScrollItemRegisterCallbacksContext();

	// Item regoster parameter
	const resolveItemRegisterParam = useCallback<Callback<VirtualScrollItemRegisterParam>>(
		() => ({
			id: id,
			size: (size ?? config.itemSize),
			index: index
		}),
		[id, size, index, config.itemSize]
	);
	const itemRegisterParam = useResolveState(resolveItemRegisterParam, isVirtualScrollItemRegisterParamEqual)

	// Register item
	useEffect(
		() => {
			itemRegisterCallbacks.itemRegister(itemRegisterParam);

			return () => {
				itemRegisterCallbacks.itemUnregister(itemRegisterParam);
			}
		},
		[itemRegisterCallbacks, itemRegisterParam]
	);
};

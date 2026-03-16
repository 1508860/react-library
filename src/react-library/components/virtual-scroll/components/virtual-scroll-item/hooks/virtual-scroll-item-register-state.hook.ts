import { useEffect, useRef, useState } from "react";

import { useVirtualScrollItemSizeDefaultContext } from "../../../hooks/virtual-scroll-item-size-default-context.hook";
import { useVirtualScrollItemRegisterContext } from "../../../hooks/virtual-scroll-item-register-context.hook";
import { useVirtualScrollItemUnregisterContext } from "../../../hooks/virtual-scroll-item-unregister-context.hook";
import type { VirtualScrollItemId } from "../../../types/virtual-scroll-item-id.type";
import type { VirtualScrollItemSize } from "../../../types/virtual-scroll-item-size.type";
import type { VirtualScrollItemSortOrder } from "../../../types/virtual-scroll-item-sort-order.type";

import type { VirtualScrollItemRegisterState } from "../types/virtual-scroll-item-register-state.type";

/**
 * Resolves {@link VirtualScrollItemSize} based on custom value passed in and default value
 * Also uses {@link useVirtualScrollItemRegisterContext} to register this item with the virtual scroll
 * @param id
 * @param size
 * @param sortOrder
 */
export function useVirtualScrollItemRegisterState(
	id: VirtualScrollItemId,
	size: VirtualScrollItemSize | undefined,
	sortOrder: VirtualScrollItemSortOrder
): [VirtualScrollItemRegisterState] {

	const virtualScrollItemSizeDefault = useVirtualScrollItemSizeDefaultContext();
	const virtualScrollItemRegister = useVirtualScrollItemRegisterContext();
	const virtualScrollItemUnregister = useVirtualScrollItemUnregisterContext();


	const idRef = useRef<VirtualScrollItemId>(id);
	const sizeRef = useRef<VirtualScrollItemSize>(size ?? virtualScrollItemSizeDefault);
	const [state, setState] = useState<VirtualScrollItemRegisterState>(() => ({ size: sizeRef.current }));

	// Register item
	useEffect(
		() => {
			const newState = (size ?? virtualScrollItemSizeDefault);
			if (idRef.current === id && sizeRef.current === newState) return;
			idRef.current = id;
			sizeRef.current = newState;
			virtualScrollItemRegister({
				id: id,
				size: newState,
				sortOrder: sortOrder
			});
			setState({
				size: newState
			});

			return () => {
				virtualScrollItemUnregister({
					id: id
				});
			}
		},
		[id, size, sortOrder, virtualScrollItemSizeDefault, virtualScrollItemRegister, virtualScrollItemUnregister]
	);

	return [state];
};

import { useEffect, useRef, useState } from "react";

import { useVirtualScrollItemSizeDefaultContext } from "../../../hooks/virtual-scroll-item-size-default-context.hook";
import { useVirtualScrollItemRegisterContext } from "../../../hooks/virtual-scroll-item-register-context.hook";
import { useVirtualScrollItemUnregisterContext } from "../../../hooks/virtual-scroll-item-unregister-context.hook";
import type { VirtualScrollItemId } from "../../../types/virtual-scroll-item-id.type";
import type { VirtualScrollItemIndex } from "../../../types/virtual-scroll-item-index.type";
import type { VirtualScrollItemSize } from "../../../types/virtual-scroll-item-size.type";

import type { VirtualScrollItemRegisterState } from "../types/virtual-scroll-item-register-state.type";

/**
 * Resolves {@link VirtualScrollItemSize} based on custom value passed in and default value
 * Also uses {@link useVirtualScrollItemRegisterContext} to register this item with the virtual scroll
 * @param id
 * @param size
 * @param index
 */
export function useVirtualScrollItemRegisterState(
	id: VirtualScrollItemId,
	size: VirtualScrollItemSize | undefined,
	index: VirtualScrollItemIndex
): VirtualScrollItemRegisterState {

	const virtualScrollItemSizeDefault = useVirtualScrollItemSizeDefaultContext();
	const virtualScrollItemRegister = useVirtualScrollItemRegisterContext();
	const virtualScrollItemUnregister = useVirtualScrollItemUnregisterContext();

	const isRegisteredRef = useRef<boolean>(false);
	const idRef = useRef<VirtualScrollItemId>(id);
	const sizeRef = useRef<VirtualScrollItemSize>(size ?? virtualScrollItemSizeDefault);
	const indexRef = useRef<VirtualScrollItemIndex>(index);
	const [state, setState] = useState<VirtualScrollItemRegisterState>(() => ({ size: sizeRef.current }));

	// Register item
	useEffect(
		() => {
			const newState = (size ?? virtualScrollItemSizeDefault);

			if (!isRegisteredRef.current) {
				isRegisteredRef.current = true;
			}
			else if (idRef.current === id && sizeRef.current === newState && indexRef.current === index) return;

			idRef.current = id;
			sizeRef.current = newState;
			indexRef.current = index;

			virtualScrollItemRegister({ id: id, size: newState, index: index });
			setState({ size: newState });

			return () => {
				virtualScrollItemUnregister({ id: id });
				isRegisteredRef.current = false;
			}
		},
		[id, size, index, virtualScrollItemSizeDefault, virtualScrollItemRegister, virtualScrollItemUnregister]
	);

	return state;
};

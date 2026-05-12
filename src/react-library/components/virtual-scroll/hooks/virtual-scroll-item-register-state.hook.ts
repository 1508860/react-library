import { useCallback, useRef, useState } from "react";

import { useResolveState, type Callback } from "@react-library/common";

import type { VirtualScrollItemId } from "../types/virtual-scroll-item-id.type";
import type {
	VirtualScrollItemMap,
	VirtualScrollItemMapValue
} from "../types/virtual-scroll-item-map.type";
import type { VirtualScrollItemRegisterState } from "../types/virtual-scroll-item-register-state.type";
import type {
	VirtualScrollItemRegister,
	VirtualScrollItemUnregister,
	VirtualScrollItemRegisterCallbacks
} from "../types/virtual-scroll-item-register.type";


/**
 * Resolves the props used for contexts to handle registering virtual scroll items
 */
export function useVirtualScrollItemRegisterState(): VirtualScrollItemRegisterState {

	const [items, setItems] = useState<VirtualScrollItemMap>(() => new Map<VirtualScrollItemId, VirtualScrollItemMapValue>());
	const itemsRef = useRef<VirtualScrollItemMap>(items);

	// Register each item
	const itemRegister = useCallback<VirtualScrollItemRegister>(
		(param) => {
			itemsRef.current.set(
				param.id,
				{
					index: param.index,
					size: param.size
				}
			)
			setItems(new Map(itemsRef.current));
		},
		[]
	);

	// Unregister each item
	const itemUnregister = useCallback<VirtualScrollItemUnregister>(
		(param) => {
			itemsRef.current.delete(param.id);
			setItems(new Map(itemsRef.current));
		},
		[]
	);

	// Callbacks
	const resolveRegisterCallbacks = useCallback<Callback<VirtualScrollItemRegisterCallbacks>>(
		() => ({
			itemRegister: itemRegister,
			itemUnregister: itemUnregister
		}),
		[itemRegister, itemUnregister]
	);
	const registerCallbacks = useResolveState(resolveRegisterCallbacks);

	return {
		itemRegister: registerCallbacks,
		items: items
	};
};

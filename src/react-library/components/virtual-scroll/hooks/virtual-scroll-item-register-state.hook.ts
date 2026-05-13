import { useCallback, useEffect, useRef, useState } from "react";

import {
	generateGuid,
	useResolveState,
	VirtualScrollError,
	type Callback,
	type Guid
} from "@react-library/common";

import type { VirtualScrollItemId } from "../types/virtual-scroll-item-id.type";
import type {
	VirtualScrollItemMap,
	VirtualScrollItemMapValue
} from "../types/virtual-scroll-item-map.type";
import type { VirtualScrollItemRegisterState } from "../types/virtual-scroll-item-register-state.type";
import type { VirtualScrollItemRegisterCallbacks } from "../types/virtual-scroll-item-register.type";

import { useVirtualScrollItemCountContext } from "./virtual-scroll-item-count-context.hook";

/**
 * Resolves the props used for contexts to handle registering virtual scroll items
 */
export function useVirtualScrollItemRegisterState(): VirtualScrollItemRegisterState {

	// Local contexts
	const itemCount = useVirtualScrollItemCountContext();

	const [renderId, setRenderId] = useState<Guid>(() => generateGuid());

	const [items, setItems] = useState<VirtualScrollItemMap>(() => new Map<VirtualScrollItemId, VirtualScrollItemMapValue>());
	const itemsRef = useRef<VirtualScrollItemMap>(new Map<VirtualScrollItemId, VirtualScrollItemMapValue>());

	// Trigger state update if map matches item count
	useEffect(
		() => {
			if (itemsRef.current.size < itemCount) {
				setItems((prev) => prev.size === 0 ? prev : new Map<VirtualScrollItemId, VirtualScrollItemMapValue>());
				return;
			} else if (itemsRef.current.size > itemCount) {
				throw new VirtualScrollError();
			}
			setItems(new Map<VirtualScrollItemId, VirtualScrollItemMapValue>(itemsRef.current));
		},
		[itemCount, renderId]
	);

	// Register / unregister each item
	const [itemRegister] = useState<VirtualScrollItemRegisterCallbacks>(
		() => ({
			itemRegister: (param) => {
				itemsRef.current.set(
					param.id,
					{
						index: param.index,
						size: param.size
					}
				);
				setRenderId(generateGuid());
			},
			itemUnregister: (param) => {
				itemsRef.current.delete(param.id);
				setRenderId(generateGuid());
			}
		})
	);

	// Resolve state
	const resolveState = useCallback<Callback<VirtualScrollItemRegisterState>>(
		() => ({
			itemRegister: itemRegister,
			items: items
		}),
		[items, itemRegister]
	);
	const state = useResolveState(resolveState);

	return state;
};

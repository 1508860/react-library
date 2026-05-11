import { useCallback, useEffect, useRef, useState } from "react";

import {
	generateGuid,
	useResolveState,
	type Callback,
	type Guid
} from "@react-library/common";

import type { VirtualScrollElementsInView } from "../types/virtual-scroll-elements-in-view.type";
import type { VirtualScrollItemElementsState } from "../types/virtual-scroll-elements-state.type";
import type { VirtualScrollItemChildResult } from "../types/virtual-scroll-item-child.type";
import type { VirtualScrollItemId } from "../types/virtual-scroll-item-id.type";
import type {
	VirtualScrollItemRegisterElement,
	VirtualScrollItemUnregisterElement,
	VirtualScrollItemRegisterElementCallbacks
} from "../types/virtual-scroll-item-register-element.type";

/**
 * Resolves item element state for virtual scroll and resolves item elements in the view to be rendered
 */
export function useVirtualScrollItemElementsState(): VirtualScrollItemElementsState {

	const [renderId, setRenderId] = useState<Guid>(() => generateGuid());

	const [elementsInView, setElementMap] = useState<VirtualScrollElementsInView>(() => new Map<VirtualScrollItemId, VirtualScrollItemChildResult>());

	// Handle register of all items
	const elementMapRef = useRef<VirtualScrollElementsInView>(new Map<VirtualScrollItemId, VirtualScrollItemChildResult>());

	// Register each item
	const itemRegister = useCallback<VirtualScrollItemRegisterElement>(
		(param) => {
			elementMapRef.current.set(param.id, param.element);
			setRenderId(generateGuid());
		},
		[]
	);

	// Unregister each item
	const itemUnregister = useCallback<VirtualScrollItemUnregisterElement>(
		(param) => {
			elementMapRef.current.delete(param.id);
			setRenderId(generateGuid());
		},
		[]
	);

	// Callbacks
	const resolveRegisterCallbacks = useCallback<Callback<VirtualScrollItemRegisterElementCallbacks>>(
		() => ({
			itemRegister: itemRegister,
			itemUnregister: itemUnregister
		}),
		[itemRegister, itemUnregister]
	);
	const registerCallbacks = useResolveState(resolveRegisterCallbacks);

	// Handle render of items
	useEffect(() => setElementMap(elementMapRef.current), [renderId]);

	return {
		elementsInView: elementsInView,
		itemRegister: registerCallbacks
	};
};

import { useEffect, useRef, useState } from "react";

import { generateGuid, type Guid } from "@react-library/common";

import type { VirtualScrollElementsInView } from "../types/virtual-scroll-elements-in-view.type";
import type { VirtualScrollItemElementsState } from "../types/virtual-scroll-elements-state.type";
import type { VirtualScrollItemChildResult } from "../types/virtual-scroll-item-child.type";
import type { VirtualScrollItemId } from "../types/virtual-scroll-item-id.type";
import type { VirtualScrollItemRegisterElementCallbacks } from "../types/virtual-scroll-item-register-element.type";

/**
 * Resolves item element state for virtual scroll and resolves item elements in the view to be rendered
 */
export function useVirtualScrollItemElementsState(): VirtualScrollItemElementsState {

	const [renderId, setRenderId] = useState<Guid>(() => generateGuid());

	const [elementsInView, setElementsInView] = useState<VirtualScrollElementsInView>(() => new Map<VirtualScrollItemId, VirtualScrollItemChildResult>());

	// Handle register of all items
	const elementsInViewRef = useRef<VirtualScrollElementsInView>(new Map<VirtualScrollItemId, VirtualScrollItemChildResult>());

	// Register / unregister each item
	const [itemRegister] = useState<VirtualScrollItemRegisterElementCallbacks>(
		() => ({
			itemRegister: (param) => {
				elementsInViewRef.current.set(param.id, param.element);
				setRenderId(generateGuid());
			},
			itemUnregister: (param) => {
				elementsInViewRef.current.delete(param.id);
				setRenderId(generateGuid());
			}
		})
	);

	// Handle render of items
	useEffect(() => setElementsInView(elementsInViewRef.current), [renderId]);

	return {
		elementsInView: elementsInView,
		itemRegister: itemRegister
	};
};

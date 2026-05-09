import { useEffect, useRef, useState } from "react";

import { useVirtualScrollItemsInViewContext } from "../../../hooks/virtual-scroll-items-in-view-context.hook";
import type { VirtualScrollItemId } from "../../../types/virtual-scroll-item-id.type";

/**
 * Resolves if an item with a given {@link VirtualScrollItemId} is in the view to be rendered
 * @param id
 */
export function useVirtualScrollItemIsInViewState(id: VirtualScrollItemId): boolean {

	const virtualScrollItemsInView = useVirtualScrollItemsInViewContext();

	const [state, setState] = useState<boolean>(() => virtualScrollItemsInView.has(id));
	const stateRef = useRef<boolean>(state);

	useEffect(
		() => {
			const newIsInViewState: boolean = virtualScrollItemsInView.has(id);
			if (stateRef.current === newIsInViewState) return;
			stateRef.current = newIsInViewState;
			setState(newIsInViewState);
		},
		[id, virtualScrollItemsInView]
	);

	return state;
};

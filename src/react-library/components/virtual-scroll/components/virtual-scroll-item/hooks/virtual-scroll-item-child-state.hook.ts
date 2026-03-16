import { useEffect, useRef, useState } from "react";

import { useVirtualScrollItemsInViewContext } from "../../../hooks/virtual-scroll-items-in-view-context.hook";
import type { VirtualScrollItemChild } from "../../../types/virtual-scroll-item-child.type";
import type { VirtualScrollItemId } from "../../../types/virtual-scroll-item-id.type";

/**
 * Resolves if an item with a given {@link VirtualScrollItemId} is in the view to be rendered and return the appropriate react component if so
 * @param id
 * @param child
 */
export function useVirtualScrollItemChildState(id: VirtualScrollItemId, child: VirtualScrollItemChild): [VirtualScrollItemChild | undefined] {

	const virtualScrollItemsInView = useVirtualScrollItemsInViewContext();

	const isInViewRef = useRef<boolean>(virtualScrollItemsInView.has(id));
	const [state, setState] = useState<VirtualScrollItemChild | undefined>(() => (isInViewRef.current ? child : undefined));

	useEffect(
		() => {
			const newIsInViewState: boolean = virtualScrollItemsInView.has(id);
			if (isInViewRef.current === newIsInViewState) return;
			isInViewRef.current = newIsInViewState;
			setState(newIsInViewState ? child : undefined);
		},
		[id, child, virtualScrollItemsInView]
	);

	return [state];
};

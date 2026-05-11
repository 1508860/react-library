import { useEffect } from "react";

import type {
	VirtualScrollItemChild,
	VirtualScrollItemChildProps
} from "../types/virtual-scroll-item-child.type";
import type { VirtualScrollItemId } from "../types/virtual-scroll-item-id.type";

import { useVirtualScrollItemRegisterElementCallbacksContext } from "./virtual-scroll-item-register-element-callbacks-context.hook";

/**
 * Uses {@link useVirtualScrollItemRegisterContext} to register this item with the virtual scroll
 * @param id
 * @param size
 * @param index
 */
export function useVirtualScrollItemRegisterElementEffect<TChildProps extends VirtualScrollItemChildProps>(
	id: VirtualScrollItemId,
	child: VirtualScrollItemChild<TChildProps>,
	childProps: TChildProps
): void {

	const virtualScrollItemRegisterElementCallbacks = useVirtualScrollItemRegisterElementCallbacksContext();

	// Register item
	useEffect(
		() => {
			const Child = child;

			virtualScrollItemRegisterElementCallbacks.itemRegister({
				element: <Child {...childProps} />,
				id: id
			});

			return () => {
				virtualScrollItemRegisterElementCallbacks.itemUnregister({ id: id });
			}
		},
		[id, child, childProps, virtualScrollItemRegisterElementCallbacks]
	);
};

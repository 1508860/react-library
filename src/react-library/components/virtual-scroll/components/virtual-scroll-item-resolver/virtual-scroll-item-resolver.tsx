import { useVirtualScrollItemsInViewContext } from "../../hooks/virtual-scroll-items-in-view-context.hook";

import { VirtualScrollItemRender } from "../virtual-scroll-item-render";

/**
 * Virtual scroll item resolver component
 * Handles rendering each registered item for the virtual scroll
 * @param props
 */
export function VirtualScrollItemResolver() {

	const itemsInView = useVirtualScrollItemsInViewContext();

	return (
		itemsInView.map(item => (
			<VirtualScrollItemRender
				id={item}
				key={item}
			/>
		))
	);
}

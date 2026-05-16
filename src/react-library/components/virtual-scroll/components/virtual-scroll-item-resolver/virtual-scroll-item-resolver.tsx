import { useVirtualScrollConfigContext } from "../../hooks/virtual-scroll-config-context.hook";
import { useVirtualScrollItemsInViewContext } from "../../hooks/virtual-scroll-items-in-view-context.hook";

import { VirtualScrollItemRender } from "../virtual-scroll-item-render";

/**
 * Virtual scroll item resolver component
 * Handles rendering each registered item for the virtual scroll
 * @param props
 */
export function VirtualScrollItemResolver<TChildProps>() {

	const config = useVirtualScrollConfigContext();
	const itemsInView = useVirtualScrollItemsInViewContext<TChildProps>();

	return (
		itemsInView.map(item => (
			<VirtualScrollItemRender<TChildProps>
				item={item}
				itemSize={config.itemSize}
				key={item.id}
			/>
		))
	);
}

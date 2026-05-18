import { useVirtualScrollConfigContext } from "../../hooks/virtual-scroll-config-context.hook";
import { useVirtualScrollItemsInViewContext } from "../../hooks/virtual-scroll-items-in-view-context.hook";

import { VirtualScrollItemRender } from "../virtual-scroll-item-render";

import type { VirtualScrollItemResolverProps } from "./types/virtual-scroll-item-resolver-props.type";

/**
 * Virtual scroll item resolver component
 * Handles rendering each registered item for the virtual scroll
 * @param props
 */
export function VirtualScrollItemResolver<TChildProps>(props: VirtualScrollItemResolverProps<TChildProps>) {

	const config = useVirtualScrollConfigContext();
	const itemsInView = useVirtualScrollItemsInViewContext<TChildProps>();

	return (
		itemsInView.map(item => (
			<VirtualScrollItemRender<TChildProps>
				isEqual={props.isEqual}
				item={item}
				itemSize={config.itemSize}
				key={item.id}
			/>
		))
	);
}

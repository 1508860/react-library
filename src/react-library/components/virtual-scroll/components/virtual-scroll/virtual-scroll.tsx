import { VirtualScrollContent } from "../virtual-scroll-content";
import { VirtualScrollItemResolver } from "../virtual-scroll-item-resolver";
import { VirtualScrollConfigProvider } from "../virtual-scroll-items-config-provider";
import { VirtualScrollItemsInViewProvider } from "../virtual-scroll-items-in-view-provider";

import type { VirtualScrollProps } from "./types/virtual-scroll-props.type";

/**
 * Virtual scroll component
 * Wraps virtual scroll items and handles which items to render
 * @param props
 */
export function VirtualScroll<TChildProps>(props: VirtualScrollProps<TChildProps>) {
	return (
		<VirtualScrollConfigProvider {...props}>
			<VirtualScrollItemsInViewProvider<TChildProps> {...props}>
				<props.scrollElement key="scroll">
					<VirtualScrollContent>
						<VirtualScrollItemResolver<TChildProps> {...props} />
					</VirtualScrollContent>
				</props.scrollElement>
			</VirtualScrollItemsInViewProvider>
		</VirtualScrollConfigProvider>
	);
}

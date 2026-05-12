import { VirtualScrollContent } from "../virtual-scroll-content";
import { VirtualScrollElementsProvider } from "../virtual-scroll-elements-provider";
import { VirtualScrollItemResolver } from "../virtual-scroll-item-resolver";
import { VirtualScrollConfigProvider } from "../virtual-scroll-items-config-provider";
import { VirtualScrollItemsProvider } from "../virtual-scroll-items-provider";
import { VirtualScrollProvider } from "../virtual-scroll-provider";

import type { VirtualScrollProps } from "./types/virtual-scroll-props.type";

/**
 * Virtual scroll component
 * Wraps virtual scroll items and handles which items to render
 * @param props
 */
export function VirtualScroll(props: VirtualScrollProps) {
	return (
		<VirtualScrollConfigProvider {...props}>
			<VirtualScrollItemsProvider>
				<VirtualScrollProvider>
					<VirtualScrollElementsProvider>
						<props.scrollElement key="scroll">
							<VirtualScrollContent>
								<VirtualScrollItemResolver />
								{props.children}
							</VirtualScrollContent>
						</props.scrollElement>
					</VirtualScrollElementsProvider>
				</VirtualScrollProvider>
			</VirtualScrollItemsProvider>
		</VirtualScrollConfigProvider>
	);
}

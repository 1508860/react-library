import { VirtualScroll, VirtualScrollContent } from "@react-library/components";

import { ScrollVirtual } from "../../shared";

import type { ThemedVirtualScrollProps } from "./types/virtual-scroll-props.type";

/**
 * Themed virtual scroll component
 * Note: Only virtual scroll items are required as children for this component
 */
export function ThemedVirtualScroll(props: ThemedVirtualScrollProps) {
	return (
		<VirtualScroll
			itemBufferCount={props.itemBufferCount}
			itemSize={props.itemSize}
			orientation={props.orientation}
		>
			<ScrollVirtual colour={props.colour}>
				<VirtualScrollContent>
					{props.children}
				</VirtualScrollContent>
			</ScrollVirtual>
		</VirtualScroll>
	);
}

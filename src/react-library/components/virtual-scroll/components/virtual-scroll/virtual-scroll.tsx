import { VirtualScrollElementsProvider } from "../virtual-scroll-elements-provider";
import { VirtualScrollProvider } from "../virtual-scroll-provider";

import type { VirtualScrollProps } from "./types/virtual-scroll-props.type";

/**
 * Virtual scroll component
 * Wraps virtual scroll items and handles which items to render
 * @param props
 */
export function VirtualScroll(props: VirtualScrollProps) {
	return (
		<VirtualScrollProvider {...props}>
			<VirtualScrollElementsProvider>
				{props.children}
			</VirtualScrollElementsProvider>
		</VirtualScrollProvider>
	);
}

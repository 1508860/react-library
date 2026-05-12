
import { VirtualScroll } from "@react-library/components";

import { ThemedVirtualScrollScrollbar } from "./components/virtual-scroll-scrollbar";
import { THEMED_VIRTUAL_SCROLL_COLOUR_CONTEXT } from "./constants/virtual-scroll-colour-context.const";
import type { ThemedVirtualScrollProps } from "./types/virtual-scroll-props.type";

/**
 * Themed virtual scroll component
 */
export function ThemedVirtualScroll(props: ThemedVirtualScrollProps) {

	return (
		<THEMED_VIRTUAL_SCROLL_COLOUR_CONTEXT value={props.colour}>
			<VirtualScroll
				itemBufferCount={props.itemBufferCount}
				itemSize={props.itemSize}
				orientation={props.orientation}
				scrollElement={ThemedVirtualScrollScrollbar}
			>
				{props.children}
			</VirtualScroll>
		</THEMED_VIRTUAL_SCROLL_COLOUR_CONTEXT>
	);
}

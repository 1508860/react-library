
import { VirtualScroll } from "@react-library/components";

import { ThemedVirtualScrollScrollbar } from "./components/virtual-scroll-scrollbar";
import { THEMED_VIRTUAL_SCROLL_COLOUR_CONTEXT } from "./constants/virtual-scroll-colour-context.const";
import type { ThemedVirtualScrollProps } from "./types/virtual-scroll-props.type";

/**
 * Themed virtual scroll component
 */
export function ThemedVirtualScroll<TChildProps>(props: ThemedVirtualScrollProps<TChildProps>) {

	return (
		<THEMED_VIRTUAL_SCROLL_COLOUR_CONTEXT value={props.colour}>
			<VirtualScroll
				contentWidth={props.contentWidth}
				isEqual={props.isEqual}
				itemBufferCount={props.itemBufferCount}
				items={props.items}
				itemSize={props.itemSize}
				orientation={props.orientation}
				scrollElement={ThemedVirtualScrollScrollbar}
			/>
		</THEMED_VIRTUAL_SCROLL_COLOUR_CONTEXT>
	);
}




import { tabsItemContentStyle } from "./styles/tabs-item-content-style.function";
import type { TabsItemContentProps } from "./types/tabs-item-content-props.type";

/**
 * Component to handle a tabs item content
 * @param props
 */
export function TabsItemContent(props: TabsItemContentProps) {
	return (
		<div style={tabsItemContentStyle(props.itemOrientation, props.style)}>
			{props.children}
		</div>
	);
}

import { NavigationBarContent } from "./components/content";
import { NavigationBarItemCollection } from "./components/item-collection";
import { NAVIGATION_BAR_CONTAINER_STYLE } from "./styles/navigation-bar-container-style.const";
import type { NavigationBarProps } from "./types/navigation-bar-props.type";

/**
 * Component to handle a navigation bar
 * @param props
 */
export function NavigationBar(props: NavigationBarProps) {
	return (
		<div style={NAVIGATION_BAR_CONTAINER_STYLE}>
			<NavigationBarContent
				key="content"
			>
				{props.children}
			</NavigationBarContent>
			<NavigationBarItemCollection
				activeItemId={props.itemId}
				itemOrientation={props.itemOrientation}
				items={props.items}
				key="item-collection"
				onItemChange={props.onItemChange}
			/>
		</div>
	);
}

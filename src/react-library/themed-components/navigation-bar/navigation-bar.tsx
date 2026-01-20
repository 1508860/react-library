import { NavigationBarContent } from "./components/content";
import { NavigationBarItemCollection } from "./components/item-collection";
import { NAVIGATION_BAR_CONTAINER_STYLE } from "./styles/navigation-bar-container-style.const";
import type { NavigationBarItemId } from "./types/navigation-bar-item-id.type";
import type { NavigationBarProps } from "./types/navigation-bar-props.type";

/**
 * Component to handle a navigation bar
 * @param props
 */
export function NavigationBar<TItemId extends NavigationBarItemId>(props: NavigationBarProps<TItemId>) {
	return (
		<div style={NAVIGATION_BAR_CONTAINER_STYLE}>
			<NavigationBarContent
				activeItemId={props.itemId}
				key="content"
			>
				{props.children}
			</NavigationBarContent>
			<NavigationBarItemCollection
				activeItemId={props.itemId}
				itemOnChange={props.itemOnChange}
				itemOrientation={props.itemOrientation}
				key="item-collection"
			>
				{props.children}
			</NavigationBarItemCollection>
		</div>
	);
}

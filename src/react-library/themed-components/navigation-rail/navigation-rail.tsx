import { NavigationRailContent } from "./components/content";
import { NavigationRailImmersiveMenu } from "./components/immersive-menu";
import { NavigationRailMenu } from "./components/menu";
import { NAVIGATION_RAIL_CONTAINER_STYLE } from "./styles/navigation-rail-container-style.const";
import type { NavigationRailItemId } from "./types/navigation-rail-item-id.type";
import type { NavigationRailProps } from "./types/navigation-rail-props.type";

/**
 * Component to handle a navigation rail
 * @param props
 */
export function NavigationRail<TItemId extends NavigationRailItemId>(props: NavigationRailProps<TItemId>) {
	return (
		<div style={NAVIGATION_RAIL_CONTAINER_STYLE}>
			<NavigationRailImmersiveMenu
				expandedMenuWidth={props.expandedMenuWidth}
				expandedOnChange={props.expandedOnChange}
				isExpanded={props.isExpanded}
				key="immersive-menu"
				menuStyle={props.menuStyle}
				navigationHeaderChildren={props.navigationHeaderChildren}
			/>
			<NavigationRailMenu
				activeItemId={props.activeItemId}
				centerItems={props.centerItems}
				expandedMenuWidth={props.expandedMenuWidth}
				expandedOnChange={props.expandedOnChange}
				isExpanded={props.isExpanded}
				itemOnChange={props.itemOnChange}
				key="menu"
				menuStyle={props.menuStyle}
				navigationHeaderChildren={props.navigationHeaderChildren}
			>
				{props.children}
			</ NavigationRailMenu>
			<NavigationRailContent
				activeItemId={props.activeItemId}
				expandedOnChange={props.expandedOnChange}
				isExpanded={props.isExpanded}
				key="content"
				menuStyle={props.menuStyle}
			>
				{props.children}
			</NavigationRailContent>
		</div>
	);
}

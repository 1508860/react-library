import { NavigationRailContent } from "./components/content";
import { NavigationRailImmersiveMenu } from "./components/immersive-menu";
import { NavigationRailMenu } from "./components/menu";
import { NAVIGATION_RAIL_CONTAINER_STYLE } from "./styles/navigation-rail-container-style.const";
import type { NavigationRailProps } from "./types/navigation-rail-props.type";

/**
 * Component to handle a navigation rail
 * @param props
 */
export function NavigationRail(props: NavigationRailProps) {
	return (
		<div style={NAVIGATION_RAIL_CONTAINER_STYLE}>
			<NavigationRailImmersiveMenu
				isExpanded={props.isExpanded}
				key="immersive-menu"
				menuStyle={props.menuStyle}
				navigationHeaderChildren={props.navigationHeaderChildren}
				onExpandedChange={props.onExpandedChange}
			/>
			<NavigationRailMenu
				activeItemId={props.activeItemId}
				centerItems={props.centerItems}
				expandedMenuWidth={props.expandedMenuWidth}
				isExpanded={props.isExpanded}
				items={props.items}
				key="menu"
				menuStyle={props.menuStyle}
				navigationHeaderChildren={props.navigationHeaderChildren}
				onExpandedChange={props.onExpandedChange}
				onItemChange={props.onItemChange}
			>
			</ NavigationRailMenu>
			<NavigationRailContent
				isExpanded={props.isExpanded}
				key="content"
				menuStyle={props.menuStyle}
				onExpandedChange={props.onExpandedChange}
			>
				{props.children}
			</NavigationRailContent>
		</div>
	);
}

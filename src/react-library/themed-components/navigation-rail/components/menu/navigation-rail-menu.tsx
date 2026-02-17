import { useColourSchemeContext } from "@react-library/common";

import type { NavigationRailItemId } from "../../types/navigation-rail-item-id.type";
import { NavigationRailHeaderContainer } from "../header-container";
import { NavigationRailItemCollection } from "../item-collection";
import { NavigationRailMenuIcon } from "../menu-icon";
import { navigationRailMenuContainerStyle } from "./styles/navigation-rail-menu-container-style.function";
import { NAVIGATION_RAIL_MENU_STYLE } from "./styles/navigation-rail-menu-style.const";
import type { NavigationRailMenuProps } from "./types/navigation-rail-menu-props.type";

/**
 * Component to handle a navigation rail menu
 * @param props
 */
export function NavigationRailMenu<TItemId extends NavigationRailItemId>(props: NavigationRailMenuProps<TItemId>) {

	const colourScheme = useColourSchemeContext();

	return (
		<div
			style={navigationRailMenuContainerStyle(props.expandedMenuWidth, props.isExpanded, props.menuStyle, colourScheme)}
		>
			<div style={NAVIGATION_RAIL_MENU_STYLE}>

				<NavigationRailHeaderContainer key="header-container">
					{props.navigationHeaderChildren}
				</NavigationRailHeaderContainer>
				<NavigationRailMenuIcon
					expandedMenuWidth={props.expandedMenuWidth}
					isExpanded={props.isExpanded}
					key="menu-icon"
					menuStyle={props.menuStyle}
					onChange={props.onExpandedChange}
				/>
				<NavigationRailItemCollection
					activeItemId={props.activeItemId}
					centerItems={props.centerItems}
					isExpanded={props.isExpanded}
					key="item-collection"
					menuStyle={props.menuStyle}
					onItemChange={props.onItemChange}
				>
					{props.children}
				</NavigationRailItemCollection>
			</div>
		</div>
	);
}

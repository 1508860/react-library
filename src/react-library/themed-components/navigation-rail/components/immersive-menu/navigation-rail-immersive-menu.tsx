import { Fragment } from "react";

import { NavigationRailMenuStyle } from "../../enums/navigation-rail-menu-style.type";
import { NavigationRailHeaderContainer } from "../header-container";
import { NavigationRailMenuIcon } from "../menu-icon";
import { NAVIGATION_RAIL_IMMERSIVE_MENU_STYLE } from "./styles/navigation-rail-immersive-menu-style.const";
import type { NavigationRailImmersiveMenuProps } from "./types/navigation-rail-immersive-menu-props.type";

/**
 * Component to handle a navigation rail immersive menu
 * @param props
 */
export function NavigationRailImmersiveMenu(props: NavigationRailImmersiveMenuProps) {
	return (
		(
			props.menuStyle === NavigationRailMenuStyle.ImmersiveModal ||
			props.menuStyle === NavigationRailMenuStyle.ImmersiveStandard
		) ?
			<div
				key="menu-icon-immersive"
				style={NAVIGATION_RAIL_IMMERSIVE_MENU_STYLE}
			>
				<NavigationRailHeaderContainer key="header-container">
					{props.navigationHeaderChildren}
				</NavigationRailHeaderContainer>
				<NavigationRailMenuIcon
					isExpanded={props.isExpanded}
					key="menu-icon"
					onChange={props.onExpandedChange}
				/>
			</div>
			: <Fragment key="no-menu-icon-immersive" />
	);
}

import { Fragment } from "react";

import { NAVIGATION_RAIL_HEADER_CONTAINER_MENU_STYLE } from "./styles/navigation-rail-header-container-style.const";
import type { NavigationRailHeaderContainerProps } from "./types/navigation-rail-header-container-props.type";

/**
 * Component to handle a navigation rail header container
 * @param props
 */
export function NavigationRailHeaderContainer(props: NavigationRailHeaderContainerProps) {
	return (
		props.children ?
			<div
				key="menu-icon-header-container"
				style={NAVIGATION_RAIL_HEADER_CONTAINER_MENU_STYLE}
			>
				{props.children}
			</div> :
			<Fragment key="no-menu-icon-header-container" />
	);
}

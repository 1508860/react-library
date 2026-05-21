import { Fragment } from "react";

import { useColourSchemeContext } from "@react-library/common";

import { Backdrop } from "../../../shared";

import { NAVIGATION_RAIL_PROPERTY_MAP } from "../../constants/navigation-rail-property-map.const";
import { NavigationRailMenuStyle } from "../../enums/navigation-rail-menu-style.type";

import { navigationRailContentStyle } from "./styles/navigation-rail-content-style.function";
import type { NavigationRailContentProps } from "./types/navigation-rail-content-props.type";

/**
 * Component to handle a navigation rail content
 * @param props
 */
export function NavigationRailContent(props: NavigationRailContentProps) {

	const colourScheme = useColourSchemeContext();

	return (
		<div style={navigationRailContentStyle(colourScheme)}>
			{props.children}
			{
				(props.menuStyle !== NavigationRailMenuStyle.ImmersiveModal) ?
					<Fragment key="no-backdrop" /> :
					<Backdrop
						isAbsolute={true}
						key="backdrop"
						onClick={() => props.onExpandedChange(false)}
						show={props.isExpanded}
						transitionDurationMs={NAVIGATION_RAIL_PROPERTY_MAP.menuTransitionDurationMs}
					/>
			}
		</div>
	);
}

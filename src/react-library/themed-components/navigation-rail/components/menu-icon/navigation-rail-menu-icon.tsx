import { useCallback } from "react";

import { useColourSchemeContext } from "@react-library/common";
import { TransitionRotate, TransitionTiming } from "@react-library/components";
import { MaterialIconName } from "@react-library/material-icons";

import { IconClick } from "../../../shared";

import { NAVIGATION_RAIL_PROPERTY_MAP } from "../../constants/navigation-rail-property-map.const";
import type { NavigationRailMenuIconProps } from "./types/navigation-rail-menu-icon-props-props.type";
import { NAVIGATION_RAIL_MENU_ICON_CONTAINER_STYLE } from "./styles/navigation-rail-menu-icon-container-style.const";

/**
 * Component to handle a navigation rail menu icon
 * @param props
 */
export function NavigationRailMenuIcon(props: NavigationRailMenuIconProps) {

	const colourScheme = useColourSchemeContext();

	// Handle expanded state
	const handleExpandedOnChange = useCallback(() => props.onChange(!props.isExpanded), [props]);

	return (
		<div style={NAVIGATION_RAIL_MENU_ICON_CONTAINER_STYLE}>
			<TransitionRotate
				durationMs={NAVIGATION_RAIL_PROPERTY_MAP.menuTransitionDurationMs}
				rotate={NAVIGATION_RAIL_PROPERTY_MAP.expanded[`${props.isExpanded}`].menuIconRotate}
				timing={TransitionTiming.OvershootInOut}
			>
				<IconClick
					colour={props.isExpanded ? colourScheme.secondary.container.onColour : colourScheme.surface.variant.onColour}
					name={props.isExpanded ? MaterialIconName.MenuOpen : MaterialIconName.Menu}
					onClick={handleExpandedOnChange}
					padding={NAVIGATION_RAIL_PROPERTY_MAP.menuIconPadding}
					size={NAVIGATION_RAIL_PROPERTY_MAP.menuIconSize}
				/>
			</TransitionRotate>
		</div>
	);
}

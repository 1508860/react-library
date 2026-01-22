import { useCallback, useState } from "react";

import { useColourSchemeContext } from "@react-library/common";
import { MaterialIconSvg, MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import { NAVIGATION_RAIL_PROPERTY_MAP } from "../../constants/navigation-rail-property-map.const";
import { navigationRailMenuIconContainerStyle } from "./styles/navigation-rail-menu-icon-container-style.function";
import type { NavigationRailMenuIconProps } from "./types/navigation-rail-menu-icon-props-props.type";

/**
 * Component to handle a navigation rail menu icon
 * @param props
 */
export function NavigationRailMenuIcon(props: NavigationRailMenuIconProps) {

	const colourScheme = useColourSchemeContext();

	// Handle expanded state
	const handleExpandedOnChange = useCallback(() => props.onChange(!props.isExpanded), [props]);

	// Handle hovered state
	const [isHovered, setIsHovered] = useState<boolean>(() => false);
	const handlePointerEnter = useCallback(() => setIsHovered(true), []);
	const handleOnPointerLeave = useCallback(() => setIsHovered(false), []);

	return (
		<div
			onClick={handleExpandedOnChange}
			onPointerEnter={handlePointerEnter}
			onPointerLeave={handleOnPointerLeave}
			style={navigationRailMenuIconContainerStyle(props.expandedMenuWidth, props.isExpanded, props.menuStyle, isHovered)}
		>
			<MaterialIconSvg
				colour={props.isExpanded ? colourScheme.secondary.container.onColour : colourScheme.surface.variant.onColour}
				name={props.isExpanded ? MaterialIconName.MenuOpen : MaterialIconName.Menu}
				size={NAVIGATION_RAIL_PROPERTY_MAP.menuIconSize}
				style={MaterialIconStyle.Default}
			/>
		</div>
	);
}

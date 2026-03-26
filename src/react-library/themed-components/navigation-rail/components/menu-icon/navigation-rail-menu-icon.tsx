import { useCallback, useEffect, useState } from "react";

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
	const handlePointerLeave = useCallback(() => setIsHovered(false), []);

	// Handle pressed state
	const [isPressed, setIsPressed] = useState<boolean>(() => false);
	const handlePointerDown = useCallback(() => setIsPressed(true), []);
	const handlePointerUp = useCallback(() => setIsPressed(false), []);

	// Resolve icon style
	const [iconStyle, setIconStyle] = useState<MaterialIconStyle>(() => MaterialIconStyle.Default);
	useEffect(
		() => {
			if (isPressed) setIconStyle(MaterialIconStyle.DefaultFilled);
			else if (isHovered) setIconStyle(MaterialIconStyle.Thick);
			else setIconStyle(MaterialIconStyle.Default);
		},
		[isHovered, isPressed]
	);

	return (
		<div
			onClick={handleExpandedOnChange}
			onPointerCancel={handlePointerLeave}
			onPointerDown={handlePointerDown}
			onPointerEnter={handlePointerEnter}
			onPointerLeave={handlePointerLeave}
			onPointerUp={handlePointerUp}
			style={navigationRailMenuIconContainerStyle(props.isExpanded, isHovered)}
		>
			<MaterialIconSvg
				colour={props.isExpanded ? colourScheme.secondary.container.onColour : colourScheme.surface.variant.onColour}
				name={props.isExpanded ? MaterialIconName.MenuOpen : MaterialIconName.Menu}
				size={NAVIGATION_RAIL_PROPERTY_MAP.menuIconSize}
				style={iconStyle}
			/>
		</div>
	);
}

import { Fragment, useCallback } from "react";

import { useColourSchemeContext } from "@react-library/common";

import { NavigationRailMenuStyle } from "../../enums/navigation-rail-menu-style.type";
import { navigationRailBackdropStyle } from "./styles/navigation-rail-backdrop-style.function";
import type { NavigationRailBackdropProps } from "./types/navigation-rail-backdrop-props.type";

/**
 * Component to handle a navigation rail backdrop
 * @param props
 */
export function NavigationRailBackdrop(props: NavigationRailBackdropProps) {

	const colourScheme = useColourSchemeContext();

	// Handle expanded state
	const handleExpandedOnChange = useCallback(
		() => {
			// We only want to be able to close the menu
			if (!props.isExpanded) return;
			props.expandedOnChange(false);
		},
		[props]
	);

	return (
		(
			props.menuStyle === NavigationRailMenuStyle.ImmersiveModal &&
			props.isExpanded
		) ?
			<div
				onClick={handleExpandedOnChange}
				key="backdrop"
				style={navigationRailBackdropStyle(colourScheme)}
			/> :
			<Fragment key="no-backdrop" />
	);
}

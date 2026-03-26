import { Fragment, useCallback, useEffect, useState } from "react";

import { useColourSchemeContext, type CallbackWithParameter } from "@react-library/common";
import {
	TransitionFade,
	TransitionFadeDirection,
	TransitionTiming,
	type TransitionFadeOnCompleteParam
} from "@react-library/components";

import { NAVIGATION_RAIL_PROPERTY_MAP } from "../../constants/navigation-rail-property-map.const";
import { NavigationRailMenuStyle } from "../../enums/navigation-rail-menu-style.type";
import { navigationRailBackdropContentStyle } from "./styles/navigation-rail-backdrop-content-style.function";
import { navigationRailBackdropStyle } from "./styles/navigation-rail-backdrop-style.function";
import type { NavigationRailBackdropProps } from "./types/navigation-rail-backdrop-props.type";

/**
 * Component to handle a navigation rail backdrop
 * @param props
 */
export function NavigationRailBackdrop(props: NavigationRailBackdropProps) {

	const colourScheme = useColourSchemeContext();

	const [showBackdrop, setShowBackdrop] = useState<boolean>(() => props.isExpanded);

	const handleTransitionFadeOnComplete = useCallback<CallbackWithParameter<TransitionFadeOnCompleteParam, void>>(
		(param) => {
			if (param.direction !== TransitionFadeDirection.Out) return;
			setShowBackdrop(false);
		},
		[]
	);

	useEffect(
		() => {
			if (!props.isExpanded) return;
			setShowBackdrop(true);
		},
		[props.isExpanded]
	);

	// Handle expanded state
	const handleExpandedOnChange = useCallback(
		() => {
			// We only want to be able to close the menu
			if (!props.isExpanded) return;
			props.onExpandedChange(false);
		},
		[props]
	);

	if (props.menuStyle !== NavigationRailMenuStyle.ImmersiveModal) return (
		<Fragment key="no-backdrop" />
	);

	return (
		<div
			key="backdrop"
			onClick={handleExpandedOnChange}
			style={navigationRailBackdropStyle(showBackdrop)}
		>
			<TransitionFade
				direction={props.isExpanded ? TransitionFadeDirection.In : TransitionFadeDirection.Out}
				durationMs={NAVIGATION_RAIL_PROPERTY_MAP.menuTransitionDurationMs}
				height={"100%"}
				onComplete={handleTransitionFadeOnComplete}
				timing={TransitionTiming.EaseInOut}
				width={"100%"}
			>
				<div style={navigationRailBackdropContentStyle(colourScheme)} />
			</TransitionFade>
		</div>
	);
}

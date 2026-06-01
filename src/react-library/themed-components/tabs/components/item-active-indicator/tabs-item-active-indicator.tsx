import { useCallback } from "react";

import {
	useResolveState,
	type Callback,
	type Size
} from "@react-library/common";
import {
	TransitionSize,
	TransitionSizeDirection,
	TransitionTiming
} from "@react-library/components";


import { TABS_TRANSITION_MS } from "../../constants/tabs-transition.const";
import { useTabsColourStateContext } from "../../hooks/tabs-colour-state-context.hook";
import { useTabsItemIsActiveContext } from "../../hooks/tabs-item-is-active-context.hook";

import { tabsItemActiveIndicatorStyle } from "./styles/tabs-item-active-indicator-style.function";
import type { TabsItemActiveIndicatorProps } from "./types/tabs-item-active-indicator-props.type";

/**
 * Component to handle a tabs item active indicator
 * @param props
 */
export function TabsItemActiveIndicator(props: TabsItemActiveIndicatorProps) {

	// Local contexts
	const colourState = useTabsColourStateContext();
	const isActive = useTabsItemIsActiveContext();

	// Active indicator
	const resolveActiveIndicatorWidth = useCallback<Callback<Size>>(() => isActive ? "100%" : 0, [isActive]);
	const activeIndicatorWidth = useResolveState(resolveActiveIndicatorWidth);

	return (
		<TransitionSize
			direction={TransitionSizeDirection.Horizontal}
			durationMs={TABS_TRANSITION_MS}
			timing={TransitionTiming.OvershootInOut}
			width={activeIndicatorWidth}
		>
			<div
				style={tabsItemActiveIndicatorStyle(props.style, colourState)}
			/>
		</TransitionSize>
	);
}

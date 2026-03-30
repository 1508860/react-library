import { useCallback, useEffect, useState } from "react";

import {
	useColourSchemeContext,
	type CallbackWithParameter
} from "@react-library/common";
import {
	type TransitionFadeOnCompleteParam,
	TransitionFade,
	TransitionFadeDirection,
	TransitionTiming
} from "@react-library/components";

import { SIDE_SHEET_PANEL_TRANSITION_DURATION_MS } from "../../constants/side-sheet-panel-transition-duration-ms.const";
import { sideSheetBackdropContentStyle } from "./styles/side-sheet-backdrop-content-style.function";
import { sideSheetBackdropStyle } from "./styles/side-sheet-backdrop-style.function";
import type { SideSheetBackdropProps } from "./types/side-sheet-backdrop-props.type";

/**
 * Component to handle a side sheet backdrop
 * @param props
 */
export function NavigationRailBackdrop(props: SideSheetBackdropProps) {

	const colourScheme = useColourSchemeContext();

	const [showBackdrop, setShowBackdrop] = useState<boolean>(() => props.show);

	const handleTransitionFadeOnComplete = useCallback<CallbackWithParameter<TransitionFadeOnCompleteParam, void>>(
		(param) => {
			if (param.direction !== TransitionFadeDirection.Out) return;
			setShowBackdrop(false);
		},
		[]
	);

	useEffect(
		() => {
			if (!props.show) return;
			setShowBackdrop(true);
		},
		[props.show]
	);

	return (
		<div
			onClick={props.onClose}
			key="backdrop"
			style={sideSheetBackdropStyle(showBackdrop)}
		>
			<TransitionFade
				direction={props.show ? TransitionFadeDirection.In : TransitionFadeDirection.Out}
				durationMs={SIDE_SHEET_PANEL_TRANSITION_DURATION_MS}
				height={"100%"}
				onComplete={handleTransitionFadeOnComplete}
				timing={TransitionTiming.EaseInOut}
				width={"100%"}
			>
				<div style={sideSheetBackdropContentStyle(colourScheme)} />
			</TransitionFade>
		</div>
	);
}

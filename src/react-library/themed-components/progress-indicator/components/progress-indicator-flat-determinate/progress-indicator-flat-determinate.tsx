import { useRef, useEffect } from "react";

import {
	useColourSchemeContext,
	useEasingLinearScalePercentState,
	ratioToScalePercent,
	SCALE_PERCENT_MAX,
	incrementScalePercent
} from "@react-library/common";

import { PROGRESS_INDICATOR_EASING_SCALE_PERCENT_TIMER_MS } from "../../constants/progress-indicator-shape-time.const";
import type { ProgressIndicatorBehaviourDeterminate } from "../../types/progress-indicator-behaviour.type";

import { ProgressIndicatorFlatContainer } from "../progress-indicator-flat-container";

import { progressIndicatorFlatDeterminateStyle } from "./styles/progress-indicator-flat-determinate-style.function";

export function ProgressIndicatorFlatDeterminate(props: ProgressIndicatorBehaviourDeterminate) {

	const colourScheme = useColourSchemeContext();

	const [scalePercentState] = useEasingLinearScalePercentState(ratioToScalePercent(props), PROGRESS_INDICATOR_EASING_SCALE_PERCENT_TIMER_MS);
	const isCompleted = useRef<boolean>(false);

	useEffect(
		() => {
			if (isCompleted.current || scalePercentState < SCALE_PERCENT_MAX || !props.onComplete) return;
			isCompleted.current = true;
			props.onComplete();
		},
		[props, scalePercentState]
	);

	return (
		<ProgressIndicatorFlatContainer position={props.position}>
			<div
				key="progress-indicator-flat-determinate-active"
				style={progressIndicatorFlatDeterminateStyle(scalePercentState, colourScheme.primary.default.colour)}
			/>
			<div
				key="progress-indicator-flat-determinate-inactive"
				style={progressIndicatorFlatDeterminateStyle(incrementScalePercent(SCALE_PERCENT_MAX, -scalePercentState), colourScheme.secondary.container.colour)}
			/>
		</ProgressIndicatorFlatContainer>
	);
}

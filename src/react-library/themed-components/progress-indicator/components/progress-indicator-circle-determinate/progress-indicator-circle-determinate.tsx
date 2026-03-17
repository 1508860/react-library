import { useRef, useEffect } from "react";

import {
	useColourSchemeContext,
	useEasingLinearScalePercentState,
	ratioToScalePercent,
	SCALE_PERCENT_MAX,
	incrementScalePercent,
	ScalePercent
} from "@react-library/common";

import { PROGRESS_INDICATOR_EASING_SCALE_PERCENT_TIMER_MS } from "../../constants/progress-indicator-shape-time.const";
import type { ProgressIndicatorBehaviourDeterminate } from "../../types/progress-indicator-behaviour.type";

import { ProgressIndicatorCircle } from "../progress-indicator-circle";
import { ProgressIndicatorCircleContainer } from "../progress-indicator-circle-container";

export function ProgressIndicatorCircleDeterminate(props: ProgressIndicatorBehaviourDeterminate) {

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
		<ProgressIndicatorCircleContainer>
			<ProgressIndicatorCircle
				colour={colourScheme.secondary.container.colour}
				key="progress-indicator-circle-determinate-inactive"
				rotate={scalePercentState}
				scale={incrementScalePercent(SCALE_PERCENT_MAX, -scalePercentState)}
			/>
			<ProgressIndicatorCircle
				colour={colourScheme.primary.default.colour}
				key="progress-indicator-circle-determinate-active"
				rotate={ScalePercent[0]}
				scale={scalePercentState}
			/>
		</ProgressIndicatorCircleContainer>
	);
}

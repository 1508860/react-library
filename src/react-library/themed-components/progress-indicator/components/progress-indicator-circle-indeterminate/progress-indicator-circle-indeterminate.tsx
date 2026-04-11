import {
	useColourSchemeContext,
	useArrayIncrementState,
	ScalePercent,
	type ArrayMinLength2,
	useEasingLinearScalePercentState,
	incrementScalePercent,
	SCALE_PERCENT_MAX
} from "@react-library/common";
import {
	TransitionRotateIndefinite,
	TransitionRotateIndefiniteDirection,
	TransitionTiming
} from "@react-library/components";

import {
	PROGRESS_INDICATOR_INDETERMINATE_CYCLE_DURATION_MS,
	PROGRESS_INDICATOR_EASING_SCALE_PERCENT_TIMER_MS
} from "../../constants/progress-indicator-shape-time.const";

import { ProgressIndicatorCircle } from "../progress-indicator-circle";
import { ProgressIndicatorCircleContainer } from "../progress-indicator-circle-container";

import {
	PROGRESS_INDICATOR_CIRCLE_INDETERMINATE_SCALE_PERCENT_ALL
} from "./constants/progress-indicator-circle-indeterminate-scale.const";
import {
	PROGRESS_INDICATOR_CIRCLE_INDETERMINATE_SHAPE_ARRAY_INCREMENT_STATE_PROPS
} from "./constants/progress-indicator-circle-indeterminate-time.const";

export function ProgressIndicatorCircleIndeterminate() {

	const colourScheme = useColourSchemeContext();

	const { state: activeScalePercent } = useArrayIncrementState<ScalePercent, ArrayMinLength2<ScalePercent>>(
		PROGRESS_INDICATOR_CIRCLE_INDETERMINATE_SCALE_PERCENT_ALL,
		PROGRESS_INDICATOR_CIRCLE_INDETERMINATE_SHAPE_ARRAY_INCREMENT_STATE_PROPS
	);

	const [activeScalePercentState] = useEasingLinearScalePercentState(activeScalePercent, PROGRESS_INDICATOR_EASING_SCALE_PERCENT_TIMER_MS);

	return (
		<TransitionRotateIndefinite
			direction={TransitionRotateIndefiniteDirection.Forwards}
			fullRotationDurationMs={PROGRESS_INDICATOR_INDETERMINATE_CYCLE_DURATION_MS}
			timing={TransitionTiming.EaseInOut}
		>
			<ProgressIndicatorCircleContainer>
				<ProgressIndicatorCircle
					colour={colourScheme.secondary.container.colour}
					key="progress-indicator-circle-indeterminate-inactive"
					rotate={activeScalePercentState}
					scale={incrementScalePercent(SCALE_PERCENT_MAX, -activeScalePercentState)}
				/>
				<ProgressIndicatorCircle
					colour={colourScheme.primary.default.colour}
					key="progress-indicator-circle-indeterminate-active"
					rotate={ScalePercent[0]}
					scale={activeScalePercentState}
				/>
			</ProgressIndicatorCircleContainer>
		</TransitionRotateIndefinite>
	);
}

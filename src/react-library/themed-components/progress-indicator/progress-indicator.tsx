import { useEffect, useRef, type ReactElement } from "react";

import {
	incrementScalePercent,
	ratioToScalePercent,
	SCALE_PERCENT_MAX,
	ScalePercent,
	useArrayIncrementIntervalState,
	useColourSchemeContext,
	useEasingLinearScalePercentState,
	type ArrayMinLength2
} from "@react-library/common";
import { TransitionRotateIndefinite } from "@react-library/components";

import {
	PROGRESS_INDICATOR_EASING_SCALE_PERCENT_TIMER_MS,
	PROGRESS_INDICATOR_INDETERMINATE_CYCLE_DURATION_MS
} from "./constants/progress-indicator-shape-time.const";
import { PROGRESS_INDICATOR_SIZE_CIRCLE_INDETERMINATE_SCALE_PERCENT_ALL } from "./constants/progress-indicator-size.const";
import { ProgressIndicatorBehaviour } from "./enums/progress-indicator-behaviour.type";
import { ProgressIndicatorFlatIndeterminateAnimation } from "./enums/progress-indicator-flat-indeterminate-animation.type";
import { ProgressIndicatorShape } from "./enums/progress-indicator-shape.type";
import { PROGRESS_INDICATOR_CIRCLE_CONTAINER_STYLE } from "./styles/progress-indicator-circle-container-style.const";
import { progressIndicatorCircleStyle } from "./styles/progress-indicator-circle-style.function";
import { progressIndicatorContainerStyle } from "./styles/progress-indicator-container-style.function";
import { progressIndicatorFlatContainerStyle } from "./styles/progress-indicator-flat-container-style.function";
import { progressIndicatorFlatDeterminateStyle } from "./styles/progress-indicator-flat-determinate-style.function";
import { progressIndicatorFlatIndeterminateStyle } from "./styles/progress-indicator-flat-indeterminate-style.function";
import "./styles/progress-indicator-flat-indeterminate.css";
import type {
	ProgressIndicatorBehaviourDeterminate,
	ProgressIndicatorBehaviourIndeterminate
} from "./types/progress-indicator-behaviour.type";
import type { ProgressIndicatorProps } from "./types/progress-indicator-props.type";

/**
 * Component to handle progress indicators
 * @param props
 */
export function ProgressIndicator(props: ProgressIndicatorProps) {

	return (
		<div
			key="progress-indicator-container"
			style={progressIndicatorContainerStyle(props)}
		>
			{
				(props.shape === ProgressIndicatorShape.Circle) ?
					(
						(props.behaviour === ProgressIndicatorBehaviour.Determinate) ?
							<ProgressIndicatorCircleDeterminate
								behaviour={props.behaviour}
								denominator={props.denominator}
								key={`${props.shape}-${props.behaviour}`}
								numerator={props.numerator}
								onComplete={props.onComplete}
								position={props.position}
								shape={props.shape}
							/> :
							<ProgressIndicatorCircleIndeterminate
								key={`${props.shape}-${props.behaviour}`}
							/>
					) :
					(
						(props.behaviour === ProgressIndicatorBehaviour.Determinate) ?
							<ProgressIndicatorFlatDeterminate
								behaviour={props.behaviour}
								denominator={props.denominator}
								key={`${props.shape}-${props.behaviour}`}
								numerator={props.numerator}
								onComplete={props.onComplete}
								position={props.position}
								shape={props.shape}
							/> :
							<ProgressIndicatorFlatIndeterminate
								behaviour={props.behaviour}
								key={`${props.shape}-${props.behaviour}`}
								position={props.position}
								shape={props.shape}
							/>
					)
			}
		</div>
	);
}

function ProgressIndicatorCircleDeterminate(props: ProgressIndicatorBehaviourDeterminate): ReactElement {

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
		<div
			key="progress-indicator-circle-determinate-container"
			style={PROGRESS_INDICATOR_CIRCLE_CONTAINER_STYLE}
		>
			<div
				key="progress-indicator-circle-determinate-inactive"
				style={progressIndicatorCircleStyle(
					incrementScalePercent(SCALE_PERCENT_MAX, -scalePercentState),
					scalePercentState,
					colourScheme.secondary.container.colour
				)}
			/>
			<div
				key="progress-indicator-circle-determinate-active"
				style={progressIndicatorCircleStyle(
					scalePercentState,
					ScalePercent[0],
					colourScheme.primary.default.colour
				)}
			/>
		</div>
	);
}

function ProgressIndicatorCircleIndeterminate(): ReactElement {

	const colourScheme = useColourSchemeContext();

	const [activeScalePercent] = useArrayIncrementIntervalState<ScalePercent, ArrayMinLength2<ScalePercent>>(
		PROGRESS_INDICATOR_SIZE_CIRCLE_INDETERMINATE_SCALE_PERCENT_ALL,
		PROGRESS_INDICATOR_INDETERMINATE_CYCLE_DURATION_MS
	);

	const [activeScalePercentState] = useEasingLinearScalePercentState(activeScalePercent, PROGRESS_INDICATOR_EASING_SCALE_PERCENT_TIMER_MS);

	return (
		<TransitionRotateIndefinite fullRotationDurationMs={PROGRESS_INDICATOR_INDETERMINATE_CYCLE_DURATION_MS}>
			<div
				key="progress-indicator-circle-indeterminate-container"
				style={PROGRESS_INDICATOR_CIRCLE_CONTAINER_STYLE}
			>
				<div
					key="progress-indicator-circle-indeterminate-inactive"
					style={progressIndicatorCircleStyle(
						incrementScalePercent(SCALE_PERCENT_MAX, -activeScalePercentState),
						activeScalePercentState,
						colourScheme.secondary.container.colour
					)}
				/>
				<div
					key="progress-indicator-circle-indeterminate-active"
					style={progressIndicatorCircleStyle(
						activeScalePercentState,
						ScalePercent[0],
						colourScheme.primary.default.colour
					)}
				/>
			</div>
		</TransitionRotateIndefinite>
	);
}

function ProgressIndicatorFlatDeterminate(props: ProgressIndicatorBehaviourDeterminate): ReactElement {

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
		<div
			key="progress-indicator-flat-determinate-container"
			style={progressIndicatorFlatContainerStyle(props.position)}
		>
			<div
				key="progress-indicator-flat-determinate-active"
				style={progressIndicatorFlatDeterminateStyle(scalePercentState, colourScheme.primary.default.colour)}
			/>
			<div
				key="progress-indicator-flat-determinate-inactive"
				style={progressIndicatorFlatDeterminateStyle(incrementScalePercent(SCALE_PERCENT_MAX, -scalePercentState), colourScheme.secondary.container.colour)}
			/>
		</div>
	);
}

function ProgressIndicatorFlatIndeterminate(props: ProgressIndicatorBehaviourIndeterminate): ReactElement {

	const colourScheme = useColourSchemeContext();
	return (
		<div
			key="progress-indicator-flat-determinate-container"
			style={progressIndicatorFlatContainerStyle(props.position)}
		>
			<div
				key="progress-indicator-flat-determinate-inactive-start"
				style={progressIndicatorFlatIndeterminateStyle(ProgressIndicatorFlatIndeterminateAnimation.InactiveStart, colourScheme.secondary.container.colour)}
			/>
			<div
				key="progress-indicator-flat-determinate-active"
				style={progressIndicatorFlatIndeterminateStyle(ProgressIndicatorFlatIndeterminateAnimation.Active, colourScheme.primary.default.colour)}
			/>
			<div
				key="progress-indicator-flat-determinate-inactive-end"
				style={progressIndicatorFlatIndeterminateStyle(ProgressIndicatorFlatIndeterminateAnimation.InactiveEnd, colourScheme.secondary.container.colour)}
			/>
		</div>
	);
}

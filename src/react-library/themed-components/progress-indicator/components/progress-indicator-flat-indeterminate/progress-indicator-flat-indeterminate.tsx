import { useColourSchemeContext } from "@react-library/common";

import type { ProgressIndicatorBehaviourIndeterminate } from "../../types/progress-indicator-behaviour.type";

import { ProgressIndicatorFlatContainer } from "../progress-indicator-flat-container";

import { ProgressIndicatorFlatIndeterminateAnimation } from "./enums/progress-indicator-flat-indeterminate-animation.type";
import { progressIndicatorFlatIndeterminateStyle } from "./styles/progress-indicator-flat-indeterminate-style.function";
import "./styles/progress-indicator-flat-indeterminate.css";

export function ProgressIndicatorFlatIndeterminate(props: ProgressIndicatorBehaviourIndeterminate) {

	const colourScheme = useColourSchemeContext();
	return (
		<ProgressIndicatorFlatContainer position={props.position}>
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
		</ProgressIndicatorFlatContainer>
	);
}

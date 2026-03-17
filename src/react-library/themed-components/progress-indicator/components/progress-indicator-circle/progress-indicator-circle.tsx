import { progressIndicatorCircleStyle } from "./styles/progress-indicator-circle-style.function";
import type { ProgressIndicatorCircleProps } from "./types/progress-indicator-circle-props.type";

export function ProgressIndicatorCircle(props: ProgressIndicatorCircleProps) {

	return (
		<div style={progressIndicatorCircleStyle(props.scale, props.rotate, props.colour)} />
	);
}

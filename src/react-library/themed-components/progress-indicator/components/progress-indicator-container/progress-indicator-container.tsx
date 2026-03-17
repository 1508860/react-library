import { progressIndicatorContainerStyle } from "./styles/progress-indicator-container-style.function";
import type { ProgressIndicatorContainerProps } from "./types/progress-indicator-container-props.type";

export function ProgressIndicatorContainer(props: ProgressIndicatorContainerProps) {

	return (
		<div style={progressIndicatorContainerStyle(props.position)}>
			{props.children}
		</div>
	);
}

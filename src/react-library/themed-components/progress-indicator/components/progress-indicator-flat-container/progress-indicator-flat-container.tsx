import { progressIndicatorFlatContainerStyle } from "./styles/progress-indicator-flat-container-style.function";
import type { ProgressIndicatorFlatContainerProps } from "./types/progress-indicator-flat-container-props.type";

export function ProgressIndicatorFlatContainer(props: ProgressIndicatorFlatContainerProps) {

	return (
		<div style={progressIndicatorFlatContainerStyle(props.position)}>
			{props.children}
		</div>
	);
}

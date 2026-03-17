import { PROGRESS_INDICATOR_CIRCLE_CONTAINER_STYLE } from "./styles/progress-indicator-circle-container-style.const";
import type { ProgressIndicatorCircleContainerProps } from "./types/progress-indicator-circle-container-props.type";

export function ProgressIndicatorCircleContainer(props: ProgressIndicatorCircleContainerProps) {

	return (
		<div style={PROGRESS_INDICATOR_CIRCLE_CONTAINER_STYLE}>
			{props.children}
		</div>
	);
}

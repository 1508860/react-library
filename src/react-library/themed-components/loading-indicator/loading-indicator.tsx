
import { useColourSchemeContext } from "@react-library/common";
import {
	TransitionRotate,
	TransitionSize,
	TransitionSizeDirection,
	TransitionTiming
} from "@react-library/components";

import { LOADING_INDICATOR_SHAPE_ALL } from "./constants/loading-indicator-shape-all.const";
import { LOADING_INDICATOR_SHAPE_TIME_TRANSITION_MS } from "./constants/loading-indicator-shape-time.const";
import { LOADING_INDICATOR_SHAPE_SIZE } from "./constants/loading-indicator-size.const";
import { LoadingIndicatorShapeMap } from "./enums/loading-indicator-shape-map.type";
import { useLoadingIndicatorState } from "./hooks/use-loading-indicator-state.hook";
import { loadingIndicatorBackgroundStyle } from "./styles/loading-indicator-background-style.function";
import { loadingIndicatorContainerStyle } from "./styles/loading-indicator-container-style.function";
import { LOADING_INDICATOR_SHAPE_CONTAINER_STYLE } from "./styles/loading-indicator-shape-container-style.const";
import { loadingIndicatorShapeStyle } from "./styles/loading-indicator-shape-style.function";
import type { LoadingIndicatorProps } from "./types/loading-indicator-props.type";

/**
 * Component to handle loading indicators
 * @param props
 */
export function LoadingIndicator(props: LoadingIndicatorProps) {

	const colourScheme = useColourSchemeContext();

	const loadingIndicatorState = useLoadingIndicatorState();

	return (
		<div style={loadingIndicatorContainerStyle(props)}>
			<div style={loadingIndicatorBackgroundStyle(props, colourScheme)}>
				<TransitionRotate
					durationMs={LOADING_INDICATOR_SHAPE_TIME_TRANSITION_MS}
					rotate={loadingIndicatorState.rotate}
					timing={TransitionTiming.OvershootInOut}
				>
					{LOADING_INDICATOR_SHAPE_ALL.map(shape =>
						<div
							key={shape}
							style={LOADING_INDICATOR_SHAPE_CONTAINER_STYLE}
						>
							<TransitionSize
								direction={TransitionSizeDirection.All}
								durationMs={LOADING_INDICATOR_SHAPE_TIME_TRANSITION_MS}
								height={loadingIndicatorState.shape === shape ? LOADING_INDICATOR_SHAPE_SIZE : 0}
								timing={TransitionTiming.OvershootInOut}
								width={loadingIndicatorState.shape === shape ? LOADING_INDICATOR_SHAPE_SIZE : 0}
							>
								<div style={loadingIndicatorShapeStyle(props.colourSchemeStyle, props.style, colourScheme, LoadingIndicatorShapeMap[shape])} />
							</TransitionSize>
						</div>
					)}
				</TransitionRotate>
			</div>
		</div>
	);
}

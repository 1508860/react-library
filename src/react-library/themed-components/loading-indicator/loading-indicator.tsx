
import { useColourSchemeContext } from "@react-library/common";
import { TransitionRotate, TransitionTiming } from "@react-library/components";

import { LOADING_INDICATOR_SHAPE_ALL } from "./constants/loading-indicator-shape-all.const";
import { LOADING_INDICATOR_SHAPE_TIME_TRANSITION_MS } from "./constants/loading-indicator-shape-time.const";
import { LoadingIndicatorShapeMap } from "./enums/loading-indicator-shape-map.type";
import { useCurrencyDisplayFormatterState } from "./hooks/use-loading-indicator-state.hook";
import { loadingIndicatorBackgroundStyle } from "./styles/loading-indicator-background-style.function";
import { loadingIndicatorContainerStyle } from "./styles/loading-indicator-container-style.function";
import { loadingIndicatorStyle } from "./styles/loading-indicator-style.function";
import type { LoadingIndicatorProps } from "./types/loading-indicator-props.type";

/**
 * Component to handle loading indicators
 * @param props
 */
export function LoadingIndicator(props: LoadingIndicatorProps) {

	const colourScheme = useColourSchemeContext();

	const loadingIndicatorState = useCurrencyDisplayFormatterState();

	return (
		<div style={loadingIndicatorContainerStyle(props)}>
			<div style={loadingIndicatorBackgroundStyle(props, colourScheme)}>
				<TransitionRotate
					durationMs={LOADING_INDICATOR_SHAPE_TIME_TRANSITION_MS}
					rotate={loadingIndicatorState.rotate}
					timing={TransitionTiming.EaseInOut}
				>
					{LOADING_INDICATOR_SHAPE_ALL.map(shape =>
						<div
							key={`loading-indicator-shape-${shape}`}
							style={loadingIndicatorStyle(props, colourScheme, LoadingIndicatorShapeMap[shape], loadingIndicatorState.shape === shape)}
						/>
					)}
				</TransitionRotate>
			</div>
		</div>
	);
}

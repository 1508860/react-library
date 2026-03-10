import {
	UseArrayIncrementDirection,
	useArrayIncrementState,
	useColourSchemeContext,
	type ArrayMinLength2
} from "@react-library/common";

import { LOADING_INDICATOR_SHAPE_ALL } from "./constants/loading-indicator-shape-all.const";
import { LOADING_INDICATOR_SHAPE_TIME_INTERVAL_MS } from "./constants/loading-indicator-shape-time.const";
import { LoadingIndicatorShape } from "./enums/loading-indicator-shape.type";
import { loadingIndicatorBackgroundStyle } from "./styles/loading-indicator-background-style.function";
import { loadingIndicatorContainerStyle } from "./styles/loading-indicator-container-style.function";
import { loadingIndicatorStyle } from "./styles/loading-indicator-style.function";
import type { LoadingIndicatorProps } from "./types/loading-indicator-props.type";
import { LoadingIndicatorShapeMap } from "./enums/loading-indicator-shape-map.type";

/**
 * Component to handle loading indicators
 * @param props
 */
export function LoadingIndicator(props: LoadingIndicatorProps) {

	const colourScheme = useColourSchemeContext();
	const { state: shapeState, count: shapeIncrementCount } = useArrayIncrementState<LoadingIndicatorShape, ArrayMinLength2<LoadingIndicatorShape>>(
		LOADING_INDICATOR_SHAPE_ALL,
		{
			intervalProps: {
				direction: UseArrayIncrementDirection.Forwards,
				intervalMs: LOADING_INDICATOR_SHAPE_TIME_INTERVAL_MS
			}
		}
	);

	return (
		<div style={loadingIndicatorContainerStyle(props)}>
			<div style={loadingIndicatorBackgroundStyle(props, colourScheme)}>
				{LOADING_INDICATOR_SHAPE_ALL.map(shape =>
					<div
						key={`loading-indicator-shape-${shape}`}
						style={loadingIndicatorStyle(props, colourScheme, LoadingIndicatorShapeMap[shape], shapeState === shape, shapeIncrementCount)}
					/>
				)}
			</div>
		</div>
	);
}

import { useEffect, useRef, useState } from "react";

import {
	useArrayIncrementState,
	type ArrayMinLength2,
	type ScaleDegreesState,
	incrementScaleDegrees
} from "@react-library/common";

import { LOADING_INDICATOR_SHAPE_ALL } from "../constants/loading-indicator-shape-all.const";
import { LOADING_INDICATOR_SHAPE_ROTATE } from "../constants/loading-indicator-shape-rotate.const";
import { LOADING_INDICATOR_SHAPE_ARRAY_INCREMENT_STATE_PROPS } from "../constants/loading-indicator-shape-time.const";
import type { LoadingIndicatorShape } from "../enums/loading-indicator-shape.type";
import type { LoadingIndicatorState } from "../types/loading-indicator-state.type";

/**
 * Custom hook for resolving the loading indicator's state
 */
export function useLoadingIndicatorState(): LoadingIndicatorState {

	const { state: shapeState, count: shapeIncrementCount } = useArrayIncrementState<LoadingIndicatorShape, ArrayMinLength2<LoadingIndicatorShape>>(
		LOADING_INDICATOR_SHAPE_ALL,
		LOADING_INDICATOR_SHAPE_ARRAY_INCREMENT_STATE_PROPS
	);

	const [scaleDegreesState, setScaleDegreesState] = useState<ScaleDegreesState>(() => ({ degrees: 0, rotationCount: 0 }));
	const scaleDegreesStateRef = useRef<ScaleDegreesState>(scaleDegreesState);

	useEffect(
		() => {
			const newScaleDegreesState = incrementScaleDegrees(scaleDegreesStateRef.current, LOADING_INDICATOR_SHAPE_ROTATE);
			scaleDegreesStateRef.current = newScaleDegreesState;
			setScaleDegreesState(newScaleDegreesState);
		},
		[shapeIncrementCount]
	);

	return {
		rotate: scaleDegreesState,
		shape: shapeState
	};
}

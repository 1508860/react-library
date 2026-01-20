import { useCallback, useEffect, useRef, useState } from "react";

import {
	PositionStrategyExternal,
	StyleTransformCollection,
	type PositionStrategyExternalAll,
	type SizePx
} from "@react-library/common";

import { isTooltipArrowPositionEqual } from "../functions/is-tooltip-arrow-position-equal.function";
import type { TooltipArrowPosition } from "../types/tooltip-arrow-position.type";

/**
 * Custom hook for resolving the position for a tooltip arrow based on the tooltip position strategy
 * @param tooltipPositionStrategy
 */
export function useTooltipArrowPositionState(tooltipPositionStrategy: PositionStrategyExternalAll<SizePx, SizePx> | undefined): [TooltipArrowPosition | null] {

	const [state, setState] = useState<TooltipArrowPosition | null>(null);
	const stateRef = useRef<TooltipArrowPosition | null>(state);

	const setValidatedState = useCallback(
		(newState: TooltipArrowPosition | null) => {
			if (!isTooltipArrowPositionEqual(stateRef.current, newState)) {
				stateRef.current = newState;
				setState(newState);
			}
		},
		[]
	);

	useEffect(
		() => {
			// Don't calculate tooltip position if tooltip hasn't got a position strategy
			if (!tooltipPositionStrategy) {
				setValidatedState(null);
				return;
			}

			switch (tooltipPositionStrategy.positionType) {
				case PositionStrategyExternal.BottomCenter:
					setValidatedState({
						align: "start",
						justify: "center",
						transform: new StyleTransformCollection(["rotate(0deg)"])
					});
					return;
				case PositionStrategyExternal.BottomEnd:
					setValidatedState({
						align: "start",
						justify: "end",
						transform: new StyleTransformCollection(["rotate(0deg)"])
					});
					return;
				case PositionStrategyExternal.BottomLeft:
					setValidatedState({
						align: "start",
						justify: "end",
						transform: new StyleTransformCollection(["rotate(45deg)"])
					});
					return;
				case PositionStrategyExternal.BottomRight:
					setValidatedState({
						align: "start",
						justify: "start",
						transform: new StyleTransformCollection(["rotate(315deg)"])
					});
					return;
				case PositionStrategyExternal.BottomStart:
					setValidatedState({
						align: "start",
						justify: "start",
						transform: new StyleTransformCollection(["rotate(0deg)"])
					});
					return;
				case PositionStrategyExternal.LeftCenter:
					setValidatedState({
						align: "center",
						justify: "end",
						transform: new StyleTransformCollection(["rotate(90deg)"])
					});
					return;
				case PositionStrategyExternal.LeftEnd:
					setValidatedState({
						align: "end",
						justify: "end",
						transform: new StyleTransformCollection(["rotate(90deg)"])
					});
					return;
				case PositionStrategyExternal.LeftStart:
					setValidatedState({
						align: "start",
						justify: "end",
						transform: new StyleTransformCollection(["rotate(90deg)"])
					});
					return;
				case PositionStrategyExternal.RightCenter:
					setValidatedState({
						align: "center",
						justify: "start",
						transform: new StyleTransformCollection(["rotate(270deg)"])
					});
					return;
				case PositionStrategyExternal.RightEnd:
					setValidatedState({
						align: "end",
						justify: "start",
						transform: new StyleTransformCollection(["rotate(270deg)"])
					});
					return;
				case PositionStrategyExternal.RightStart:
					setValidatedState({
						align: "start",
						justify: "start",
						transform: new StyleTransformCollection(["rotate(270deg)"])
					});
					return;
				case PositionStrategyExternal.TopCenter:
					setValidatedState({
						align: "end",
						justify: "center",
						transform: new StyleTransformCollection(["rotate(180deg)"])
					});
					return;
				case PositionStrategyExternal.TopEnd:
					setValidatedState({
						align: "end",
						justify: "end",
						transform: new StyleTransformCollection(["rotate(180deg)"])
					});
					return;
				case PositionStrategyExternal.TopLeft:
					setValidatedState({
						align: "end",
						justify: "end",
						transform: new StyleTransformCollection(["rotate(135deg)"])
					});
					return;
				case PositionStrategyExternal.TopRight:
					setValidatedState({
						align: "end",
						justify: "start",
						transform: new StyleTransformCollection(["rotate(225deg)"])
					});
					return;
				case PositionStrategyExternal.TopStart:
					setValidatedState({
						align: "end",
						justify: "start",
						transform: new StyleTransformCollection(["rotate(180deg)"])
					});
					return;
			}
		},
		[
			tooltipPositionStrategy,
			setValidatedState
		]
	);

	return [state];
}

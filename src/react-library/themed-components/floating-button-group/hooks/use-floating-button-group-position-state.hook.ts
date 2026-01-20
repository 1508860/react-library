import { useCallback, useEffect, useRef, useState } from "react";

import {
	Orientation,
	PositionStrategyInternal,
	type PositionStrategyInternalCorner,
	type SizePx
} from "@react-library/common";

import type { IFloatingButtonGroupPosition } from "../interfaces/floating-button-group-position.interface";
import type {
	FloatingButtonGroupPositionAlignItems,
	FloatingButtonGroupPositionFlexDirection
} from "../types/floating-button-group-position.type";

/**
 * Describes use state hook result for the floating button group position
 * @param positionStrategy
 * @param orientation
 */
export function useFloatingButtonGroupPositionState(
	positionStrategy: PositionStrategyInternalCorner,
	orientation: Orientation
): [IFloatingButtonGroupPosition] {

	const resolvePosition = useCallback<() => IFloatingButtonGroupPosition>(
		() => {
			let alignItems: FloatingButtonGroupPositionAlignItems = undefined;
			let bottom: SizePx | undefined = undefined;
			let flexDirection: FloatingButtonGroupPositionFlexDirection = undefined;
			let left: SizePx | undefined = undefined;
			let right: SizePx | undefined = undefined;
			let top: SizePx | undefined = undefined;

			switch (positionStrategy) {
				case PositionStrategyInternal.BottomLeft:
					bottom = 0;
					left = 0;
					switch (orientation) {
						case Orientation.Horizontal:
							flexDirection = "row";
							break;
						case Orientation.Vertical:
							alignItems = "start";
							flexDirection = "column";
							break;
					}
					break;
				case PositionStrategyInternal.BottomRight:
					bottom = 0;
					right = 0;
					switch (orientation) {
						case Orientation.Horizontal:
							flexDirection = "row";
							break;
						case Orientation.Vertical:
							alignItems = "end";
							flexDirection = "column";
							break;
					}
					break;
				case PositionStrategyInternal.TopLeft:
					left = 0;
					top = 0;
					switch (orientation) {
						case Orientation.Horizontal:
							flexDirection = "row";
							break;
						case Orientation.Vertical:
							alignItems = "start";
							flexDirection = "column";
							break;
					}
					break;
				case PositionStrategyInternal.TopRight:
					right = 0;
					top = 0;
					switch (orientation) {
						case Orientation.Horizontal:
							flexDirection = "row";
							break;
						case Orientation.Vertical:
							alignItems = "end";
							flexDirection = "column";
							break;
					}
					break;
			}
			const result: IFloatingButtonGroupPosition = {
				alignItems: alignItems,
				flexDirection: flexDirection,
				gap: 4,
				inset: {
					bottom: bottom,
					left: left,
					right: right,
					top: top
				},
				padding: 16
			};
			return result;
		},
		[positionStrategy, orientation]
	);

	const [state, setState] = useState<IFloatingButtonGroupPosition>(resolvePosition());
	const stateRef = useRef<IFloatingButtonGroupPosition>(state);

	const setValidatedState = useCallback(
		(newState: IFloatingButtonGroupPosition) => {
			if (!isFloatingButtonGroupPositionEqual(stateRef.current, newState)) {
				stateRef.current = newState;
				setState(newState);
			}
		},
		[]
	);

	useEffect(
		() => setValidatedState(resolvePosition()),
		[resolvePosition, setValidatedState]
	);

	return [state];
}

function isFloatingButtonGroupPositionEqual(state1: IFloatingButtonGroupPosition, state2: IFloatingButtonGroupPosition): boolean {
	return (
		state1 &&
		state2 &&
		state1.alignItems === state2.alignItems &&
		state1.flexDirection === state2.flexDirection &&
		state1.gap === state2.gap &&
		state1.inset.bottom === state2.inset.bottom &&
		state1.inset.left === state2.inset.left &&
		state1.inset.right === state2.inset.right &&
		state1.inset.top === state2.inset.top
	);
}

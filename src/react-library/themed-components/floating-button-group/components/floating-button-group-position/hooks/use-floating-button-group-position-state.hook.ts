import { useCallback } from "react";

import {
	Orientation,
	PositionStrategyInternal,
	useResolveState,
	type Callback,
	type EqualityCallback,
	type SizePx
} from "@react-library/common";

import type { FloatingButtonGroupOrientation } from "../../../types/floating-button-group-orientation.type";
import type { FloatingButtonGroupPositionAlignItems } from "../../../types/floating-button-group-position-align-items.type";
import type { FloatingButtonGroupPositionFlexDirection } from "../../../types/floating-button-group-position-flex-direction.type";
import type { FloatingButtonGroupPositionStrategy } from "../../../types/floating-button-group-position-strategy.type";
import type { FloatingButtonGroupPosition } from "../../../types/floating-button-group-position.type";

import { isFloatingButtonGroupPositionEqual } from "../functions/is-floating-button-group-position-equal.functions";

/**
 * Describes use state hook result for the floating button group position
 * @param positionStrategy
 * @param orientation
 */
export function useFloatingButtonGroupPositionState(
	positionStrategy: FloatingButtonGroupPositionStrategy,
	orientation: FloatingButtonGroupOrientation
): [FloatingButtonGroupPosition] {

	const resolvePosition = useCallback<Callback<FloatingButtonGroupPosition>>(
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
			const result: FloatingButtonGroupPosition = {
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

	const stateEqualityCallback = useCallback<EqualityCallback<FloatingButtonGroupPosition>>(isFloatingButtonGroupPositionEqual, []);
	const state = useResolveState<FloatingButtonGroupPosition>(resolvePosition, stateEqualityCallback);

	return [state];
}

import type { Property } from "csstype";

import type { Extends } from "../../types";
import { PositionStrategyInternal } from "../enums/position-strategy-internal.type";

/**
 * Resolve {@link CSS.Property.JustifyContent} value for {@link positionStrategyType} and a {@link flexDirection}
 * @param positionStrategyType
 * @param flexDirection
 */
export function positionStrategyInternalFlexJustifyContent(
	positionStrategyType: PositionStrategyInternal,
	flexDirection: Extends<Property.FlexDirection, ("column" | "row")>
): Extends<Property.JustifyContent, ("start" | "center" | "end")> {

	if (flexDirection === "column") {
		switch (positionStrategyType) {
			case PositionStrategyInternal.TopLeft:
			case PositionStrategyInternal.TopCenter:
			case PositionStrategyInternal.TopRight:
				return "start";
			case PositionStrategyInternal.MiddleLeft:
			case PositionStrategyInternal.MiddleCenter:
			case PositionStrategyInternal.MiddleRight:
				return "center";
			case PositionStrategyInternal.BottomLeft:
			case PositionStrategyInternal.BottomCenter:
			case PositionStrategyInternal.BottomRight:
				return "end";
		}
	} else {
		switch (positionStrategyType) {
			case PositionStrategyInternal.TopLeft:
			case PositionStrategyInternal.MiddleLeft:
			case PositionStrategyInternal.BottomLeft:
				return "start";
			case PositionStrategyInternal.TopCenter:
			case PositionStrategyInternal.MiddleCenter:
			case PositionStrategyInternal.BottomCenter:
				return "center";
			case PositionStrategyInternal.TopRight:
			case PositionStrategyInternal.MiddleRight:
			case PositionStrategyInternal.BottomRight:
				return "end";
		}
	}
}

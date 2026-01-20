import type { CSSProperties } from "react";

import {
	positionStrategyInternalMarginBottom,
	positionStrategyInternalMarginLeft,
	positionStrategyInternalMarginRight,
	positionStrategyInternalMarginTop,
	type Colour,
	type PositionStrategyInternalAll,
	type Size
} from "@react-library/common";

/**
 * Resolve modal style based on parameters
 * @param height
 * @param width
 * @param positionStrategy
 * @param backgroundColour
 */
export function modalStyle(
	height: Size,
	width: Size,
	positionStrategy: PositionStrategyInternalAll<Size, Size>,
	backgroundColour: Colour | undefined
): CSSProperties {
	return {
		backgroundColor: backgroundColour?.toColourString(),
		bottom: positionStrategyInternalMarginBottom(positionStrategy),
		display: "block",
		height: height,
		left: positionStrategyInternalMarginLeft(positionStrategy),
		position: "relative",
		right: positionStrategyInternalMarginRight(positionStrategy),
		top: positionStrategyInternalMarginTop(positionStrategy),
		width: width
	};
}

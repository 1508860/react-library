import type { CSSProperties } from "react";

import {
	positionStrategyInternalMarginBottom,
	positionStrategyInternalMarginLeft,
	positionStrategyInternalMarginRight,
	positionStrategyInternalMarginTop,
	type Colour,
	type Size
} from "@react-library/common";

import type { ModalPositionStrategyInternal } from "../../../types/modal-position-strategy-internal.type";

/**
 * Resolve modal container style based on parameters
 * @param positionStrategy
 * @param height
 * @param width
 * @param backgroundColour
 */
export function modalContainerStyle(
	positionStrategy: ModalPositionStrategyInternal,
	height: Size,
	width: Size,
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

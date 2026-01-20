import type { CSSProperties } from "react";

import {
	positionStrategyInternalFlexAlignItems,
	positionStrategyInternalFlexJustifyContent,
	type Colour,
	type PositionStrategyInternalAll,
	type Size
} from "@react-library/common";

/**
 * Resolve modal backdrop style based on parameters
 * @param positionStrategy 
 * @param backgroundColour
 */
export function modalBackdropStyle(
	positionStrategy: PositionStrategyInternalAll<Size, Size>,
	backgroundColour?: Colour
): CSSProperties {
	return {
		alignItems: positionStrategyInternalFlexAlignItems(positionStrategy.positionType, "column"),
		backgroundColor: backgroundColour?.toColourString(),
		display: "flex",
		flexDirection: "column",
		inset: 0,
		justifyContent: positionStrategyInternalFlexJustifyContent(positionStrategy.positionType, "column"),
		overflow: "auto",
		position: "absolute"
	};
}

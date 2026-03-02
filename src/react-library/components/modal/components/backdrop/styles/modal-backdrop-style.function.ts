import type { CSSProperties } from "react";

import {
	positionStrategyInternalFlexAlignItems,
	positionStrategyInternalFlexJustifyContent,
	type Colour
} from "@react-library/common";

import type { ModalPositionStrategyInternal } from "../../../types/modal-position-strategy-internal.type";

/**
 * Resolve modal backdrop style based on parameters
 * @param positionStrategy
 * @param backdropColour
 */
export function modalBackdropStyle(positionStrategy: ModalPositionStrategyInternal, backdropColour?: Colour): CSSProperties {
	return {
		alignItems: positionStrategyInternalFlexAlignItems(positionStrategy.positionType, "column"),
		backgroundColor: backdropColour?.toColourString(),
		display: "flex",
		flexDirection: "column",
		inset: 0,
		justifyContent: positionStrategyInternalFlexJustifyContent(positionStrategy.positionType, "column"),
		overflow: "auto",
		position: "absolute"
	};
}

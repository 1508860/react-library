import type { CSSProperties } from "react";

import {
	positionStrategyInternalFlexAlignItems,
	positionStrategyInternalFlexJustifyContent
} from "@react-library/common";

import type { ModalPositionStrategyInternal } from "../../../types/modal-position-strategy-internal.type";

/**
 * Resolve modal container style based on parameters
 * @param positionStrategy
 */
export function modalContainerStyle(positionStrategy: ModalPositionStrategyInternal): CSSProperties {
	return {
		alignItems: positionStrategyInternalFlexAlignItems(positionStrategy.positionType, "column"),
		display: "flex",
		flexDirection: "column",
		inset: 0,
		justifyContent: positionStrategyInternalFlexJustifyContent(positionStrategy.positionType, "column"),
		overflow: "hidden",
		position: "absolute"
	};
}

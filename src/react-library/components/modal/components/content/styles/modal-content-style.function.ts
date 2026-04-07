import type { CSSProperties } from "react";

import {
	positionStrategyInternalMarginBottom,
	positionStrategyInternalMarginLeft,
	positionStrategyInternalMarginRight,
	positionStrategyInternalMarginTop
} from "@react-library/common";

import type { ModalContentConfig } from "../../../types/modal-content-config.type";
import type { ModalPositionStrategyInternal } from "../../../types/modal-position-strategy-internal.type";

/**
 * Resolve modal content style based on parameters
 * @param contentConfig
 * @param positionStrategy
 */
export function modalContentStyle(
	contentConfig: ModalContentConfig | undefined,
	positionStrategy: ModalPositionStrategyInternal
): CSSProperties {
	return {
		backgroundColor: contentConfig?.backgroundColour?.toColourString(),
		bottom: positionStrategyInternalMarginBottom(positionStrategy),
		display: "block",
		height: contentConfig?.height,
		left: positionStrategyInternalMarginLeft(positionStrategy),
		maxHeight: contentConfig?.maxHeight,
		maxWidth: contentConfig?.maxWidth,
		minHeight: contentConfig?.minHeight,
		minWidth: contentConfig?.minWidth,
		position: "relative",
		right: positionStrategyInternalMarginRight(positionStrategy),
		top: positionStrategyInternalMarginTop(positionStrategy),
		width: contentConfig?.width
	};
}

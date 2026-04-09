import type { Property } from "csstype";
import type { CSSProperties } from "react";

import {
	positionStrategyInternalMarginBottom,
	positionStrategyInternalMarginLeft,
	positionStrategyInternalMarginRight,
	positionStrategyInternalMarginTop,
	toSizeWithUnits
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

	let maxHeight: Property.MaxHeight | undefined = undefined;
	let maxWidth: Property.MaxHeight | undefined = undefined;

	if (contentConfig?.maxHeight === undefined) maxHeight = "100%";
	else maxHeight = `min(${toSizeWithUnits(contentConfig?.maxHeight)}, 100%)`;

	if (contentConfig?.maxWidth === undefined) maxWidth = "100%";
	else maxWidth = `min(${toSizeWithUnits(contentConfig?.maxWidth)}, 100%)`;

	return {
		backgroundColor: contentConfig?.backgroundColour?.toColourString(),
		bottom: positionStrategyInternalMarginBottom(positionStrategy),
		display: "block",
		height: contentConfig?.height,
		left: positionStrategyInternalMarginLeft(positionStrategy),
		maxHeight: maxHeight,
		maxWidth: maxWidth,
		minHeight: contentConfig?.minHeight,
		minWidth: contentConfig?.minWidth,
		position: "relative",
		right: positionStrategyInternalMarginRight(positionStrategy),
		top: positionStrategyInternalMarginTop(positionStrategy),
		width: contentConfig?.width
	};
}

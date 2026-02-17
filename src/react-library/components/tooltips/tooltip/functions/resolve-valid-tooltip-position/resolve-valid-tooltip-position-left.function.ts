import {
	PositionStrategyExternal,
	type DimensionsPx,
	type PositionStrategyExternalAll,
	type SizePx,
	type ViewportPositionPx
} from "@react-library/common";

import type { TooltipPositionLeft } from "../../../shared/types/position/tooltip-position-left.type";
import type { ValidTooltipPosition } from "../../types/valid-tooltip-position.type";

/**
 * Resolve if a tooltip position is valid and the position of the tooltip left position
 * @param positionStrategy
 * @param childViewportPositionPx
 * @param overlayPortalViewportPositionPx
 * @param overlayPortalMargin
 * @param tooltipDimensions
 */
export function resolveValidTooltipPositionLeft(
	positionStrategy: PositionStrategyExternalAll<SizePx, SizePx>,
	childViewportPositionPx: ViewportPositionPx,
	overlayPortalViewportPositionPx: ViewportPositionPx,
	overlayPortalMargin: SizePx | undefined,
	tooltipDimensions: DimensionsPx
): ValidTooltipPosition<TooltipPositionLeft> {

	let tooltipPosition: TooltipPositionLeft | null = null;

	if (
		positionStrategy.positionType === PositionStrategyExternal.BottomEnd ||
		positionStrategy.positionType === PositionStrategyExternal.TopEnd
	) tooltipPosition = {
		marginRight: childViewportPositionPx.marginRight
	};

	if (
		positionStrategy.positionType === PositionStrategyExternal.BottomLeft ||
		positionStrategy.positionType === PositionStrategyExternal.LeftCenter ||
		positionStrategy.positionType === PositionStrategyExternal.LeftEnd ||
		positionStrategy.positionType === PositionStrategyExternal.LeftStart ||
		positionStrategy.positionType === PositionStrategyExternal.TopLeft
	) tooltipPosition = {
		marginRight: (
			childViewportPositionPx.marginRight +
			childViewportPositionPx.width
		),
		paddingRight: positionStrategy.marginRight
	};

	// Catchall for any invalid position strategies
	if (!tooltipPosition) return { isValid: true, position: {} };

	return {
		isValid: (
			(
				(tooltipPosition.marginRight ?? 0) +
				(tooltipPosition.paddingRight ?? 0) -
				(overlayPortalMargin ?? 0)
			) >= 0 &&
			(
				(tooltipPosition.marginRight ?? 0) +
				(tooltipPosition.paddingRight ?? 0) +
				tooltipDimensions.width +
				(overlayPortalMargin ?? 0)
			) <= overlayPortalViewportPositionPx.width
		),
		position: tooltipPosition
	};
}

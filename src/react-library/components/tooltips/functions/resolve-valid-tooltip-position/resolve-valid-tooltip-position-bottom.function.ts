import {
	PositionStrategyExternal,
	type DimensionsPx,
	type PositionStrategyExternalAll,
	type SizePx,
	type ViewportPositionPx
} from "@react-library/common";

import type { TooltipPositionBottom } from "../../types/position/tooltip-position-bottom.type";
import type { ValidTooltipPosition } from "../../types/valid-tooltip-position.type";

/**
 * Resolve if a tooltip position is valid and the position of the tooltip bottom position
 * @param positionStrategy
 * @param childViewportPositionPx
 * @param overlayPortalViewportPositionPx
 * @param overlayPortalMargin
 * @param tooltipDimensions
 */
export function resolveValidTooltipPositionBottom(
	positionStrategy: PositionStrategyExternalAll<SizePx, SizePx>,
	childViewportPositionPx: ViewportPositionPx,
	overlayPortalViewportPositionPx: ViewportPositionPx,
	overlayPortalMargin: SizePx | undefined,
	tooltipDimensions: DimensionsPx
): ValidTooltipPosition<TooltipPositionBottom> {

	let tooltipPosition: TooltipPositionBottom | null = null;

	if (
		positionStrategy.positionType === PositionStrategyExternal.LeftStart ||
		positionStrategy.positionType === PositionStrategyExternal.RightStart
	) tooltipPosition = {
		marginTop: childViewportPositionPx.marginTop
	};

	if (
		positionStrategy.positionType === PositionStrategyExternal.LeftCenter ||
		positionStrategy.positionType === PositionStrategyExternal.RightCenter
	) tooltipPosition = {
		marginTop: (
			childViewportPositionPx.marginTop +
			(childViewportPositionPx.height / 2) -
			(tooltipDimensions.height / 2)
		)
	};

	if (
		positionStrategy.positionType === PositionStrategyExternal.BottomCenter ||
		positionStrategy.positionType === PositionStrategyExternal.BottomEnd ||
		positionStrategy.positionType === PositionStrategyExternal.BottomLeft ||
		positionStrategy.positionType === PositionStrategyExternal.BottomRight ||
		positionStrategy.positionType === PositionStrategyExternal.BottomStart
	) tooltipPosition = {
		marginTop: (
			childViewportPositionPx.marginTop +
			childViewportPositionPx.height
		),
		paddingTop: positionStrategy.marginTop
	};

	// Catchall for any invalid position strategies
	if (!tooltipPosition) return { isValid: true, position: {} };

	return {
		isValid: (
			(
				(tooltipPosition.marginTop ?? 0) +
				(tooltipPosition.paddingTop ?? 0) -
				(overlayPortalMargin ?? 0)
			) >= 0 &&
			(
				(tooltipPosition.marginTop ?? 0) +
				(tooltipPosition.paddingTop ?? 0) +
				tooltipDimensions.height +
				(overlayPortalMargin ?? 0)
			) <= overlayPortalViewportPositionPx.height
		),
		position: tooltipPosition
	};
}

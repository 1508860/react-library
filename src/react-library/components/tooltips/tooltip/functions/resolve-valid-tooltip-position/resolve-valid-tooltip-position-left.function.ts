import {
	PositionStrategyExternal,
	type DimensionsPx,
	type IViewportPosition,
	type PositionStrategyExternalAll,
	type SizePx
} from "@react-library/common";

import type { TooltipPositionLeft } from "../../../shared/types/position/tooltip-position-left.type";
import type { ValidTooltipPosition } from "../../types/valid-tooltip-position.type";

/**
 * Resolve if a tooltip position is valid and the position of the tooltip left position
 * @param positionStrategy
 * @param childViewportPosition
 * @param overlayPortalViewportPosition
 * @param overlayPortalMargin
 * @param tooltipDimensions
 */
export function resolveValidTooltipPositionLeft(
	positionStrategy: PositionStrategyExternalAll<SizePx, SizePx>,
	childViewportPosition: IViewportPosition,
	overlayPortalViewportPosition: IViewportPosition,
	overlayPortalMargin: SizePx | undefined,
	tooltipDimensions: DimensionsPx
): ValidTooltipPosition<TooltipPositionLeft> {

	let tooltipPosition: TooltipPositionLeft | null = null;

	if (
		positionStrategy.positionType === PositionStrategyExternal.BottomEnd ||
		positionStrategy.positionType === PositionStrategyExternal.TopEnd
	) tooltipPosition = {
		marginRight: childViewportPosition.marginRight
	};

	if (
		positionStrategy.positionType === PositionStrategyExternal.BottomLeft ||
		positionStrategy.positionType === PositionStrategyExternal.LeftCenter ||
		positionStrategy.positionType === PositionStrategyExternal.LeftEnd ||
		positionStrategy.positionType === PositionStrategyExternal.LeftStart ||
		positionStrategy.positionType === PositionStrategyExternal.TopLeft
	) tooltipPosition = {
		marginRight: (
			childViewportPosition.marginRight +
			childViewportPosition.width
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
			) <= overlayPortalViewportPosition.width
		),
		position: tooltipPosition
	};
}

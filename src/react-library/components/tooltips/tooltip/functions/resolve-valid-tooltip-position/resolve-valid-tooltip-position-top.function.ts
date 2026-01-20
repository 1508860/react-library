import {
	PositionStrategyExternal,
	type DimensionsPx,
	type IViewportPosition,
	type PositionStrategyExternalAll,
	type SizePx
} from "@react-library/common";

import type { TooltipPositionTop } from "../../../shared/types/position/tooltip-position-top.type";
import type { ValidTooltipPosition } from "../../types/valid-tooltip-position.type";

/**
 * Resolve if a tooltip position is valid and the position of the tooltip top position
 * @param positionStrategy
 * @param childViewportPosition
 * @param overlayPortalViewportPosition
 * @param overlayPortalMargin
 * @param tooltipDimensions
 */
export function resolveValidTooltipPositionTop(
	positionStrategy: PositionStrategyExternalAll<SizePx, SizePx>,
	childViewportPosition: IViewportPosition,
	overlayPortalViewportPosition: IViewportPosition,
	overlayPortalMargin: SizePx | undefined,
	tooltipDimensions: DimensionsPx
): ValidTooltipPosition<TooltipPositionTop> {

	let tooltipPosition: TooltipPositionTop | null = null;

	if (
		positionStrategy.positionType === PositionStrategyExternal.LeftEnd ||
		positionStrategy.positionType === PositionStrategyExternal.RightEnd
	) tooltipPosition = {
		marginBottom: childViewportPosition.marginBottom
	};

	if (
		positionStrategy.positionType === PositionStrategyExternal.TopCenter ||
		positionStrategy.positionType === PositionStrategyExternal.TopEnd ||
		positionStrategy.positionType === PositionStrategyExternal.TopLeft ||
		positionStrategy.positionType === PositionStrategyExternal.TopRight ||
		positionStrategy.positionType === PositionStrategyExternal.TopStart
	) tooltipPosition = {
		marginBottom: (
			childViewportPosition.marginBottom +
			childViewportPosition.height
		),
		paddingBottom: positionStrategy.marginBottom
	};

	// Catchall for any invalid position strategies
	if (!tooltipPosition) return { isValid: true, position: {} };

	return {
		isValid: (
			(
				(tooltipPosition.marginBottom ?? 0) +
				(tooltipPosition.paddingBottom ?? 0) -
				(overlayPortalMargin ?? 0)
			) >= 0 &&
			(
				(tooltipPosition.marginBottom ?? 0) +
				(tooltipPosition.paddingBottom ?? 0) +
				tooltipDimensions.height +
				(overlayPortalMargin ?? 0)
			) <= overlayPortalViewportPosition.height
		),
		position: tooltipPosition
	};
}

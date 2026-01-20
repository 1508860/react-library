import {
	PositionStrategyExternal,
	type DimensionsPx,
	type IViewportPosition,
	type PositionStrategyExternalAll,
	type SizePx
} from "@react-library/common";

import type { TooltipPositionRight } from "../../../shared/types/position/tooltip-position-right.type";
import type { ValidTooltipPosition } from "../../types/valid-tooltip-position.type";

/**
 * Resolve if a tooltip position is valid and the position of the tooltip right position
 * @param positionStrategy
 * @param childViewportPosition
 * @param overlayPortalViewportPosition
 * @param overlayPortalMargin
 * @param tooltipDimensions
 */
export function resolveValidTooltipPositionRight(
	positionStrategy: PositionStrategyExternalAll<SizePx, SizePx>,
	childViewportPosition: IViewportPosition,
	overlayPortalViewportPosition: IViewportPosition,
	overlayPortalMargin: SizePx | undefined,
	tooltipDimensions: DimensionsPx
): ValidTooltipPosition<TooltipPositionRight> {

	let tooltipPosition: TooltipPositionRight | null = null;

	if (
		positionStrategy.positionType === PositionStrategyExternal.BottomStart ||
		positionStrategy.positionType === PositionStrategyExternal.TopStart
	) tooltipPosition = {
		marginLeft: childViewportPosition.marginLeft
	};

	if (
		positionStrategy.positionType === PositionStrategyExternal.BottomCenter ||
		positionStrategy.positionType === PositionStrategyExternal.TopCenter
	) tooltipPosition = {
		marginLeft: (
			childViewportPosition.marginLeft +
			(childViewportPosition.width / 2) -
			(tooltipDimensions.width / 2)
		)
	};

	if (
		positionStrategy.positionType === PositionStrategyExternal.BottomRight ||
		positionStrategy.positionType === PositionStrategyExternal.RightCenter ||
		positionStrategy.positionType === PositionStrategyExternal.RightEnd ||
		positionStrategy.positionType === PositionStrategyExternal.RightStart ||
		positionStrategy.positionType === PositionStrategyExternal.TopRight
	) tooltipPosition = {
		marginLeft: (
			childViewportPosition.marginLeft +
			childViewportPosition.width
		),
		paddingLeft: positionStrategy.marginLeft
	};

	// Catchall for any invalid position strategies
	if (!tooltipPosition) return { isValid: true, position: {} };

	return {
		isValid: (
			(
				(tooltipPosition.marginLeft ?? 0) +
				(tooltipPosition.paddingLeft ?? 0) -
				(overlayPortalMargin ?? 0)
			) >= 0 &&
			(
				(tooltipPosition.marginLeft ?? 0) +
				(tooltipPosition.paddingLeft ?? 0) +
				tooltipDimensions.width +
				(overlayPortalMargin ?? 0)
			) <= overlayPortalViewportPosition.width
		),
		position: tooltipPosition
	};
}

import {
	useCallback,
	useEffect, useRef, useState
} from "react";

import {
	resolveElementViewportPositionPx,
	type DimensionsPx,
	type SizePx,
	type ViewportPositionPx
} from "@react-library/common";

import type { TooltipPosition } from "../../shared/types/position/tooltip-position.type";
import type { TooltipPositionStrategiesExternal } from "../types/tooltip-position-strategies-external.type";
import { isTooltipPositionEqual } from "../functions/is-tooltip-position-equal.function";
import { mapFromTooltipPositionBottom } from "../functions/map-from-tooltip-position/map-from-tooltip-position-bottom.function";
import { mapFromTooltipPositionLeft } from "../functions/map-from-tooltip-position/map-from-tooltip-position-left.function";
import { mapFromTooltipPositionRight } from "../functions/map-from-tooltip-position/map-from-tooltip-position-right.function";
import { mapFromTooltipPositionTop } from "../functions/map-from-tooltip-position/map-from-tooltip-position-top.function";
import { resolveValidTooltipPositionBottom } from "../functions/resolve-valid-tooltip-position/resolve-valid-tooltip-position-bottom.function";
import { resolveValidTooltipPositionLeft } from "../functions/resolve-valid-tooltip-position/resolve-valid-tooltip-position-left.function";
import { resolveValidTooltipPositionRight } from "../functions/resolve-valid-tooltip-position/resolve-valid-tooltip-position-right.function";
import { resolveValidTooltipPositionTop } from "../functions/resolve-valid-tooltip-position/resolve-valid-tooltip-position-top.function";

/**
 * Custom hook for resolving the best position strategy for a tooltip based on various element positions in the viewport
 * Tries to apply position strategies in order provided
 * @param showTooltip
 * @param positionStrategies
 * @param overlayPortalViewportPositionPx
 * @param overlayPortalMargin
 * @param tooltipDimensions
 * @param childElement
 */
export function useTooltipPositionState(
	showTooltip: boolean,
	positionStrategies: TooltipPositionStrategiesExternal,
	overlayPortalViewportPositionPx: ViewportPositionPx,
	overlayPortalMargin: SizePx | undefined,
	tooltipDimensions: DimensionsPx,
	childElement: Element | null
): [TooltipPosition | null] {

	const [state, setState] = useState<TooltipPosition | null>(null);
	const stateRef = useRef<TooltipPosition | null>(state);

	const setValidatedState = useCallback(
		(newState: TooltipPosition | null) => {
			if (isTooltipPositionEqual(stateRef.current, newState)) return;
			stateRef.current = newState;
			setState(newState);
		},
		[]
	);

	useEffect(
		() => {
			// Don't calculate position strategy if tooltip hasn't got height and width
			if (
				!showTooltip ||
				!childElement ||
				(tooltipDimensions.height === 0 && tooltipDimensions.width === 0)
			) {
				setValidatedState(null);
				return;
			}

			const positionStrategyArray = Array.isArray(positionStrategies) ? positionStrategies : [positionStrategies];

			const defaultTooltipPosition: TooltipPosition = {
				positionStrategy: positionStrategyArray[0]
			};

			const childViewportPositionPx = resolveElementViewportPositionPx(childElement, overlayPortalViewportPositionPx);

			for (let i = 0; i < positionStrategyArray.length; i++) {
				const currentPositionStrategy = positionStrategyArray[i];

				const validTooltipPositionBottom = resolveValidTooltipPositionBottom(
					currentPositionStrategy,
					childViewportPositionPx,
					overlayPortalViewportPositionPx,
					overlayPortalMargin,
					tooltipDimensions
				);

				const validTooltipPositionLeft = resolveValidTooltipPositionLeft(
					currentPositionStrategy,
					childViewportPositionPx,
					overlayPortalViewportPositionPx,
					overlayPortalMargin,
					tooltipDimensions
				);

				const validTooltipPositionRight = resolveValidTooltipPositionRight(
					currentPositionStrategy,
					childViewportPositionPx,
					overlayPortalViewportPositionPx,
					overlayPortalMargin,
					tooltipDimensions
				);

				const validTooltipPositionTop = resolveValidTooltipPositionTop(
					currentPositionStrategy,
					childViewportPositionPx,
					overlayPortalViewportPositionPx,
					overlayPortalMargin,
					tooltipDimensions
				);

				if (validTooltipPositionBottom.isValid && validTooltipPositionLeft.isValid && validTooltipPositionRight.isValid && validTooltipPositionTop.isValid) {
					const tooltipPosition: TooltipPosition = {
						positionStrategy: currentPositionStrategy
					};
					mapFromTooltipPositionBottom(tooltipPosition, validTooltipPositionBottom.position);
					mapFromTooltipPositionLeft(tooltipPosition, validTooltipPositionLeft.position);
					mapFromTooltipPositionRight(tooltipPosition, validTooltipPositionRight.position);
					mapFromTooltipPositionTop(tooltipPosition, validTooltipPositionTop.position);
					setValidatedState(tooltipPosition);
					return;
				} else if (i === 0) {
					// Capture first position strategy position in case a valid position can't be found
					mapFromTooltipPositionBottom(defaultTooltipPosition, validTooltipPositionBottom.position);
					mapFromTooltipPositionLeft(defaultTooltipPosition, validTooltipPositionLeft.position);
					mapFromTooltipPositionRight(defaultTooltipPosition, validTooltipPositionRight.position);
					mapFromTooltipPositionTop(defaultTooltipPosition, validTooltipPositionTop.position);
				}
			}

			// Default to the first position strategy if one hasn't been resolved
			setValidatedState(defaultTooltipPosition);
		},
		[
			showTooltip,
			positionStrategies,
			overlayPortalViewportPositionPx,
			overlayPortalMargin,
			tooltipDimensions,
			childElement,
			setValidatedState
		]
	);

	return [state];
}

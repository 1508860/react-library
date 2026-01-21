import { useCallback, useEffect, useState, type ReactNode, type RefCallback } from "react";
import { createPortal } from "react-dom";

import {
	ResizeObserverDebounce,
	useResizeObserverState
} from "@react-library/common";

import {
	useOverlayPortalContext,
	useOverlayPortalViewportPositionContext
} from "../../overlay-portal";

import { TooltipBackdrop } from "../backdrop/tooltip-backdrop";
import type { TooltipInteraction } from "../shared/enums/tooltip-interaction.type";
import { TooltipArrow } from "../tooltip-arrow/tooltip-arrow";
import { resolveTooltipChildProps } from "./functions/resolve-tooltip-child-props.function";
import { useTooltipPositionState } from "./hooks/use-tooltip-position-state.hook";
import { tooltipContainerStyle } from "./styles/tooltip-container-style.function";
import { TOOLTIP_STYLE } from "./styles/tooltip-style.const";
import type { TooltipChildProps } from "./types/tooltip-child-props.type";
import type { TooltipProps } from "./types/tooltip-props.type";

/**
 * Tooltip component that projects child elements in to a tooltip portal
 * @param props
 */
export function Tooltip<
	TTooltipInteraction extends TooltipInteraction,
	TChildElement extends Element,
	TContent extends ReactNode
>(
	props: TooltipProps<TTooltipInteraction, TChildElement, TContent>
) {

	// Overlay portal
	const overlayPortal = useOverlayPortalContext();
	const overlayPortalViewportPosition = useOverlayPortalViewportPositionContext();

	// Show tooltip
	const [showTooltip, setShowTooltip] = useState<boolean>(false);
	const onShow = useCallback(
		() => {
			if (props.onShow) props.onShow();
			setShowTooltip(true);
		},
		[props]
	);
	const onDismiss = useCallback(
		() => {
			if (props.onDismiss) props.onDismiss();
			setShowTooltip(false);
		},
		[props]
	);

	// Elements
	const [childElement, setChildElement] = useState<TChildElement | null>(null);
	const setChildElementCallback = useCallback<RefCallback<TChildElement | null>>((element) => setChildElement(element), []);
	const [tooltipElement, setTooltipElement] = useState<HTMLDivElement | null>(null);
	const setTooltipElementCallback = useCallback<RefCallback<HTMLDivElement | null>>((element) => setTooltipElement(element), []);

	// Child element props
	const resolveChildProps = useCallback<() => TooltipChildProps<TTooltipInteraction, TChildElement>>(
		() => resolveTooltipChildProps<TTooltipInteraction, TChildElement>(props.tooltipInteractionType, setChildElementCallback, onShow, onDismiss),
		[props.tooltipInteractionType, onShow, onDismiss, setChildElementCallback]
	);
	const [childProps, setChildElementProps] = useState<TooltipChildProps<TTooltipInteraction, TChildElement>>(resolveChildProps());
	useEffect(() => setChildElementProps(resolveChildProps()), [resolveChildProps]);

	// Tooltip resize
	const [tooltipDimensions] = useResizeObserverState(showTooltip, true, tooltipElement, "border-box", ResizeObserverDebounce.None);

	// Tooltip position
	const [tooltipPosition] = useTooltipPositionState(
		showTooltip,
		props.positionStrategy,
		overlayPortalViewportPosition,
		props.overlayPortalMargin,
		tooltipDimensions,
		childElement
	);

	return (<>
		{props.children(childProps)}
		{
			(props.isDisabled || !showTooltip) ?
				<></> :
				createPortal(
					(
						<TooltipBackdrop onDismiss={onDismiss} tooltipInteractionType={props.tooltipInteractionType}>
							<div style={tooltipContainerStyle(tooltipPosition)}>
								{
									!props.tooltipArrowContent ? <></> :
										<TooltipArrow
											content={props.tooltipArrowContent}
											key="tooltip-arrow"
											tooltipPositionStrategy={tooltipPosition?.positionStrategy}
										/>
								}
								<div ref={setTooltipElementCallback} style={TOOLTIP_STYLE}>
									{props.content()}
								</div>
							</div>
						</TooltipBackdrop>
					),
					overlayPortal
				)
		}
	</>);
}

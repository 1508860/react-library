import { useCallback, useEffect, useState, type RefCallback } from "react";
import { createPortal } from "react-dom";

import { useOverlayPortalContext } from "../overlay-portal";

import { TooltipBackdrop } from "./components/backdrop";
import { TooltipContent } from "./components/content";
import { TooltipArrow } from "./components/tooltip-arrow";
import { TooltipContainer } from "./components/tooltip-container";
import { TOOLTIP_CHILD_PROPS_CONTEXT } from "./constants/tooltip-child-props-context.const";
import { TOOLTIP_SHOW_CALLBACK_CONTEXT } from "./constants/tooltip-show-callback-context.const";
import { TOOLTIP_SHOW_CONTEXT } from "./constants/tooltip-show-context.const";
import { useTooltipPositionState } from "./hooks/use-tooltip-position-state.hook";
import type { TooltipChildElement } from "./types/tooltip-child-element.type";
import type { TooltipChildProps } from "./types/tooltip-child-props.type";
import type { TooltipElement } from "./types/tooltip-element.type";
import type { TooltipProps } from "./types/tooltip-props.type";

/**
 * Tooltip component that projects child elements in to a tooltip portal
 * @param props
 */
export function Tooltip(props: TooltipProps) {

	// Overlay portal
	const overlayPortal = useOverlayPortalContext();

	// Show tooltip
	const [showTooltip, setShowTooltip] = useState<boolean>(false);
	const onDismiss = useCallback(() => setShowTooltip(false), []);

	// Tooltip element
	const [tooltipElement, setTooltipElement] = useState<TooltipElement>(null);
	const setTooltipElementCallback = useCallback<RefCallback<TooltipElement>>((element) => setTooltipElement(element), []);

	// Child element
	const [childElement, setChildElement] = useState<TooltipChildElement>(null);
	const setChildElementCallback = useCallback<RefCallback<TooltipChildElement>>((element) => setChildElement(element), []);

	// Child element props
	const resolveChildProps = useCallback<() => TooltipChildProps>(() => ({ ref: setChildElementCallback }), [setChildElementCallback]);
	const [childProps, setChildElementProps] = useState<TooltipChildProps>(resolveChildProps());
	useEffect(() => setChildElementProps(resolveChildProps()), [resolveChildProps]);

	// Tooltip position
	const [tooltipPosition] = useTooltipPositionState(
		showTooltip,
		props.positionStrategies,
		props.overlayPortalMargin,
		tooltipElement,
		childElement
	);

	return (
		<TOOLTIP_CHILD_PROPS_CONTEXT value={childProps}>
			<TOOLTIP_SHOW_CONTEXT value={showTooltip}>
				<TOOLTIP_SHOW_CALLBACK_CONTEXT value={setShowTooltip}>
					{props.children}
					{
						(props.isDisabled || !showTooltip) ?
							<></> :
							createPortal(
								(
									<>
										<TooltipBackdrop
											key="tooltip-backdrop"
											onDismiss={onDismiss}
											show={props.showBackdrop}
										/>
										<TooltipContainer
											key="tooltip-container"
											position={tooltipPosition}
										>
											<TooltipArrow
												key="tooltip-arrow"
												positionStrategy={tooltipPosition?.positionStrategy}
											/>
											<TooltipContent
												content={props.content}
												key="tooltip-content"
												ref={setTooltipElementCallback}
											/>
										</TooltipContainer>
									</>
								),
								overlayPortal
							)
					}
				</TOOLTIP_SHOW_CALLBACK_CONTEXT>
			</TOOLTIP_SHOW_CONTEXT>
		</TOOLTIP_CHILD_PROPS_CONTEXT>
	);
}

import { useCallback, useEffect, useState } from "react";

import {
	useDelayBooleanState,
	UseDelayBooleanStateDirection,
	type Callback
} from "@react-library/common";
import {
	TransitionFade,
	TransitionFadeDirection,
	TransitionTiming,
	useTooltipBackdropConfigCallbackContext,
	useTooltipChildPropsContext,
	useTooltipContentCallbackContext,
	useTooltipShowCallbackContext
} from "@react-library/components";

import { TOOLTIP_RICH_TRANSITION_FADE_MS } from "../../../constants/tooltip-rich-transition.const";
import type { TooltipRichChildProps } from "../../../types/tooltip-rich-child-props.type";
import type { TooltipRichContent } from "../../../types/tooltip-rich-content.type";

import { TooltipRichContentContainer } from "../../content-container";

import type { TooltipRichInternalState } from "../types/tooltip-rich-internal-state.type";

/**
 * Resolve the tooltip rich internal content state
 */
export function useTooltipRichInternalState(): TooltipRichInternalState {

	// Tooltip contexts
	const tooltipBackdropConfigCallback = useTooltipBackdropConfigCallbackContext();
	const tooltipChildProps = useTooltipChildPropsContext();
	const tooltipContentCallback = useTooltipContentCallbackContext();
	const tooltipShowCallback = useTooltipShowCallbackContext();

	// Handle show state & delayed show state to allow transitions to play out
	const [show, setShow] = useState<boolean>(() => false);
	const [delayedShow] = useDelayBooleanState(show, UseDelayBooleanStateDirection.ToFalse, TOOLTIP_RICH_TRANSITION_FADE_MS);

	// Set tootlip show state
	useEffect(() => tooltipShowCallback(delayedShow), [tooltipShowCallback, delayedShow]);

	// Tooltip backdrop
	useEffect(
		() => tooltipBackdropConfigCallback(show ? { onDismiss: () => setShow(false) } : undefined),
		[tooltipBackdropConfigCallback, show]
	);

	// Tooltip content
	const [content, setContent] = useState<TooltipRichContent>(() => undefined);

	// Tooltip rich child props
	const resolveTooltipChildProps = useCallback<Callback<TooltipRichChildProps>>(
		() => ({
			onDismiss: () => setShow(false),
			onShow: () => setShow(true),
			ref: tooltipChildProps.ref
		}),
		[tooltipChildProps.ref]
	);
	const [childProps, setChildProps] = useState<TooltipRichChildProps>(() => resolveTooltipChildProps());
	useEffect(() => setChildProps(resolveTooltipChildProps()), [resolveTooltipChildProps]);

	// Handle tooltip content
	useEffect(
		() => {
			if (!delayedShow) {
				tooltipContentCallback(null);
				return;
			}

			tooltipContentCallback(
				<TransitionFade
					direction={show ? TransitionFadeDirection.In : TransitionFadeDirection.Out}
					durationMs={TOOLTIP_RICH_TRANSITION_FADE_MS}
					key="tooltip-rich-container-content"
					timing={TransitionTiming.OvershootInOut}
				>
					<TooltipRichContentContainer content={content} />
				</TransitionFade>
			);
		},
		[content, show, delayedShow, tooltipContentCallback]
	);

	return {
		childProps: childProps,
		setcontent: setContent
	}
}

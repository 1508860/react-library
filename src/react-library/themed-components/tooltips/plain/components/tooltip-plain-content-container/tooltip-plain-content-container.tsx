import { Fragment, useEffect } from "react";

import {
	useDelayBooleanState,
	UseDelayBooleanStateDirection
} from "@react-library/common";
import {
	TransitionFade,
	TransitionFadeDirection,
	TransitionTiming,
	useTooltipContentCallbackContext,
	useTooltipShowCallbackContext
} from "@react-library/components";

import { TOOLTIP_PLAIN_TRANSITION_FADE_MS } from "../../constants/tooltip-plain-transition.const";

import { TooltipPlainContentBody } from "../tooltip-plain-content-body";

import type { TooltipPlainContentContainerProps } from "./types/tooltip-plain-content-container-props.type";

/**
 * Tooltip plain content container component
 * @param props
 */
export function TooltipPlainContentContainer(props: TooltipPlainContentContainerProps) {

	const tooltipContentCallback = useTooltipContentCallbackContext();
	const tooltipShowCallback = useTooltipShowCallbackContext();

	const [showTooltipContent] = useDelayBooleanState(props.show, UseDelayBooleanStateDirection.ToFalse, TOOLTIP_PLAIN_TRANSITION_FADE_MS);

	useEffect(() => tooltipShowCallback(showTooltipContent), [showTooltipContent, tooltipShowCallback]);

	// Set tooltip content
	useEffect(
		() => {
			if (!showTooltipContent) {
				tooltipContentCallback(null);
				return;
			}

			tooltipContentCallback(
				<TransitionFade
					direction={props.show ? TransitionFadeDirection.In : TransitionFadeDirection.Out}
					durationMs={TOOLTIP_PLAIN_TRANSITION_FADE_MS}
					key="tooltip-plain-container-content"
					timing={TransitionTiming.OvershootInOut}
				>
					<TooltipPlainContentBody content={props.content} />
				</TransitionFade>
			);
		},
		[props.content, props.show, tooltipContentCallback, showTooltipContent]
	);

	return (
		<Fragment key="tooltip-plain-container-placeholder" />
	);
}

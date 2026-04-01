import { useCallback, useEffect, useState } from "react";

import type { Callback } from "@react-library/common";
import { useTooltipChildPropsContext } from "@react-library/components";

import { TOOLTIP_PLAIN_CHILD_PROPS_CONTEXT } from "../../constants/tooltip-plain-child-props-context.const";
import type { TooltipPlainChildProps } from "../../types/tooltip-plain-child-props.type";

import { TooltipPlainContentContainer } from "../content-container";

import type { TooltipPlainInternalProps } from "./types/tooltip-plain-internal-props.type";

/**
 * Tooltip plain internal component
 * @param props
 */
export function TooltipPlainInternal(props: TooltipPlainInternalProps) {

	// Tooltip plain show state
	const [showTooltipPlain, setShowTooltipPlain] = useState<boolean>(() => false);

	// Tooltip plain child props state
	const tooltipChildProps = useTooltipChildPropsContext();
	const resolveTooltipChildProps = useCallback<Callback<TooltipPlainChildProps>>(
		() => ({
			onMouseEnter: () => setShowTooltipPlain(true),
			onMouseLeave: () => setShowTooltipPlain(false),
			ref: tooltipChildProps.ref
		}),
		[tooltipChildProps.ref]
	)
	const [tooltipPlainChildProps, setTooltipPlainChildProps] = useState<TooltipPlainChildProps>(() => resolveTooltipChildProps());
	useEffect(() => setTooltipPlainChildProps(resolveTooltipChildProps()), [resolveTooltipChildProps]);

	return (
		<TOOLTIP_PLAIN_CHILD_PROPS_CONTEXT value={tooltipPlainChildProps}>
			<TooltipPlainContentContainer
				content={props.content}
				key="tooltip-plain-content-container"
				show={showTooltipPlain}
			/>
			{props.children}
		</TOOLTIP_PLAIN_CHILD_PROPS_CONTEXT>
	);
}

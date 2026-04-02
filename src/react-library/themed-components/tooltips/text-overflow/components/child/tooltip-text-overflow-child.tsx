import { useCallback, useState } from "react";

import { isElementOvervlowingHorizontal } from "@react-library/common";

import {
	useTooltipPlainChildPropsContext,
	type TooltipPlainEventElement
} from "../../../plain";

import { tooltipTextOverflowChildStyle } from "./styles/tooltip-text-overflow-child-style.function";
import { TOOLTIP_TEXT_OVERFLOW_CHILD_TEXT_STYLE } from "./styles/tooltip-text-overflow-child-text.const";
import type { TooltipTextOverflowChildProps } from "./types/tooltip-text-overflow-child-props.type";

/**
 * Tooltip text overflow child component
 * @param props
 */
export function TooltipTextOverflowChild(props: TooltipTextOverflowChildProps) {

	const tooltipPlainChildProps = useTooltipPlainChildPropsContext();

	// Store local reference to inner span element
	const [innerElementState, setInnerElementState] = useState<Element | null>(() => null);

	// Determine if tooltip should show
	const handleOnMouseEnter = useCallback(
		(element: React.MouseEvent<TooltipPlainEventElement>) => {
			if (!innerElementState || !isElementOvervlowingHorizontal(innerElementState)) return;
			tooltipPlainChildProps.onMouseEnter(element);
		},
		[tooltipPlainChildProps, innerElementState]
	);

	return (
		<div
			onMouseEnter={handleOnMouseEnter}
			onMouseLeave={tooltipPlainChildProps.onMouseLeave}
			ref={tooltipPlainChildProps.ref}
			style={tooltipTextOverflowChildStyle(props.width)}
		>
			<span
				ref={setInnerElementState}
				style={TOOLTIP_TEXT_OVERFLOW_CHILD_TEXT_STYLE}
			>
				{props.content}
			</span>
		</div>
	);
}

/**
 * TODO
 * 
 * - Check resize of div or change to content and calculate if tooltip needs to be shown when hovered
 * - Add in wrapper callbacks to perform this check when hovering
 * - Maybe we don't need resize check, just simply check on mouse enter if we need the tooltip
 */

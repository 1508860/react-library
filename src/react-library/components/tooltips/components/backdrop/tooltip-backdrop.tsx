import { Fragment, useCallback } from "react";

import { targetEvent } from "@react-library/common";

import { TooltipInteraction } from "../../enums/tooltip-interaction.type";
import { TOOLTIP_BACKDROP_STYLE } from "./styles/tooltip-backdrop-style.const";
import type { TooltipBackdropProps } from "./types/tooltip-backdrop-props.type";

/**
 * Tooltip backdrop
 * @param props
 */
export function TooltipBackdrop(props: TooltipBackdropProps) {

	const handleOnDismiss = useCallback(
		(event: React.MouseEvent) => targetEvent(event, props.onDismiss),
		[props.onDismiss]
	);

	if (props.tooltipInteractionType === TooltipInteraction.Hover) return (<Fragment key="hover" />);

	return (
		<div
			key="click"
			onClick={handleOnDismiss}
			style={TOOLTIP_BACKDROP_STYLE}
		/>
	);
}

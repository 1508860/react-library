import { Fragment } from "react";

import { targetEvent } from "@react-library/common";

import { TooltipInteraction } from "../shared/enums/tooltip-interaction.type";
import { TOOLTIP_BACKDROP_STYLE } from "./styles/tooltip-backdrop-style.const";
import type { TooltipBackdropProps } from "./types/tooltip-backdrop-props.type";

/**
 * Tooltip backdrop
 * @param props
 */
export function TooltipBackdrop(props: TooltipBackdropProps) {

	const clickCallback = (event: React.MouseEvent) => targetEvent(event, props.onDismiss);

	if (props.tooltipInteractionType === TooltipInteraction.Hover) return (<Fragment key="hover" />);

	return (
		<div
			key="click"
			onClick={clickCallback}
			style={TOOLTIP_BACKDROP_STYLE}
		/>
	);
}

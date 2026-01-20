import { targetEvent } from "@react-library/common";

import { TooltipInteraction } from "../shared/enums/tooltip-interaction.type";
import { tooltipBackdropStyle } from "./styles/tooltip-backdrop-style.function";
import type { TooltipBackdropProps } from "./types/tooltip-backdrop-props.type";

/**
 * Tooltip backdrop
 * @param props
 */
export function TooltipBackdrop(props: TooltipBackdropProps) {

	const clickCallback = (event: React.MouseEvent) => targetEvent(event, props.onDismiss);

	return (<>
		{
			props.tooltipInteractionType === TooltipInteraction.Hover ?
				<>
					{props.children}
				</>
				:
				<div id="tooltip-backdrop" onClick={clickCallback} style={tooltipBackdropStyle()}>
					{props.children}
				</div>
		}
	</>);
}

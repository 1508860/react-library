import type { RefCallback } from "react";

import { TooltipInteraction } from "../enums/tooltip-interaction.type";
import type {
	TooltipChildProps,
	TooltipChildHoverProps,
	TooltipChildClickProps
} from "../types/tooltip-child-props.type";

/**
 * Function for resolving the props of the tooltip child element
 */
export function resolveTooltipChildProps(
	tooltipInteractionType: TooltipInteraction,
	refCallback: RefCallback<Element>,
	onShow: () => void,
	onDismiss: () => void
): TooltipChildProps {
	if (tooltipInteractionType === TooltipInteraction.Hover) {
		const result: TooltipChildHoverProps = {
			childProps: {
				onMouseEnter: onShow,
				onMouseLeave: onDismiss,
				ref: refCallback
			},
			tooltipInteractionType: TooltipInteraction.Hover
		};
		return result;
	}

	const result: TooltipChildClickProps = {
		childProps: {
			onClick: onShow,
			ref: refCallback
		},
		tooltipInteractionType: TooltipInteraction.Click
	};
	return result;
}

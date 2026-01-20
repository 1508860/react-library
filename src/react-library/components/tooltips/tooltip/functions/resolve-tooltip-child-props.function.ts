import type { RefCallback } from "react";

import { TooltipInteraction } from "../../shared/enums/tooltip-interaction.type";
import type {
	TooltipChildClickProps,
	TooltipChildHoverProps,
	TooltipChildProps
} from "../types/tooltip-child-props.type";

/**
 * Function for resolving the props of the tooltip child element
 */
export function resolveTooltipChildProps<
	TTooltipInteraction extends TooltipInteraction,
	TChildElement extends Element
>(
	tooltipInteractionType: TTooltipInteraction,
	refCallback: RefCallback<TChildElement>,
	onShow: () => void,
	onDismiss: () => void
): TooltipChildProps<TTooltipInteraction, TChildElement> {
	if (tooltipInteractionType === TooltipInteraction.Hover) {
		const result: TooltipChildHoverProps<TChildElement> = {
			props: {
				onMouseEnter: onShow,
				onMouseLeave: onDismiss,
				ref: refCallback
			},
			tooltipInteractionType: TooltipInteraction.Hover
		};
		return result as TooltipChildProps<TTooltipInteraction, TChildElement>;
	}

	const result: TooltipChildClickProps<TChildElement> = {
		props: {
			onClick: onShow,
			ref: refCallback
		},
		tooltipInteractionType: TooltipInteraction.Click
	};
	return result as TooltipChildProps<TTooltipInteraction, TChildElement>;
}

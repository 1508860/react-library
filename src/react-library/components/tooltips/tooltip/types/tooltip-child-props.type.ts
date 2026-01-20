import type { IOnClick, IOnMouseEnter, IOnMouseLeave, IProps, IRefCallback } from "@react-library/common";

import { TooltipInteraction } from "../../shared/enums/tooltip-interaction.type";
import type { TooltipInteractionProps } from "../../shared/types/tooltip-interaction-props.type";

/**
 * Define base props to be passed to the child element of the tooltip
 */
type TooltipChildPropsBase<TTooltipInteraction extends TooltipInteraction, TProps> = (
	IProps<TProps> &
	TooltipInteractionProps<TTooltipInteraction>
);

/**
 * Define click based props to be passed to the child element of the tooltip
 */
export type TooltipChildClickProps<TChildElement extends Element> = (
	TooltipChildPropsBase<
		"click",
		(
			IOnClick<TChildElement> &
			IRefCallback<TChildElement | null>
		)
	>
);

/**
 * Define hover based props to be passed to the child element of the tooltip
 */
export type TooltipChildHoverProps<TChildElement extends Element> = (
	TooltipChildPropsBase<
		"hover",
		(
			IOnMouseEnter<TChildElement> &
			IOnMouseLeave<TChildElement> &
			IRefCallback<TChildElement | null>
		)
	>
);

/**
 * Define props to be passed to the child element of the tooltip
 */
export type TooltipChildProps<TTooltipInteraction extends TooltipInteraction, TChildElement extends Element> = (
	TTooltipInteraction extends typeof TooltipInteraction.Click ?
	TooltipChildClickProps<TChildElement> :
	TooltipChildHoverProps<TChildElement>
);

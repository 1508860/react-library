import type { IChildProps, IOnClick, IOnMouseEnter, IOnMouseLeave, IRefCallback } from "@react-library/common";

import { TooltipInteraction } from "../../shared/enums/tooltip-interaction.type";
import type { TooltipInteractionProps } from "../../shared/types/tooltip-interaction-props.type";

/**
 * Define base props to be passed to the child element of the tooltip
 */
type TooltipChildPropsBase<TTooltipInteraction extends TooltipInteraction> = (
	TooltipInteractionProps<TTooltipInteraction>
);

/**
 * Define click based props to be passed to the child element of the tooltip
 */
export type TooltipChildClickProps = (
	IChildProps<(
		IOnClick<Element> &
		IRefCallback<Element | null>
	)> &
	TooltipChildPropsBase<typeof TooltipInteraction.Click>
);

/**
 * Define hover based props to be passed to the child element of the tooltip
 */
export type TooltipChildHoverProps = (
	IChildProps<(
		IOnMouseEnter<Element> &
		IOnMouseLeave<Element> &
		IRefCallback<Element | null>
	)> &
	TooltipChildPropsBase<typeof TooltipInteraction.Hover>
);

/**
 * Define props to be passed to the child element of the tooltip
 */
export type TooltipChildProps = (
	TooltipChildClickProps |
	TooltipChildHoverProps
);

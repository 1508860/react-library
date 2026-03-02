import type { TooltipInteraction } from "../enums/tooltip-interaction.type";
import type { TooltipChildren } from "./tooltip-children.type";
import type { TooltipContent } from "./tooltip-content.type";
import type { TooltipInteractionProps } from "./tooltip-interaction-props.type";
import type { TooltipIsDisabled } from "./tooltip-is-disabled.type";
import type { TooltipOverlayPortalMargin } from "./tooltip-overlay-portal-margin.type";
import type { TooltipPositionStrategiesProps } from "./tooltip-position-strategies-props.type";

/**
 * Props for the tooltip component
 */
export type TooltipProps = (
	TooltipChildren &
	TooltipContent &
	TooltipInteractionProps<TooltipInteraction> &
	Partial<TooltipIsDisabled> &
	Partial<TooltipOverlayPortalMargin> &
	TooltipPositionStrategiesProps
);

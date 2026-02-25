import type { TooltipInteraction } from "../../shared/enums/tooltip-interaction.type";
import type { TooltipChildren } from "../../shared/types/tooltip-children.type";
import type { TooltipContent } from "../../shared/types/tooltip-content.type";
import type { TooltipInteractionProps } from "../../shared/types/tooltip-interaction-props.type";
import type { TooltipIsDisabled } from "../../shared/types/tooltip-is-disabled.type";
import type { TooltipOverlayPortalMargin } from "../../shared/types/tooltip-overlay-portal-margin.type";
import type { TooltipPositionStrategiesProps } from "../../shared/types/tooltip-position-strategies-props.type";

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

import type { TooltipInteraction } from "../../../enums/tooltip-interaction.type";
import type { TooltipInteractionProps } from "../../../types/tooltip-interaction-props.type";
import type { TooltipOnDismiss } from "../../../types/tooltip-on-dismiss.type";

/**
 * Tooltip backdrop props
*/
export type TooltipBackdropProps = (
	TooltipInteractionProps<TooltipInteraction> &
	TooltipOnDismiss
);

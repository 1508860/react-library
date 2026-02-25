import type { TooltipInteraction } from "../../shared/enums/tooltip-interaction.type";
import type { TooltipInteractionProps } from "../../shared/types/tooltip-interaction-props.type";
import type { TooltipOnDismiss } from "../../shared/types/tooltip-on-dismiss.type";

/**
 * Tooltip backdrop props
*/
export type TooltipBackdropProps = (
	TooltipInteractionProps<TooltipInteraction> &
	TooltipOnDismiss
);

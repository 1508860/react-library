import type { ITooltipInteractionType } from "@react-library/common";

import type { TooltipInteraction } from "../enums/tooltip-interaction.type";

/**
 * Describes types of interaction for a toolip
 */
export type TooltipInteractionProps<TTooltipInteraction extends TooltipInteraction> = ITooltipInteractionType<TTooltipInteraction>;

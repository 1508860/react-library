/**
 * Types of interaction for a toolip
 */
export const TooltipInteraction = {
	Click: "click",
	Hover: "hover"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TooltipInteraction}
 */
export type TooltipInteraction = (typeof TooltipInteraction)[keyof typeof TooltipInteraction];

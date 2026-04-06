/**
 * Tooltip rich style to determine what cntent is in the the tooltip
 */
export const TooltipRichStyle = {
	All: "all",
	BodyAndAction: "body-and-action",
	HeaderAndBody: "header-and-body"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TooltipRichStyle}
 */
export type TooltipRichStyle = (typeof TooltipRichStyle)[keyof typeof TooltipRichStyle];

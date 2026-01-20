/**
 * Progress indicator position
 */
export const ProgressIndicatorPosition = {
	Fill: "fill",
	FillHorizontal: "fill-horizontal",
	None: "none"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ProgressIndicatorPosition}
 */
export type ProgressIndicatorPosition = (typeof ProgressIndicatorPosition)[keyof typeof ProgressIndicatorPosition];

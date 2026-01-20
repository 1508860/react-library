/**
 * Loading indicator position
 */
export const LoadingIndicatorPosition = {
	Fill: "fill",
	FillHorizontal: "fill-horizontal",
	None: "none",
} as const satisfies Record<string, string>;

/**
 * Type for {@link LoadingIndicatorPosition}
 */
export type LoadingIndicatorPosition = (typeof LoadingIndicatorPosition)[keyof typeof LoadingIndicatorPosition];

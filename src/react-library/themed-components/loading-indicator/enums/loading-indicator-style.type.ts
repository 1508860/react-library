/**
 * Loading indicator styles
 */
export const LoadingIndicatorStyle = {
	Contained: "contained",
	Default: "default"
} as const satisfies Record<string, string>;

/**
 * Type for {@link LoadingIndicatorStyle}
 */
export type LoadingIndicatorStyle = (typeof LoadingIndicatorStyle)[keyof typeof LoadingIndicatorStyle];

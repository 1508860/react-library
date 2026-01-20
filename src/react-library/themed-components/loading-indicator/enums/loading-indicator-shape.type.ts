/**
 * Loading indicator shape
 */
export const LoadingIndicatorShape = {
	Cookie3: 3,
	Cookie4: 4,
	Cookie5: 5,
	Cookie6: 6,
} as const satisfies Record<string, number>;

/**
 * Type for {@link LoadingIndicatorShape}
 */
export type LoadingIndicatorShape = (typeof LoadingIndicatorShape)[keyof typeof LoadingIndicatorShape];

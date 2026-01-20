/**
 * Progress indicator shape
 */
export const ProgressIndicatorShape = {
	Circle: "circle",
	Flat: "flat"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ProgressIndicatorShape}
 */
export type ProgressIndicatorShape = (typeof ProgressIndicatorShape)[keyof typeof ProgressIndicatorShape];

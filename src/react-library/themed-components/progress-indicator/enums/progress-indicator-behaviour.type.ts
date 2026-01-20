/**
 * Progress indicator behaviour
 */
export const ProgressIndicatorBehaviour = {
	Determinate: "determinate",
	Indeterminate: "indeterminate"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ProgressIndicatorBehaviour}
 */
export type ProgressIndicatorBehaviour = (typeof ProgressIndicatorBehaviour)[keyof typeof ProgressIndicatorBehaviour];

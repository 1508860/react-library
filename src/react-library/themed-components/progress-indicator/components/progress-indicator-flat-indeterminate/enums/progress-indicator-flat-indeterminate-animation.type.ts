/**
 * Progress indicator position
 */
export const ProgressIndicatorFlatIndeterminateAnimation = {
	Active: "react-library-themed-components-progress-indicator-flat-indeterminate-active",
	InactiveStart: "react-library-themed-components-progress-indicator-flat-indeterminate-inactive-start",
	InactiveEnd: "react-library-themed-components-progress-indicator-flat-indeterminate-inactive-end"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ProgressIndicatorFlatIndeterminateAnimation}
 */
export type ProgressIndicatorFlatIndeterminateAnimation = (typeof ProgressIndicatorFlatIndeterminateAnimation)[keyof typeof ProgressIndicatorFlatIndeterminateAnimation];

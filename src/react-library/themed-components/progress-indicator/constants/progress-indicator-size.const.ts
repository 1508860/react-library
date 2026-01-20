import type { ArrayMinLength2, ScalePercent } from "@react-library/common";

/**
 * Describes the progress indicator circle minimum size for an indeterminate behaviour
 */
const PROGRESS_INDICATOR_SIZE_CIRCLE_INDETERMINATE_SCALE_PERCENT_MIN: ScalePercent = 20;

/**
 * Describes the progress indicator circle maximum size for an indeterminate behaviour
 */
const PROGRESS_INDICATOR_SIZE_CIRCLE_INDETERMINATE_SCALE_PERCENT_MAX: ScalePercent = 80;

/**
 * Describes the progress indicator circle sizes for an indeterminate behaviour
 */
export const PROGRESS_INDICATOR_SIZE_CIRCLE_INDETERMINATE_SCALE_PERCENT_ALL: ArrayMinLength2<ScalePercent> =
	[
		PROGRESS_INDICATOR_SIZE_CIRCLE_INDETERMINATE_SCALE_PERCENT_MIN,
		PROGRESS_INDICATOR_SIZE_CIRCLE_INDETERMINATE_SCALE_PERCENT_MAX
	];

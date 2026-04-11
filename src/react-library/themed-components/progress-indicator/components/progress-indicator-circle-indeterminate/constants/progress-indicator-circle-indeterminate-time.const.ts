import {
	UseArrayIncrementDirection,
	type UseArrayIncrementStateProps
} from "@react-library/common";

import {
	PROGRESS_INDICATOR_INDETERMINATE_CYCLE_DURATION_MS
} from "../../../constants/progress-indicator-shape-time.const";

/**
 * Defines {@link UseArrayIncrementStateProps} for the progress indicator circle indeterminate shape
 */
export const PROGRESS_INDICATOR_CIRCLE_INDETERMINATE_SHAPE_ARRAY_INCREMENT_STATE_PROPS: UseArrayIncrementStateProps = {
	intervalProps: {
		direction: UseArrayIncrementDirection.Forwards,
		intervalMs: PROGRESS_INDICATOR_INDETERMINATE_CYCLE_DURATION_MS
	}
};

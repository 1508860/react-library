import {
	UseArrayIncrementDirection,
	type UseArrayIncrementStateProps
} from "@react-library/common";

/**
 * Describes interval time for the loading indicator shape to change
 */
export const LOADING_INDICATOR_SHAPE_TIME_INTERVAL_MS: number = 1000;

/**
 * Describes transition time for the loading indicator shape to change
 */
export const LOADING_INDICATOR_SHAPE_TIME_TRANSITION_MS: number = LOADING_INDICATOR_SHAPE_TIME_INTERVAL_MS / 2;

/**
 * Defines {@link UseArrayIncrementStateProps} for the loading indicator shape
 */
export const LOADING_INDICATOR_SHAPE_ARRAY_INCREMENT_STATE_PROPS: UseArrayIncrementStateProps = {
	intervalProps: {
		direction: UseArrayIncrementDirection.Forwards,
		intervalMs: LOADING_INDICATOR_SHAPE_TIME_INTERVAL_MS
	}
};

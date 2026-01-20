import type { Property } from "csstype";

import { StyleCubicBezier } from "@react-library/common";

/**
 * Describes interval time for the loading indicator shape to change
 */
export const LOADING_INDICATOR_SHAPE_TIME_INTERVAL_MS: number = 1000;

/**
 * Describes transition time for the loading indicator shape to change
 */
export const LOADING_INDICATOR_SHAPE_TIME_TRANSITION_MS: number = LOADING_INDICATOR_SHAPE_TIME_INTERVAL_MS / 2;

/**
 * Describes transition timing function for the loading indicator shape to change size
 */
export const LOADING_INDICATOR_SHAPE_TIME_TRANSITION_FUNCTION_SIZE:  StyleCubicBezier = new StyleCubicBezier(0.3, 0.8, 0.3, 1.9);

/**
 * Describes transition timing function for the loading indicator shape to change when rotating
 */
export const LOADING_INDICATOR_SHAPE_TIME_TRANSITION_FUNCTION_ROTATE: Property.TransitionTimingFunction = "ease-in-out";

/**
 * Describes transition segments for animating the shape when it changes
 */
export const LOADING_INDICATOR_SHAPE_TIME_TRANSITION: Property.Transition = [
	`height ${LOADING_INDICATOR_SHAPE_TIME_TRANSITION_MS}ms ${LOADING_INDICATOR_SHAPE_TIME_TRANSITION_FUNCTION_SIZE.toStyleCubicBezierString()}`,
	`width ${LOADING_INDICATOR_SHAPE_TIME_TRANSITION_MS}ms ${LOADING_INDICATOR_SHAPE_TIME_TRANSITION_FUNCTION_SIZE.toStyleCubicBezierString()}`,
	`transform ${LOADING_INDICATOR_SHAPE_TIME_TRANSITION_MS}ms ${LOADING_INDICATOR_SHAPE_TIME_TRANSITION_FUNCTION_ROTATE}`
].reduce((a, b) => `${a}, ${b}`)

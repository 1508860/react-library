import type { CSSProperties } from "react";

import type { Colour, SizePx } from "@react-library/common";

import { PROGRESS_INDICATOR_INDETERMINATE_CYCLE_DURATION_MS } from "../constants/progress-indicator-shape-time.const";
import type { ProgressIndicatorFlatIndeterminateAnimation } from "../enums/progress-indicator-flat-indeterminate-animation.type";

/**
 * Resolve progress indicator flat indeterminate style based on parameters
 * @param animation
 * @param colour
 */
export function progressIndicatorFlatIndeterminateStyle(
	animation: ProgressIndicatorFlatIndeterminateAnimation,
	colour: Colour
): CSSProperties {

	const height: SizePx = 4;
	const borderRadius: SizePx = height / 2;

	return {
		animationDuration: `${PROGRESS_INDICATOR_INDETERMINATE_CYCLE_DURATION_MS}ms`,
		animationIterationCount: "infinite",
		animationName: animation,
		animationTimingFunction: "ease-in-out",
		backgroundColor: colour.toColourString(),
		borderRadius: borderRadius,
		flexShrink: 0,
		height: height
	};
}

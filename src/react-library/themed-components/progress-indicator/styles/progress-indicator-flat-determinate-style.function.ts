import type { CSSProperties } from "react";

import {
	SCALE_PERCENT_MIN,
	type Colour,
	type ScalePercent,
	type SizePx
} from "@react-library/common";

/**
 * Resolve progress indicator flat determinate style based on parameters
 * @param scalePercent
 * @param colour
 */
export function progressIndicatorFlatDeterminateStyle(
	scalePercent: ScalePercent,
	colour: Colour
): CSSProperties {

	const height: SizePx = 4;
	const borderRadius: SizePx = height / 2;

	const hide: boolean = scalePercent === SCALE_PERCENT_MIN;

	return {
		borderRadius: borderRadius,
		backgroundColor: colour.toColourString(),
		display: hide ? "none" : undefined,
		flexGrow: scalePercent,
		flexShrink: 0,
		height: height
	};
}

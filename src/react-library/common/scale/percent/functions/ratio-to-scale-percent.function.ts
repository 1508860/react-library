import type { IRatio } from "../../../interfaces";
import { SCALE_PERCENT_ALL } from "../constants/scale-percent-all.const";
import { SCALE_PERCENT_MAX } from "../constants/scale-percent-max.const";
import { SCALE_PERCENT_MIN } from "../constants/scale-percent-min.const";

import type { ScalePercent } from "../enums/scale-percent.type";

/**
 * Converts a {@link IRatio} to a {@link ScalePercent}
 * Note: ratios below 0 are treated as 0% and ratios above 100 are treated as 100%
 * @param ratio
 */
export function ratioToScalePercent(ratio: IRatio): ScalePercent {

	const ratioValue: number = (ratio.numerator / ratio.denominator) * SCALE_PERCENT_MAX;

	for (const scalePercent of SCALE_PERCENT_ALL) {
		if ((ratioValue >= scalePercent - 0.5) && (ratioValue < scalePercent + 0.5)) return scalePercent;
	}

	return ratioValue < SCALE_PERCENT_MIN ? SCALE_PERCENT_MIN : SCALE_PERCENT_MAX;
}

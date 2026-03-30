import type { IRatio } from "../../../interfaces";
import { SCALE_DEGREES_ALL } from "../constants/scale-degrees-all.const";
import { SCALE_DEGREES_MAX } from "../constants/scale-degrees-max.const";
import { SCALE_DEGREES_MIN } from "../constants/scale-degrees-min.const";

import type { ScaleDegrees } from "../enums/scale-degrees.type";

/**
 * Converts a {@link IRatio} to a {@link ScaleDegrees}
 * Note: ratios below 0 are treated as 0% and ratios above 100 are treated as 100%
 * @param ratio
 */
export function ratioToScaleDegrees(ratio: IRatio): ScaleDegrees {

	const ratioValue: number = (ratio.numerator / ratio.denominator) * SCALE_DEGREES_MAX;

	for (const scaleDegrees of SCALE_DEGREES_ALL) {
		if ((ratioValue >= scaleDegrees - 0.5) && (ratioValue < scaleDegrees + 0.5)) return scaleDegrees;
	}

	return ratioValue < SCALE_DEGREES_MIN ? SCALE_DEGREES_MIN : SCALE_DEGREES_MAX;
}

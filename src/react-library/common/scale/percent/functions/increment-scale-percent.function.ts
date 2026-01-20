import { SCALE_PERCENT_MAX } from "../constants/scale-percent-max.const";
import type { ScalePercent } from "../enums/scale-percent.type";
import { ratioToScalePercent } from "./ratio-to-scale-percent.function";

/**
 * Increment a {@link scalePercent} by {@link incrementBy}
 * Note: ratios below 0 are treated as 0% and ratios above 100 are treated as 100%
 * Note: a negative {@link incrementBy} will decrement {@link scalePercent}
 * @param scalePercent
 * @param incrementBy
 */
export function incrementScalePercent(scalePercent: ScalePercent, incrementBy: number): ScalePercent {
	return ratioToScalePercent({
		denominator: SCALE_PERCENT_MAX,
		numerator: scalePercent + incrementBy
	});
}

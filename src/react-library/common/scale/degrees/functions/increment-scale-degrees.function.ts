import { SCALE_DEGREES_MAX } from "../constants/scale-degrees-max.const";
import type { ScaleDegrees } from "../enums/scale-degrees.type";
import { ratioToScaleDegrees } from "./ratio-to-scale-degrees.function";

/**
 * Increment a {@link scaleDegrees} by {@link incrementBy}
 * Note: ratios below 0 are treated as 0% and ratios above 100 are treated as 100%
 * Note: a negative {@link incrementBy} will decrement {@link scaleDegrees}
 * @param scaleDegrees
 * @param incrementBy
 */
export function incrementScaleDegrees(scaleDegrees: ScaleDegrees, incrementBy: number): ScaleDegrees {
	return ratioToScaleDegrees({
		denominator: SCALE_DEGREES_MAX,
		numerator: scaleDegrees + incrementBy
	});
}

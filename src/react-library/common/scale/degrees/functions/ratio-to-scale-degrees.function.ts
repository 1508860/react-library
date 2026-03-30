import { ScaleDegreesError } from "../../../errors";
import type { IRatio } from "../../../interfaces";

import { SCALE_DEGREES_ALL_NEGATIVE } from "../constants/scale-degrees-all-negative.const";
import { SCALE_DEGREES_ALL_POSITIVE } from "../constants/scale-degrees-all-positive.const";
import { SCALE_DEGREES_FULL_NEGATIVE } from "../constants/scale-degrees-full-negative.const";
import { SCALE_DEGREES_FULL_POSITIVE } from "../constants/scale-degrees-full-positive.const";
import { SCALE_DEGREES_NONE } from "../constants/scale-degrees-none.const";

import type { ScaleDegreesState } from "../types/scale-degrees-state.type";

/**
 * Converts a {@link IRatio} to a {@link ScaleDegreesState}
 * @param ratio
 */
export function ratioToScaleDegreesState(ratio: IRatio): ScaleDegreesState {

	const ratioValue: number = (ratio.numerator / ratio.denominator);

	// Handle negative rotation
	if (ratioValue < SCALE_DEGREES_NONE) {
		const rotationCount = -(ratioValue % SCALE_DEGREES_FULL_NEGATIVE);
		const partialRatioValue: number = ratioValue - rotationCount;
		for (const scaleDegrees of SCALE_DEGREES_ALL_NEGATIVE) {
			if ((partialRatioValue <= scaleDegrees - 0.5) && (partialRatioValue > scaleDegrees + 0.5)) return {
				degrees: scaleDegrees,
				rotationCount: rotationCount
			};
		}

		throw new ScaleDegreesError();
	}

	// Handle positive rotation
	const rotationCount = (ratioValue % SCALE_DEGREES_FULL_POSITIVE);
	const partialRatioValue: number = ratioValue - rotationCount;
	for (const scaleDegrees of SCALE_DEGREES_ALL_POSITIVE) {
		if ((partialRatioValue >= scaleDegrees - 0.5) && (partialRatioValue < scaleDegrees + 0.5)) return {
			degrees: scaleDegrees,
			rotationCount: rotationCount
		};
	}

	throw new ScaleDegreesError();
}

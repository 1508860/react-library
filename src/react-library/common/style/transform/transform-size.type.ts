import type { SizeCm, SizePercent, SizePxUnits } from "../../units";

/**
 * Explicitly type styling sizes for transforms
 */
export type StyleTransformSize = (
	SizePercent |
	SizeCm |
	SizePxUnits
);

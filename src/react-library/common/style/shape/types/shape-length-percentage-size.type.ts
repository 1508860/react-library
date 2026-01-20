import type { SizeCm, SizePercent, SizePxUnits } from "../../../units";

/**
 * Type to represent the shape units allowed
 */
export type StyleShapeLengthPercentageSize = (
	SizePercent |
	SizeCm |
	SizePxUnits
);

import type { SizeCm, SizePercent, SizePxUnits } from "../../units";

/**
 * Explicitly type styling sizes for border radius
 */
export type StyleBorderRadiusSize = (
	SizePercent |
	SizeCm |
	SizePxUnits
);

import type { SizeCm, SizePercent, SizePxUnits } from "../../units";

/**
 * Type to represent the polygon size units allowed
 */
export type StylePolygonLengthPercentageSize = (
	SizePercent |
	SizeCm |
	SizePxUnits
);

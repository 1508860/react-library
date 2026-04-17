import type { SizeCm } from "./size-cm.type";
import type { SizePercent } from "./size-percent.type";
import type { SizePt } from "./size-pt.type";
import type { SizePxUnits } from "./size-px.type";

/**
 * Explicitly type styling sizes with units
 */
export type SizeWithUnits = (
	SizeCm |
	SizePercent |
	SizePt |
	SizePxUnits
);

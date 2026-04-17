import type { SizeCm } from "./size-cm.type";
import type { SizePercent } from "./size-percent.type";
import type { SizePt } from "./size-pt.type";
import type { SizePx } from "./size-px.type";

/**
 * Explicitly type styling sizes
 */
export type Size = (
	SizeCm |
	SizePercent |
	SizePt |
	SizePx
);

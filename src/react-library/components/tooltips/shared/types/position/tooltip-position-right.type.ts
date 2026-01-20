import type { IMarginLeft, IPaddingLeft, SizePx } from "@react-library/common";

/**
 * Describes the necessary information about a tooltip's right position for applying styles
 */
export type TooltipPositionRight = (
	Partial<IMarginLeft<SizePx>> &
	Partial<IPaddingLeft<SizePx>>
);

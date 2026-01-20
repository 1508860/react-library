import type { IMarginRight, IPaddingRight, SizePx } from "@react-library/common";

/**
 * Describes the necessary information about a tooltip's left position for applying styles
 */
export type TooltipPositionLeft = (
	Partial<IMarginRight<SizePx>> &
	Partial<IPaddingRight<SizePx>>
);

import type { IMarginTop, IPaddingTop, SizePx } from "@react-library/common";

/**
 * Describes the necessary information about a tooltip's bottom position for applying styles
 */
export type TooltipPositionBottom = (
	Partial<IMarginTop<SizePx>> &
	Partial<IPaddingTop<SizePx>>
);

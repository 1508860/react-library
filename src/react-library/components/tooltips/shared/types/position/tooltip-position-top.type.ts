import type { IMarginBottom, IPaddingBottom, SizePx } from "@react-library/common";

/**
 * Describes the necessary information about a tooltip's top position for applying styles
 */
export type TooltipPositionTop = (
	Partial<IMarginBottom<SizePx>> &
	Partial<IPaddingBottom<SizePx>>
);

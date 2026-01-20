import type { IMarginLeft, IMarginTop } from "../../interfaces";
import type { Size } from "../../units";
import type { PositionStrategyInternal } from "../enums/position-strategy-internal.type";
import type { PositionStrategyInternalBase } from "./position-strategy-internal-base.type";

/**
 * Describes a postion strategy of top left
 */
export type PositionStrategyInternalTopLeft<TMarginLeft extends Size, TMarginTop extends Size> = (
	Partial<IMarginLeft<TMarginLeft>> &
	Partial<IMarginTop<TMarginTop>> &
	PositionStrategyInternalBase<typeof PositionStrategyInternal.TopLeft>
);

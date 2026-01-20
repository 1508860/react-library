import type { IMarginBottom, IMarginLeft } from "../../interfaces";
import type { Size } from "../../units";
import type { PositionStrategyInternal } from "../enums/position-strategy-internal.type";
import type { PositionStrategyInternalBase } from "./position-strategy-internal-base.type";

/**
 * Describes a postion strategy of bottom left
 */
export type PositionStrategyInternalBottomLeft<TMarginLeft extends Size, TMarginBottom extends Size> = (
	Partial<IMarginBottom<TMarginBottom>> &
	Partial<IMarginLeft<TMarginLeft>> &
	PositionStrategyInternalBase<typeof PositionStrategyInternal.BottomLeft>
);

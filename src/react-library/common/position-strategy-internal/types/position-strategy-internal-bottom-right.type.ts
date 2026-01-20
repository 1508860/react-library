import type { IMarginBottom, IMarginRight } from "../../interfaces";
import type { Size } from "../../units";
import type { PositionStrategyInternal } from "../enums/position-strategy-internal.type";
import type { PositionStrategyInternalBase } from "./position-strategy-internal-base.type";

/**
 * Describes a postion strategy of bottom right
 */
export type PositionStrategyInternalBottomRight<TMarginRight extends Size, TMarginBottom extends Size> = (
	Partial<IMarginBottom<TMarginBottom>> &
	Partial<IMarginRight<TMarginRight>> &
	PositionStrategyInternalBase<typeof PositionStrategyInternal.BottomRight>
);

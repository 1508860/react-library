import type { IMarginRight, IMarginTop } from "../../interfaces";
import type { Size } from "../../units";
import type { PositionStrategyInternal } from "../enums/position-strategy-internal.type";
import type { PositionStrategyInternalBase } from "./position-strategy-internal-base.type";

/**
 * Describes a postion strategy of top right
 */
export type PositionStrategyInternalTopRight<TMarginRight extends Size, TMarginTop extends Size> = (
	Partial<IMarginRight<TMarginRight>> &
	Partial<IMarginTop<TMarginTop>> &
	PositionStrategyInternalBase<typeof PositionStrategyInternal.TopRight>
);

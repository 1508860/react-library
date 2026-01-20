import type { IMarginRight } from "../../interfaces";
import type { Size } from "../../units";
import type { PositionStrategyInternal } from "../enums/position-strategy-internal.type";
import type { PositionStrategyInternalBase } from "./position-strategy-internal-base.type";

/**
 * Describes a postion strategy of middle right
 */
export type PositionStrategyInternalMiddleRight<TMarginRight extends Size> = (
	Partial<IMarginRight<TMarginRight>> &
	PositionStrategyInternalBase<typeof PositionStrategyInternal.MiddleRight>
);

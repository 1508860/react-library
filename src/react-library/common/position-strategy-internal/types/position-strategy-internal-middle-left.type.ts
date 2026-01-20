import type { IMarginLeft } from "../../interfaces";
import type { Size } from "../../units";
import type { PositionStrategyInternal } from "../enums/position-strategy-internal.type";
import type { PositionStrategyInternalBase } from "./position-strategy-internal-base.type";

/**
 * Describes a postion strategy of middle left
 */
export type PositionStrategyInternalMiddleLeft<TMarginLeft extends Size> = (
	Partial<IMarginLeft<TMarginLeft>> &
	PositionStrategyInternalBase<typeof PositionStrategyInternal.MiddleLeft>
);

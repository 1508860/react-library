import type { IMarginBottom } from "../../interfaces";
import type { Size } from "../../units";
import type { PositionStrategyInternal } from "../enums/position-strategy-internal.type";
import type { PositionStrategyInternalBase } from "./position-strategy-internal-base.type";

/**
 * Describes a postion strategy of bottom center
 */
export type PositionStrategyInternalBottomCenter<TMarginBottom extends Size> = (
	Partial<IMarginBottom<TMarginBottom>> &
	PositionStrategyInternalBase<typeof PositionStrategyInternal.BottomCenter>
);

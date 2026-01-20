import type { IMarginTop } from "../../interfaces";
import type { Size } from "../../units";
import type { PositionStrategyInternal } from "../enums/position-strategy-internal.type";
import type { PositionStrategyInternalBase } from "./position-strategy-internal-base.type";

/**
 * Describes a postion strategy of top center
 */
export type PositionStrategyInternalTopCenter<TMarginTop extends Size> = (
	Partial<IMarginTop<TMarginTop>> &
	PositionStrategyInternalBase<typeof PositionStrategyInternal.TopCenter>
);

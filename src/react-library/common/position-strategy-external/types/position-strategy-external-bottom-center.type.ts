import type { IMarginTop } from "../../interfaces";
import type { Size } from "../../units";
import type { PositionStrategyExternal } from "../enums/position-strategy-external.type";
import type { PositionStrategyExternalBase } from "./position-strategy-external-base.type";

/**
 * Describes a postion strategy of bottom center
 */
export type PositionStrategyExternalBottomCenter<TMarginTop extends Size> = (
	Partial<IMarginTop<TMarginTop>> &
	PositionStrategyExternalBase<typeof PositionStrategyExternal.BottomCenter>
);

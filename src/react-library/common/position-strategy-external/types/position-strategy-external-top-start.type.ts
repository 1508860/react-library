import type { IMarginBottom } from "../../interfaces";
import type { Size } from "../../units";
import type { PositionStrategyExternal } from "../enums/position-strategy-external.type";
import type { PositionStrategyExternalBase } from "./position-strategy-external-base.type";

/**
 * Describes a postion strategy of top start
 */
export type PositionStrategyExternalTopStart<TMarginBottom extends Size> = (
	Partial<IMarginBottom<TMarginBottom>> &
	PositionStrategyExternalBase<typeof PositionStrategyExternal.TopStart>
);

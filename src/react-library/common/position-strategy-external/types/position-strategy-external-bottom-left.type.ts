import type { IMarginRight, IMarginTop } from "../../interfaces";
import type { Size } from "../../units";
import type { PositionStrategyExternal } from "../enums/position-strategy-external.type";
import type { PositionStrategyExternalBase } from "./position-strategy-external-base.type";

/**
 * Describes a postion strategy of bottom left
 */
export type PositionStrategyExternalBottomLeft<TMarginRight extends Size, TMarginTop extends Size> = (
	Partial<IMarginRight<TMarginRight>> &
	Partial<IMarginTop<TMarginTop>> &
	PositionStrategyExternalBase<typeof PositionStrategyExternal.BottomLeft>
);

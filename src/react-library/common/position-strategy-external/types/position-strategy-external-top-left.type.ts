import type { IMarginBottom, IMarginRight } from "../../interfaces";
import type { Size } from "../../units";
import type { PositionStrategyExternal } from "../enums/position-strategy-external.type";
import type { PositionStrategyExternalBase } from "./position-strategy-external-base.type";

/**
 * Describes a postion strategy of top left
 */
export type PositionStrategyExternalTopLeft<TMarginRight extends Size, TMarginBottom extends Size> = (
	Partial<IMarginBottom<TMarginBottom>> &
	Partial<IMarginRight<TMarginRight>> &
	PositionStrategyExternalBase<typeof PositionStrategyExternal.TopLeft>
);

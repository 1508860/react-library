import type { IMarginBottom, IMarginLeft } from "../../interfaces";
import type { Size } from "../../units";
import type { PositionStrategyExternal } from "../enums/position-strategy-external.type";
import type { PositionStrategyExternalBase } from "./position-strategy-external-base.type";

/**
 * Describes a postion strategy of top right
 */
export type PositionStrategyExternalTopRight<TMarginLeft extends Size, TMarginBottom extends Size> = (
	Partial<IMarginBottom<TMarginBottom>> &
	Partial<IMarginLeft<TMarginLeft>> &
	PositionStrategyExternalBase<typeof PositionStrategyExternal.TopRight>
);

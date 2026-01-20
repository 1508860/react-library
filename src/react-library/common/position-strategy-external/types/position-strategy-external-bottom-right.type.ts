import type { IMarginLeft, IMarginTop } from "../../interfaces";
import type { Size } from "../../units";
import type { PositionStrategyExternal } from "../enums/position-strategy-external.type";
import type { PositionStrategyExternalBase } from "./position-strategy-external-base.type";

/**
 * Describes a postion strategy of bottom right
 */
export type PositionStrategyExternalBottomRight<TMarginLeft extends Size, TMarginTop extends Size> = (
	Partial<IMarginLeft<TMarginLeft>> &
	Partial<IMarginTop<TMarginTop>> &
	PositionStrategyExternalBase<typeof PositionStrategyExternal.BottomRight>
);

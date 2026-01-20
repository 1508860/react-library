import type { IMarginLeft } from "../../interfaces";
import type { Size } from "../../units";
import type { PositionStrategyExternal } from "../enums/position-strategy-external.type";
import type { PositionStrategyExternalBase } from "./position-strategy-external-base.type";

/**
 * Describes a postion strategy of right end
 */
export type PositionStrategyExternalRightEnd<TMarginLeft extends Size> = (
	Partial<IMarginLeft<TMarginLeft>> &
	PositionStrategyExternalBase<typeof PositionStrategyExternal.RightEnd>
);

import type { IMarginRight } from "../../interfaces";
import type { Size } from "../../units";
import type { PositionStrategyExternal } from "../enums/position-strategy-external.type";
import type { PositionStrategyExternalBase } from "./position-strategy-external-base.type";

/**
 * Describes a postion strategy of left center
 */
export type PositionStrategyExternalLeftCenter<TMarginRight extends Size> = (
	Partial<IMarginRight<TMarginRight>> &
	PositionStrategyExternalBase<typeof PositionStrategyExternal.LeftCenter>
);

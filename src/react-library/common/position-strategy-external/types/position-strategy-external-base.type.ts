import type { IPositionType } from "../../interfaces";
import type { PositionStrategyExternal } from "../enums/position-strategy-external.type";

/**
 * Describes the base external postion strategy
 */
export type PositionStrategyExternalBase<TType extends PositionStrategyExternal> = IPositionType<TType>;

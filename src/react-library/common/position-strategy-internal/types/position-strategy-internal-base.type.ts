import type { IPositionType } from "../../interfaces";
import type { PositionStrategyInternal } from "../enums/position-strategy-internal.type";

/**
 * Describes the base internal postion strategy
 */
export type PositionStrategyInternalBase<TType extends PositionStrategyInternal> = IPositionType<TType>;

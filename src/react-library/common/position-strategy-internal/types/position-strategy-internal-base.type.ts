import type { IType } from "../../interfaces";
import type { PrefixKeys } from "../../key-remapping";
import type { PositionStrategyInternal } from "../enums/position-strategy-internal.type";

/**
 * Describes the base internal postion strategy
 */
export type PositionStrategyInternalBase<TType extends PositionStrategyInternal> = PrefixKeys<IType<TType>, "position">;

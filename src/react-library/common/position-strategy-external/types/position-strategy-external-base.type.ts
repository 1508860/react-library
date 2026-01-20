import type { IType } from "../../interfaces";
import type { PrefixKeys } from "../../key-remapping";
import type { PositionStrategyExternal } from "../enums/position-strategy-external.type";

/**
 * Describes the base external postion strategy
 */
export type PositionStrategyExternalBase<TType extends PositionStrategyExternal> = PrefixKeys<IType<TType>, "position">;

import type { CallbackWith2Parameters } from "../../../types";

/**
 * Type to describe the equality callback to be used for the resolved state
 */
export type UseResolveStateEqualityCallback<TParam> = CallbackWith2Parameters<TParam, TParam, boolean>;

import type { CallbackWith2Parameters } from "react-library/common/types";

/**
 * Type to describe the equality callback to be used for the resolved state
 */
export type UseResolveStateEqualityCallback<TParam> = CallbackWith2Parameters<TParam, TParam, boolean>;

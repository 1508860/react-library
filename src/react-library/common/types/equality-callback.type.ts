import type { CallbackWith2Parameters } from "./callback.type";

/**
 * Type to describe an equality callback to determine if two value of type {@link TParam} are equal
 */
export type EqualityCallback<TParam> = CallbackWith2Parameters<TParam, TParam, boolean>;

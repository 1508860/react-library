import type { UseResolveStateEqualityCallback } from "../../hooks";

/**
 * Describes equality function to compare two state before updating the subscriber state
 */
export type UseSubscriberEqualityCallback<TState> = UseResolveStateEqualityCallback<TState>;

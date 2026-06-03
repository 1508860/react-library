import { useCallback, useEffect, useState } from "react";

import { generateGuid, type Guid } from "../../guid";
import { useResolveState } from "../../hooks";
import type { Callback, EqualityCallback } from "../../types";

import type { SubscriberState } from "../classes/subscriber-state.class";
import type { Subscriber } from "../types/subscriber.type";

/**
 * Custom hook for creating a subscriber to be used by a subscribing component and consumed by a subscriber state
 * @param subscriberState
 * @param state
 * @param equalityCallback
 */
export function useSubscriber<TState>(
	subscriberState: SubscriberState<TState> | null,
	state: TState,
	equalityCallback?: EqualityCallback<TState>
): void {

	const [id] = useState<Guid>(() => generateGuid());

	const resolveState = useCallback<Callback<TState>>(() => state, [state]);

	const resolvedState = useResolveState(resolveState, equalityCallback);

	useEffect(
		() => {
			if(!subscriberState) return;
			const subscriber: Subscriber<TState> = {
				id: id,
				state: resolvedState
			};
			subscriberState.subscribe(subscriber);
			return () => subscriberState.unsubscribe(subscriber);
		},
		[subscriberState, id, resolvedState]
	);
}

import { useCallback, useEffect, useRef, useState } from "react";

import type { Callback } from "../../types";

/**
 * Custom hook to handle delaying the call of a callback function
 * Note: If the parameters change and there is a callback call already being delayed, the timer will reset
 * @param callback
 * @param delayMs
 */
export function useDelayCallback(callback: Callback<void>, delayMs: number): Callback<void> {

	const callbackRef = useRef<Callback<void>>(callback);
	const delayMsRef = useRef<number>(delayMs);

	const [callId, setCallId] = useState<number>(() => 0);
	const callIdRef = useRef<number>(callId);

	const isBeingCalled = useRef<boolean>(false);

	const state = useCallback<Callback<void>>(
		() => {
			const newCallId = callIdRef.current + 1;
			setCallId(newCallId);
		},
		[]
	);

	useEffect(
		() => {
			if (callback !== callbackRef.current) callbackRef.current = callback;
			if (delayMs !== delayMsRef.current) delayMsRef.current = delayMs;

			if (
				callId === callIdRef.current &&
				!isBeingCalled.current
			) return;

			isBeingCalled.current = true;

			const timeout = setTimeout(
				() => {
					callback();
					isBeingCalled.current = false;
				},
				delayMs
			);

			return () => {
				clearTimeout(timeout);
				isBeingCalled.current = false;
			}
		},
		[callback, delayMs, callId]
	);

	return state;
}

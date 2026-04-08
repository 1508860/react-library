import { useEffect, useRef, useState } from "react";

import { UseDelayBooleanStateDirection } from "./enums/use-delay-boolean-state-direction.type";

/**
 * Custom hook to handle delaying the change of a boolean state
 * @param boolean
 * @param direction
 * @param delayMs
 */
export function useDelayBooleanState(boolean: boolean, direction: UseDelayBooleanStateDirection, delayMs: number): [boolean] {

	const booleanRef = useRef<boolean>(boolean);
	const directionRef = useRef<UseDelayBooleanStateDirection>(direction);
	const delayMsRef = useRef<number>(delayMs);
	const [state, setState] = useState<boolean>(() => boolean);

	useEffect(
		() => {
			if (
				boolean === booleanRef.current &&
				direction == directionRef.current &&
				delayMs == delayMsRef.current
			) return;

			const newState: boolean = boolean;

			booleanRef.current = newState;
			directionRef.current = direction;
			delayMsRef.current = delayMs;

			if (
				direction === UseDelayBooleanStateDirection.All ||
				(direction === UseDelayBooleanStateDirection.ToFalse && !newState) ||
				(direction === UseDelayBooleanStateDirection.ToTrue && newState)
			) {
				const timeout = setTimeout(() => setState(newState), delayMs);
				return () => clearTimeout(timeout);
			}

			setState(newState);

			return;
		},
		[boolean, direction, delayMs]
	);

	return [state];
}

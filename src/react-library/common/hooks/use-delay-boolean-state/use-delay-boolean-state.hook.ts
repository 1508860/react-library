import { useEffect, useRef, useState } from "react";

import { UseDelayBooleanStateDirection } from "./enums/use-delay-boolean-state-direction.type";

/**
 * Custom hook to handle delaying the change of a boolean state
 */
export function useDelayBooleanState(show: boolean, direction: UseDelayBooleanStateDirection, delayMs: number): [boolean] {

	const showRef = useRef<boolean>(show);
	const directionRef = useRef<UseDelayBooleanStateDirection>(direction);
	const delayMsRef = useRef<number>(delayMs);
	const [state, setState] = useState<boolean>(() => show);

	useEffect(
		() => {
			if (
				show === showRef.current &&
				direction == directionRef.current &&
				delayMs == delayMsRef.current
			) return;

			const newState: boolean = show;

			showRef.current = newState;
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
		[show, direction, delayMs]
	);

	return [state];
}

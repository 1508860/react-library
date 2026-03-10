import { useCallback, useEffect, useRef, useState } from "react";

import { wrapArrayIndex } from "../../functions";
import { generateGuid, type Guid } from "../../guid";

import {
	UseArrayIncrementDirection,
	UseArrayIncrementDirectionAmountMap
} from "./enums/use-array-increment-direction.type";
import type { UseArrayIncrementStateProps } from "./types/use-array-increment-state-props.type";
import type { UseArrayIncrementState } from "./types/use-array-increment-state.type";

/**
 * Describes use state hook result for {@link TElement} from {@link TArray}
 * Cycles through the array on an interval and/or from manually modifying the state through the returned callback functions
 * @param elements
 * @param props
 * @returns State {@link UseArrayIncrementState<TElement>}
 */
export function useArrayIncrementState<TElement, TArray extends Array<TElement>>(
	elements: TArray,
	props: UseArrayIncrementStateProps
): UseArrayIncrementState<TElement> {

	const initialIndexRef = useRef<number>(0);
	const indexRef = useRef<number>(initialIndexRef.current);
	const incrementCountRef = useRef<number>(0);
	const [state, setState] = useState<TElement>(() => elements[indexRef.current]);

	const [manualUpdateId, setManualUpdateId] = useState<Guid>(() => generateGuid());

	// Handle increment / decrement
	const handleIncrement = useCallback(
		(direction: UseArrayIncrementDirection, isManual: boolean) => {
			const incrementBy = UseArrayIncrementDirectionAmountMap[direction];
			const newIndex = wrapArrayIndex(indexRef.current, (elements.length - 1), incrementBy);
			indexRef.current = newIndex;
			incrementCountRef.current += incrementBy;
			setState(elements[newIndex]);
			if (isManual) setManualUpdateId(generateGuid());
		},
		[elements]
	);
	const decrement = useCallback(() => handleIncrement(UseArrayIncrementDirection.Backwards, true), [handleIncrement]);
	const increment = useCallback(() => handleIncrement(UseArrayIncrementDirection.Forwards, true), [handleIncrement]);

	// Handle reset
	const reset = useCallback(
		() => {
			indexRef.current = initialIndexRef.current;
			incrementCountRef.current = 0;
			setState(elements[initialIndexRef.current]);
		},
		[elements]
	);


	useEffect(
		() => {
			if (!props.intervalProps) return;

			const direction = props.intervalProps.direction;
			const interval = setInterval(() => handleIncrement(direction, false), props.intervalProps.intervalMs);

			return () => {
				clearInterval(interval);
			}
		},
		// manualUpdateId triggers reset of timer here so we don't increment again too quickly
		[elements, props.intervalProps, manualUpdateId, handleIncrement]
	);

	return {
		count: incrementCountRef.current,
		decrement: decrement,
		increment: increment,
		index: initialIndexRef.current,
		reset: reset,
		set: setState,
		state: state
	};
}

import { useEffect, useRef, useState } from "react";

/**
 * Describes use state hook result for {@link TElement} from {@link TArray}
 * Cycles through the array on an interval
 * @param elements
 * @param intervalMs
 * @returns Current state {@link TElement} and {@link incrementCount}
 */
export function useArrayIncrementIntervalState<TElement, TArray extends Array<TElement>>(
	elements: TArray,
	intervalMs: number
): [TElement, number] {

	const incrementCount = useRef<number>(0);
	const indexRef = useRef<number>(0);
	const [state, setState] = useState<TElement>(() => elements[indexRef.current]);

	useEffect(
		() => {
			const indexMax: number = elements.length - 1;
			const interval = setInterval(
				() => {
					// Increment index by 1
					if (indexRef.current < indexMax) indexRef.current += 1;
					// First index
					else indexRef.current = 0;

					// Set increment count
					incrementCount.current += 1;

					// Apply state from ref
					setState(elements[indexRef.current]);
				},
				intervalMs
			);
			return () => {
				clearInterval(interval);
			}
		},
		[elements, intervalMs]
	);

	return [state, incrementCount.current];
}

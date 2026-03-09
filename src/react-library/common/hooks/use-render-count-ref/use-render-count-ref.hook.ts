import { useRef } from "react";

/**
 * Describes use ref hook to handle incrementing a counter on each call of the hook inside a component
 */
export function useRenderCounterRef(): number {
	return ++useRef<number>(0).current;
}

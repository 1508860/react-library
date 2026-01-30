import { useArrayIncrementIntervalState } from "@react-library/common";

/**
 * Example router guard that alternates between success & failure
 * @param props
 */
export function ReactLibraryRouterBasicDemoGuardAlternates(): boolean {

	const [state] = useArrayIncrementIntervalState<boolean, [true, false]>([true, false], 1000);

	return state;
}

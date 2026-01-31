import { useArrayIncrementIntervalState, type ArrayMinLength3 } from "@react-library/common";
import { RouterGuardState } from "@react-library/router";

/**
 * Example router guard that alternates between success & failure
 * @param props
 */
export function ReactLibraryRouterBasicDemoGuardOnInterval(): RouterGuardState {

	const [state] = useArrayIncrementIntervalState<RouterGuardState, ArrayMinLength3<RouterGuardState>>(
		[
			RouterGuardState.Failure,
			RouterGuardState.Loading,
			RouterGuardState.Success
		],
		1000
	);

	return state;
}

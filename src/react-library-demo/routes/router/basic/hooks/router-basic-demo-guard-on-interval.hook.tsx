import { UseArrayIncrementDirection, useArrayIncrementState, type ArrayMinLength3 } from "@react-library/common";
import { RouterGuardState } from "@react-library/router";

/**
 * Example router guard that alternates between success & failure
 * @param props
 */
export function ReactLibraryRouterBasicDemoGuardOnInterval(): RouterGuardState {

	const { state } = useArrayIncrementState<RouterGuardState, ArrayMinLength3<RouterGuardState>>(
		[
			RouterGuardState.Failure,
			RouterGuardState.Loading,
			RouterGuardState.Success
		],
		{
			intervalProps: {
				direction: UseArrayIncrementDirection.Forwards,
				intervalMs: 1000
			}
		}
	);

	return state;
}

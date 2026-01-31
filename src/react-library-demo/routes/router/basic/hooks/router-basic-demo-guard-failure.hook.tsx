import { useState } from "react";

import { RouterGuardState } from "@react-library/router";

/**
 * Example router guard that always fails
 * @param props
 */
export function ReactLibraryRouterBasicDemoGuardFailure(): RouterGuardState {

	const [state] = useState<RouterGuardState>(() => RouterGuardState.Failure);

	return state;
}

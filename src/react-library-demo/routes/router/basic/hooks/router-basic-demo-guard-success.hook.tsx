import { useState } from "react";

import { RouterGuardState } from "@react-library/router";

/**
 * Example router guard that always succeeds
 * @param props
 */
export function ReactLibraryRouterBasicDemoGuardSuccess(): RouterGuardState {

	const [state] = useState<RouterGuardState>(() => RouterGuardState.Success);

	return state;
}

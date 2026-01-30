import { useState } from "react";

/**
 * Example router guard that always succeeds
 * @param props
 */
export function ReactLibraryRouterBasicDemoGuardSuccess(): boolean {

	const [state] = useState(() => true);

	return state;
}

import { useState } from "react";

/**
 * Example router guard that always fails
 * @param props
 */
export function ReactLibraryRouterBasicDemoGuardFailure(): boolean {

	const [state] = useState(() => false);

	return state;
}

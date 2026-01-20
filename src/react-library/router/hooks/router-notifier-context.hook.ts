import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { ROUTER_NOTIFIER_CONTEXT } from "../constants/router-notifier-context.const";
import type { RouterNotifier } from "../types/router-notifier.type";

/**
 * Returns context for {@link ROUTER_NOTIFIER_CONTEXT} and ensures a non-null value
 */
export function useRouterNotifierContext(): RouterNotifier {
	const result = useContext(ROUTER_NOTIFIER_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};

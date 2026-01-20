import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { ROUTER_CONTEXT } from "../constants/router-context.const";
import type { RouteRoot } from "../types/route.type";

/**
 * Returns context for {@link ROUTER_CONTEXT} and ensures a non-null value
 */
export function useRouterContext(): RouteRoot {
	const result = useContext(ROUTER_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};

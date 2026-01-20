import { type Context, createContext } from "react";

import type { RouteRoot } from "../types/route.type";

/**
 * Context to provide the routing configuration
 */
export const ROUTER_CONTEXT: Context<RouteRoot | null> = createContext<RouteRoot | null>(null);

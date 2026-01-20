import { type Context, createContext } from "react";

import { Notifier } from "@react-library/common";

import type { RouterNotifier } from "../types/router-notifier.type";
import type { RouterSegmentId } from "../types/router-segment-id.type";

/**
 * Context to provide a notifier for handling changes to the current route
 */
export const ROUTER_NOTIFIER_CONTEXT: Context<RouterNotifier> = createContext<RouterNotifier>(new Notifier<RouterSegmentId>(() => { }));

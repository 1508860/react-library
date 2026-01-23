import { type Context, createContext } from "react";

import { Subject } from "@react-library/common";

import type { RouterActiveRoutes } from "../types/router-active-routes.type";
import type { RouterSubject } from "../types/router-subject.type";

/**
 * Context to provide a subject for handling changes to the current route
 */
export const ROUTER_SUBJECT_CONTEXT: Context<RouterSubject> = createContext<RouterSubject>(new Subject<RouterActiveRoutes>({}));

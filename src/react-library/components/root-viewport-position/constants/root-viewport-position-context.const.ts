import { type Context, createContext } from "react";

import { VIEWPORT_POSITION_DEFAULT, type IViewportPosition } from "@react-library/common";

/**
 * Context to provide a root viewport position
 */
export const ROOT_VIEWPORT_POSITION_CONTEXT: Context<IViewportPosition> = createContext<IViewportPosition>(VIEWPORT_POSITION_DEFAULT);

import { type Context, createContext } from "react";

import { VIEWPORT_POSITION_PX_DEFAULT, type ViewportPositionPx } from "@react-library/common";

/**
 * Context to provide a root viewport position in px
 */
export const ROOT_VIEWPORT_POSITION_PX_CONTEXT: Context<ViewportPositionPx> = createContext<ViewportPositionPx>(VIEWPORT_POSITION_PX_DEFAULT);

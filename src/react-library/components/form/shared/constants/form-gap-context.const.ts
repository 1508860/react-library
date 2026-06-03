import { type Context, createContext } from "react";

import type { Size } from "@react-library/common";

/**
 * Context to provide a gap in {@link Size} between child elements
 */
export const FORM_GAP_CONTEXT: Context<Size | null> = createContext<Size | null>(null);

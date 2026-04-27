import { type Context, createContext } from "react";

import type { CheckboxEvents } from "../types/checkbox-events.type";

/**
 * Context to provide {@link CheckboxEvents}
 */
export const CHECKBOX_EVENTS_CONTEXT: Context<CheckboxEvents | null> = createContext<CheckboxEvents | null>(null);

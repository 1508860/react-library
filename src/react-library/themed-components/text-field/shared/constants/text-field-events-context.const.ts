import { type Context, createContext } from "react";

import type { TextFieldEvents } from "../types/text-field-events.type";

/**
 * Context to provide {@link TextFieldEvents}
 */
export const TEXT_FIELD_EVENTS_CONTEXT: Context<TextFieldEvents | null> = createContext<TextFieldEvents | null>(null);

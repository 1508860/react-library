import { type Context, createContext } from "react";

import type { CheckboxSubscriberState } from "../types/checkbox-subscriber-state.type";

/**
 * Context to provide {@link CheckboxSubscriberState}
 */
export const CHECKBOX_SUBSCRIBER_STATE_CONTEXT: Context<CheckboxSubscriberState | null> = createContext<CheckboxSubscriberState | null>(null);

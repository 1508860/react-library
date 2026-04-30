import { type Context, createContext } from "react";

import type { RadioButtonName } from "../types/radio-button-name.type";

/**
 * Context to provide a radio button name for the group
 */
export const RADIO_BUTTON_NAME_CONTEXT: Context<RadioButtonName | null> = createContext<RadioButtonName | null>(null);

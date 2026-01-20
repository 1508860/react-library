import { type Context, createContext } from "react";

import type { LanguageCode } from "./language-code.type";

/**
 * Context to provide {@link LanguageCode}
 */
export const LANGUAGE_CODE_CONTEXT: Context<LanguageCode | null> = createContext<LanguageCode | null>(null);

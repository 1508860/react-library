import { type Context, createContext } from "react";

import type { CurrencyCode } from "./currency-code.type";

/**
 * Context to provide {@link CurrencyCode}
 */
export const CURRENCY_CODE_CONTEXT: Context<CurrencyCode | null> = createContext<CurrencyCode | null>(null);

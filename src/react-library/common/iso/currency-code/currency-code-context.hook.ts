import { useContext } from "react";

import { NullContextError } from "@react-library/common";

import { CURRENCY_CODE_CONTEXT } from "./currency-code-context.const";
import type { CurrencyCode } from "./currency-code.type";

/**
 * Returns context for {@link CURRENCY_CODE_CONTEXT} and ensures a non-null value
 */
export function useCurrencyCodeContext(): CurrencyCode {
	const result = useContext(CURRENCY_CODE_CONTEXT);
	if (!result) throw new NullContextError();
	return result;
};
